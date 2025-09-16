const registros = [
    {
        nombre: "Victor Vincitorio",
        edad: 57,
        id: 1
    }
]

const listado_registros_contenedor_HTML = document.querySelector('#listado')


let registro_string_HTML = ''

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

listado_registros_contenedor_HTML.innerHTML = registro_string_HTML



