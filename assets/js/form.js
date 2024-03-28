document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;

    console.log('Username:', username);
    console.log('Title:', title);
    console.log('Blog Content:', content);

    window.location.href = "blog.html";
});