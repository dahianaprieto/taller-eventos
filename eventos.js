let div= document.createElement('div');
div.setAttribute("id", "part1");
let boton= document.getElementById("boton");
div.appendChild(boton);
document.body.appendChild(div);
console.log(div)
   
div.addEventListener('click', () =>{
    alert("Hola! Soy el div");
});

