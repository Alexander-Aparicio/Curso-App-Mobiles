import creatElement from "../../helpers/creatElement.js"

const Contact = async()=>{

    let db =  await fetch("../../../db/students.json")
    let res = await db.json()
    const students = res.students
    console.log(students)

    const Page = creatElement({element:'div',clase:'page'})
    const h1 = creatElement({element:'h1',clase:'h1',text:'CONTACTOS'})
    Page.appendChild(h1)

    const section = creatElement({element:'section',clase:'students'})

    const fragment = document.createDocumentFragment()

    students.forEach(student => {
        const details = creatElement({element:'details',clase:'details'})
        const name = creatElement({element:'summary',clase:'name',text:student.name})
        const description = `${student.profession} ${student.country} ${student.name} con código de colegiatura ${student.id}, DNI ${student.dni} y celular ${student.phone}.`
        const content = creatElement({element:'p',clase:'description',text:description})

        details.appendChild(name)
        details.appendChild(content)
        fragment.appendChild(details)
    });
    
    section.appendChild(fragment)
    Page.appendChild(section)

    return Page

}

export default Contact