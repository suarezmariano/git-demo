const posts = [
  { title: 'one', body: 'this is post one' },
  { title: 'two', body: 'this is post two' },
];

const getPosts = () => {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 4000);
};

const createPost = (post) => {
  setTimeout(() => {
    posts.push(post);
  }, 4000);
};

createPost({ title: 'three', body: 'this is post three' });
getPosts();
