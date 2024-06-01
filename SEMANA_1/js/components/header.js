const link = {
    name:'',
    link: ''
}

const params = {
    class: [],
    menu: [link]
}


const header = ( objeto = params)=>{
    console.log(objeto)
    const box = document.createElement('div')
    box.classList.add(...objeto.class)
    const sections = document.createElement('div')
    const fragment = document.createDocumentFragment()
    objeto.menu.forEach(el => {

        const option = document.createElement('p')
        option.id = el.link
        option.textContent = el.name

        option.addEventListener('click', () => {
            window.location.hash = `/${el.link}`
          })

        fragment.appendChild(option)
    });

    sections.appendChild(fragment)
    box.appendChild(sections)

    return box

}

export default header