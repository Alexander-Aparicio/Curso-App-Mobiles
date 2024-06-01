import creatElement from "../../helpers/creatElement.js"

const MySpace = ()=>{

    const Page = creatElement({element:'div',clase:'page'})
    const h1 = creatElement({element:'h1',clase:'h1',text:'MI ESPACIO'})
    Page.appendChild(h1)

    let nombre = prompt('Por favor escriba su nombre : ')
    const h2 = creatElement({element:'h2',clase:'saludo',text:`Hola ${nombre} bienvenido a tu espacio 👦 🚀`}) 

    Page.appendChild(h2)
    return Page

}

export default MySpace