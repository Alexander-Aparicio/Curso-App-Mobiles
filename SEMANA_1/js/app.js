import header from "./components/header.js"
import creatElement from "./components/helpers/creatElement.js";

const app = ()=> {

    const App = document.getElementById('app')
    console.log(App);
    const menu = [{name:'Home', link:'home'},{name:'Contact', link:'contact'},{name:'My Space',link:'my_space'}]
    const classList = ['header']
    const params = {
        menu:menu,
        class : classList
    }
    App.appendChild(header(params))
    const Main = creatElement({element:'main',clase:'main',id:'main'})
    App.appendChild(Main)

}

export default app