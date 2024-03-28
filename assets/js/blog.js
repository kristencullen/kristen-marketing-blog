document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = document.getElementById('blogPosts');

    if (blogPosts) {
        function displayBlogs(blogs) {
            blogs.forEach(blog => {
                const blogDiv = document.createElement('div');
                blogDiv.classList.add('blog');

                const heading = document.createElement('h2');
                heading.textContent = blog.title;

                const userPara = document.createElement('p');
                userPara.innerHTML = `<strong>Username:</strong> ${blog.username}`;

                const contentPara = document.createElement('p');
                contentPara.textContent = blog.content;

                blogDiv.appendChild(heading);
                blogDiv.appendChild(userPara);
                blogDiv.appendChild(contentPara);

                blogPosts.appendChild(blogDiv);
            });
        }

        if (localStorage.getItem('blogs')) {
            const blogs = JSON.parse(localStorage.getItem('blogs'));
            displayBlogs(blogs);
        } else {
            blogPosts.innerHTML = '<p>No blogs available</p>';
        }
    } else {
        console.error('Element with id "blogPosts" not found.');
    }
});

function goBack() {
    window.history.back();
}