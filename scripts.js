// CONSTANTES Y VARIABLES UNIVERSALES
// DAÑO PARA CALCULAR
const uno = parseInt(1)

// NOMBRE JUGADORES
let nombreJugadores = []
let vidasJugadores = []



// FUNCIONES

// DEFINE LOS NOMBRES SEGUN LA CANTIDAD
function cantJugadores(){
    // EXTRAE Y CALCULA LA CANTIDAD DE JUGADORES
    let inputCant = parseInt(document.querySelector("#inputCantJugadores").value)
    const tablaJugadores = document.getElementById(sectionTablaJugadores)

    if(inputCant == 2){
        // CALCULA LA VIDA SEGÚN LOS JUGADORES
        vidasJugadores.push(parseInt((document.querySelector("#inputCantJugadores").value)*10))
        console.log(vidasJugadores)

        // CONSTRUYE LOS INPUTS PARA NOMBRES
        const infoJugadores2 = document.getElementById(divCantJugadores)
        divCantJugadores.innerHTML += (
            `
            <br>
            <label for="inputNombreJugador1">Nombre de los jugadores</label><br>
            <input id="inputNombreJugador1" type="text" placeholder="Nombre del Jugador 1"><br>
            <input id="inputNombreJugador2" type="text" placeholder="Nombre del Jugador 2"><br>
            <button onclick="build()" id="botonJugar">Jugar</button>
            `
        )
    }
    else if(inputCant == 3){
        // CALCULA LA VIDA SEGÚN LOS JUGADORES
        vidasJugadores.push(parseInt((document.querySelector("#inputCantJugadores").value)*10))
        console.log(vidasJugadores)

        // CONSTRUYE LOS INPUTS PARA NOMBRES
        const infoJugadores2 = document.getElementById(divCantJugadores)
        divCantJugadores.innerHTML += (
            `
            <br>
            <label for="inputNombreJugador1">Nombre de los jugadores</label><br>
            <input id="inputNombreJugador1" type="text" placeholder="Nombre del Jugador 1"><br>
            <input id="inputNombreJugador2" type="text" placeholder="Nombre del Jugador 2"><br>
            <input id="inputNombreJugador3" type="text" placeholder="Nombre del Jugador 3"><br>
            <button onclick="build()" id="botonJugar">Jugar</button>
            `
        )
    }
    else if (inputCant == 4){
        // CALCULA LA VIDA SEGÚN LOS JUGADORES
        vidasJugadores.push(parseInt((document.querySelector("#inputCantJugadores").value)*10))
        console.log(vidasJugadores)

        // CONSTRUYE LOS INPUTS PARA NOMBRES
        const infoJugadores2 = document.getElementById(divCantJugadores)
        divCantJugadores.innerHTML += (
            `
            <br>
            <label for="inputNombreJugador1">Nombre de los jugadores</label><br>
            <input id="inputNombreJugador1" type="text" placeholder="Nombre del Jugador 1"><br>
            <input id="inputNombreJugador2" type="text" placeholder="Nombre del Jugador 2"><br>
            <input id="inputNombreJugador3" type="text" placeholder="Nombre del Jugador 3"><br>
            <input id="inputNombreJugador4" type="text" placeholder="Nombre del Jugador 4"><br>
            <button onclick="build()" id="botonJugar">Jugar</button>
            `
        )
    }
    else{
        swal({
            title:"Error",
            text:"Selecciones un número correcto de jugadores.",
            icon:"warning",
            dangerMode: true,
        });
    }
}

// CONSTRUYE LAS TABLAS CON LOS NOMBRES
function build(){
    // EXTRAEMOS EL NOMBRE DE LOS JUGADORES
    let jugador1 = document.querySelector("#inputNombreJugador1").value
    let jugador2 = document.querySelector("#inputNombreJugador2").value
    // MANDAMOS LOS NOMBRES A LA "LISTA"
    nombreJugadores.push(jugador1)
    nombreJugadores.push(jugador2)
    // CREAMOS LAS TABLAS DE JUGADORES
    nombreJugadores.forEach ( item => {
          sectionTablaJugadores.innerHTML +=
          `<article class="artPlayers" id="artPlayer1">
              <h2>${item}</h2>
               <div class="divPuntaje">
               <button type="button" class="botonesVida" onclick="resta(vidasJugadores)">-</button>
               <div class="divHvida"><h3 class="vidaJugadores">${vidasJugadores}</h3></div>
               <button type="button" class="botonesVida" onclick="">+</button>
               </div>
          </article>`
      });
 }

function calc(){

}

function resta(entrada){
    // let numeroRestado = (entrada[entrada.length-1] - uno)
    vidasJugadores.push(entrada[entrada.length-1] - uno)
    console.log(entrada[entrada.length-1])

    // document.getElementsByClassName(vidaJugadores)

}