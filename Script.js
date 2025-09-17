//creo una variable constante de registro vacio
const registros = [
    {
      nombre: "",
      edad: "",
    }
]

// esto simula un dicionario (Interesante!!)
const COMPONENTES = {
    ELEMENTOS : {
        LISTADO:    document.querySelector('#listado'),
        FORMULARIO: document.querySelector('#registro-formulario'),
        MENSAJE:    document.querySelector('#mensaje')
    }
}

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
    COMPONENTES.ELEMENTOS.LISTADO.innerHTML = registro_string_HTML
    registro_string_HTML = ''
}
// llamo la funcion de mostrar mensajes
Renderizar_mensajes()

//
function enviar_mensaje(event){
    event.preventDefault()
    event.target

    const nuevo_nombre=event.target.nombre.value
    const nueva_edad = parseInt(event.target.edad.value, 10); // paso a numero 
    const contMsg    = COMPONENTES.ELEMENTOS.MENSAJE;

  // limpio mensaje anterior
  contMsg.textContent = '';
  contMsg.classList.remove('error', 'success');

//  Validaciones
    if (!nuevo_nombre || isNaN(nueva_edad)) {
        contMsg.textContent = 'No puede haber campos vacíos o inválidos';
        contMsg.classList.add('error');

        event.target.reset(); // Limpia el formulario
        return;
    }

    if (nueva_edad <= 18) {
        contMsg.textContent = 'La edad debe ser mayor a 18 años';
        contMsg.classList.add('error');

        event.target.reset()
        return;
    }

    // Si todo está bien, procesamos el mensaje
    const nuevo_registro = {
        nombre: nuevo_nombre,
        edad: nueva_edad
    }
    //Renderizo y limpio los campos del registro    
    registros.push(nuevo_registro)
    Renderizar_mensajes()
    event.target.reset()

    // Mensaje que todo esta en orden
    contMsg.textContent = 'Registro agregado correctamente';
    contMsg.classList.add('success');
 
    }
   
COMPONENTES.ELEMENTOS.FORMULARIO.addEventListener(
    'submit',
    enviar_mensaje
)