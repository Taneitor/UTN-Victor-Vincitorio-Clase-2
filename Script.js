const registros = [
    {
        nombre: "Victor Vincitorio",
        edad: 57,
    }
]

// esto simula un dicionario Interesante
const COMPONENTES = {
    Elementos : {
        LISTADO:  document.querySelector('#listado'),
        FORMULARIO: document.querySelector('#registro-formulario')

    }
}
//const listado_registros_contenedor_HTML = document.querySelector('#listado')
//const registro_formulario_HTML = document.querySelector(#registro-formulario')

let registro_string_HTML = ''

//esta parte de abajo muestra lo que se fue cargando
function Renderizar_mensajes() {
for(const registro of registros) {
    const mensaje_string_HTML = `
            <div>
                <span>${registro.nombre}</span>
                <span>${registro.edad}</span>
                <hr/>
            </div>
        `
    registro_string_HTML += mensaje_string_HTML 
}

COMPONENTES.LISTADO.innerHTML = registro_string_HTML
}
// llamo la funcion de mostrar mensajes
Renderizar_mensajes()

//
function enviar_mensaje(event){
    event.preventDefault()

    event.target

    const nuevo_nombre=event.target.nombre.value
    const nueva_edad = parseInt(event.target.edad.value); // paso a numero 

        // Validaciones
    if (!nuevo_nombre || isNaN(nueva_edad)) {
        console.error('No puede haber campos vacíos o inválidos') 
//        alert('No puede haber campos vacíos o inválidos');
        event.target.reset(); // Limpia el formulario
        return;
    }

    if (edad <= 18) {
        console.error('La edad debe ser mayor a 18 años')
//        alert('La edad debe ser mayor a 18 años');
        event.target.reset()
        return;
    }

    // Si todo está bien, procesamos el mensaje
    const nuevo_registro = {
        nombre: nombre,
        edad: edad,
    }
    registros.push(nuevo_registro)
    Renderizar_mensajes()
    }
   
COMPONENTES.Elementos.FORMULARIO.addEventListener(
    'submit',
    enviar_mensaje
)