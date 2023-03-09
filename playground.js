console.log( personajes )

const personajesJugables = personajes.data.filter( personaje => personaje.isPlayableCharacter )

const personajesNuevo = personajesJugables.map( personaje => {
    let aux = {}
    aux.name = personaje.displayName
    aux.description = personaje.description
    aux.image = personaje.displayIconSmall
    aux.role = personaje.role.displayName
    return aux
} )

const cards = personajesNuevo.reduce( (acc, act) => {
    return acc + `
        <div class="card border-primary col-4" style="heigth: 18rem">
        <img class="card-img-top" src="${act.image}" alt="Imagen de ${act.name}">
        <div class="card-body">
        <h4 class="card-title">${act.name}</h4>
        <p class="card-text">${act.description}</p>
        </div>
        </div>
    `
}, "" )

console.log( cards )

const contenedor = document.getElementById( 'contenedor' )

contenedor.innerHTML = cards