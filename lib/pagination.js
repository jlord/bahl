var handlebars = require('handlebars')

module.exports = function makePages(filesAndContent, opts) {
  // add back callback
  var posts = separatePosts(filesAndContent)
  var totalPosts = posts.length
  var totalPages = Math.ceil(totalPosts / opts.pagination)
  var pagination = opts.pagination || 5
  var pages = getPages(totalPosts, pagination, posts)

  // sort by date
  // var sorted = sortPosts(posts)





  console.log(posts)



  // posts.forEach(function (page) {
  //   var pageNum = 1
  //   var pagePath = 'page/'
  //   var template = chooseTemplate(pagePath, opts.templates) || 'main'
  //   var htmlOutput = tpl.templates[template](page.content)
  //   writeFile(page.output, htmlOutput)
  //   pageNum++
  // })




  // get posts from all pages
  // sort by date
  // sort by search term or tag
}

function sortPosts(posts) {
  posts.sort(function(a,b) {
    a = new Date(a.date)
    b = new Date(b.date)
    return (a === b) ? 0 : a > b ? -1 : 1;
  })
}

function getPages(totalPosts, pagination, posts){
  var pages = []
  for (var i = 0; i < totalPosts.length; i += pagination) {
    console.log("hi")
    pages.push(posts.slice(i, i + pagination))
  }
  return pages
}

function separatePosts (filesAndContent) {
  var posts = []
  filesAndContent.forEach(function(item) {
    if (item.output.match('/blog/'))
      posts.push(item)
  })
  // sort by date
  posts.sort(function(a,b) {
    a = a.content.date
    b = b.content.date
    return (a === b) ? 0 : a > b ? -1 : 1;
  })
  return posts.reverse()
}

// function getPostsPerPage(posts, opts.pagination, totalPages) {
//   var postsPerPage = []
//   var currentPage = 1
//
//   posts.forEach(function (post) {
//     var sliceAt = (currentPage * pagination) + 1 // bc starts at 0
//
//   })
// }

// function page(posts, totalPages, pagination) {
//
// }

// [ { input: '/Users/jessicalord/jCode/modules/myblogz/content/blog/first-post.md',
//     output: '/Users/jessicalord/jCode/modules/myblogz/site/blog/first-post.html',
//     content:
//      { title: 'Hello First Post',
//        author: 'By Balrog',
//        date: 'Jan 2013',
//        tags: [Object],
//        content: '<h1>Hello First Post</h1>\n<h2>By Balrog</h2>\n<h2>Jan 2013</h2>\n<h2>test</h2>\n<p>I love bloggin.</p>\n' } } ]