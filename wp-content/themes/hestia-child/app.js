document.getElementById('hestia-about ').addEventListener('DOMContentLoaded', cargarPosts);




async function cargarPosts() {
        // Para produccion poner window.local
    let url = `http://54.153.122.87/wp-json/wp/v2/posts`;
    let respuesta = await fetch(url)
    const posts = await respuesta.json();
    return posts;
}

cargarPosts()
    .then (posts => console.log(posts));