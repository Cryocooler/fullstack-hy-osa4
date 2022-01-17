const array = require('lodash/array');
const object = require('lodash/fp/object');

const dummy = (blogs) => 1;
// ...

const testBlogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0,
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0,
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
    __v: 0,
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0,
    __v: 0,
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
    __v: 0,
  },
];

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
  },
];

const totalLikes = (blogs) => {
  const sumOfLikes = blogs.reduce((x, y) => x + y.likes, 0);
  return sumOfLikes;
};
const favoriteBlog = (blogs) => {
  const mostLiked = blogs.reduce((x, y) => ((x.likes > y.likes) ? x : y), blogs, null);
  return mostLiked;
};

// const maxLike = testBlogs.reduce((x, y) => (x.likes > y.likes) ? x.id : y.id, 1);

console.log('maxlike', favoriteBlog(testBlogs));

// for (const [key, value] of Object.entries(listWithOneBlog[0])) {
//   console.log(`${key}: ${value}`)

// return author who has the largest amount of blogs
//
function findOcc(arr, key) {
  const arr2 = [];

  arr.forEach((x) => {
    // Checking if there is any object in arr2
    // which contains the key value
    if (arr2.some((val) => val[key] === x[key])) {
      // If yes! then increase the occurrence by 1
      arr2.forEach((k) => {
        if (k[key] === x[key]) {
          k.blogs += 1;
        }
      });
    } else {
      // If not! Then create a new object initialize
      // it with the present iteration key's value and
      // set the occurrence to 1
      const a = {};
      a[key] = x[key];
      a.blogs = 1;
      arr2.push(a);
    }
  });
  const arr3 = arr2.sort((a, b) => parseFloat(b.blogs) - parseFloat(a.blogs));
  return arr3[0];
}

console.log(findOcc(testBlogs, 'author'));

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
