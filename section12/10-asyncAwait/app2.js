//? ASYNC AWAIT

// const hello = async () => {
//   return "Hello world";
// };
// console.log(hello());

// hello()
// .then(res=>{console.log(res)})

document.querySelector("#postBtn").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post) => {
      console.log(post);
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        // fetch(`https://jsonplaceholder.typicode.com/comments?title=${post.title}`)
        .then((response) => response.json())
        .then((comment) => console.log(comment));
    })
    .catch((error) => {});
});

// ?ASYNC Await ile yapılışı:
document.querySelector("#postBtn").addEventListener("click", async () => {
  const post = await(await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
  const comment=await(await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
  console.log(post,comment);
});
