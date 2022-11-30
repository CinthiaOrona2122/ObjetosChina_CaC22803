const ANIMAL = {
    nombre: "China",
    dueña: "La profe Gisela",
    raza: "Maltés",
    edad: 8,
    actividades: [" Jugar", " Correr", " Dormir", " Cazar", " Selfies"],
    comida: [" Atun", " Pescado fresco del mejor", " Yogur", " Helado", " La de latita"],
    visitaAlVete: 2,
    vacunas: 4
};

const listaActividades = Object.values(ANIMAL.actividades);
console.log(listaActividades);

const listaComidas = Object.values(ANIMAL.comida);

let descripcion = document.querySelector("#descripcionChina");
descripcion.innerHTML = `<b>Nombre:</b> ${ANIMAL.nombre}</br> 
                        <b>Dueña:</b> ${ANIMAL.dueña}</br> 
                        <b>Raza:</b> ${ANIMAL.raza}</br> 
                        <b>Edad:</b> ${ANIMAL.edad}</br>
                        <b>Actividades:</b> ${listaActividades}</br>  
                        <b>Comida:</b> ${listaComidas}</br>  
                        <b>Visita al veterinario:</b> ${ANIMAL.visitaAlVete}</br> 
                        <b>Vacunas:</b> ${ANIMAL.vacunas}`;

