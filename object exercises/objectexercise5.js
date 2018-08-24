//Use a constructor function to create a 
//post object.

//Imagine your building a blogging engine,
//they are building a post but that have 
// not published it yet.

//What do  you think it would look like?


let post = new Post('Great Day', 'I had fun', 'Dan');

console.log(post);


function Post(title, body, author) {
    this.title = title;
    this.body= body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}