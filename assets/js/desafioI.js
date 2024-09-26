async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Error al obtener los posts');
        }
        const posts = await response.json();

        displayPosts(posts);

    } catch (error) {
        console.error('Error:', error.message);
    }
}

function displayPosts(posts) {
    const postData = document.getElementById('post-data');

    const ul = document.createElement('ul');

    posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${post.title}</strong><br> ${post.body}<br><br>`;
        ul.appendChild(li);
    });

    postData.innerHTML = ''; 
    postData.appendChild(ul);
}
