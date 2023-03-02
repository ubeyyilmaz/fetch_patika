async function getData() {
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

    const post3 = await (await fetch("https://jsonplaceholder.typicode.com/posts/3")).json();

    const post4 = await (await fetch("https://jsonplaceholder.typicode.com/posts/4")).json();

    const user1 = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();

    const user2 = await (await fetch("https://jsonplaceholder.typicode.com/users/2")).json();

    const user3 = await (await fetch("https://jsonplaceholder.typicode.com/users/3")).json();

    const user4 = await (await fetch("https://jsonplaceholder.typicode.com/users/4")).json();

    console.log("post1",post1)
    console.log("post2",post2)
    console.log("post3",post3);
    console.log("post4",post4);
    console.log("user1",user1);
    console.log("user2",user2);
    console.log("user3",user3);
    console.log("user4",user4);
}