import creatElement from "../../helpers/creatElement.js"

const Home = ()=>{

    const Page = creatElement({element:'div',clase:'page'})
    const h1 = creatElement({element:'h1',clase:'h1',text:'HOME'})
    Page.appendChild(h1)

    return Page

}

export default Home