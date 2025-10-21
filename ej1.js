let id = "",
videitos = "",
shorts = "",
mirar = "";
titulo = "";

const basededatos = `{
"shorts":[
{"id", "0", "img":"https://fastly.picsum.photos/id/966/400/500.jpg?hmac=mWvjN5mDBKp0gCaqcNlghIWx0g3UQOGAbJ07chyg2oU", "titulo":"Paisaje1", "mirar":"55" },
{"id", "1", "img":"https://fastly.picsum.photos/id/757/400/500.jpg?hmac=t6LOTD-tb5YVzu_J9AsHQnDmuW75ieCWAEm2_vsYmzo", "titulo":"Paisaje2", "mirar":"1000"},
{"id", "2", "img":"https://fastly.picsum.photos/id/330/400/500.jpg?hmac=QyuBVzc4YNC5NFOdTGSo91z1tRtgJjNn8GHZkrciEqo", "titulo":"Paisaje3", "mirar":"3000"}
]
}`;

const obj = JSON.parse(basededatos);
const contenedor = document.getElementById("shorts");
contenedor.innerHTML = ""; //limpia el contenedor este

obj.videitos.forEach(short =>{
      contenedor.innerHTML += `
    <a href="">
        <article id="${short.id}">
            <img src="${short.img}" alt="${short.titulo}">
            <h2>${short.titulo}</h2>
            <p>Mirar: ${short.mirar}</p>
        </article>
    </a>
  `;
})
