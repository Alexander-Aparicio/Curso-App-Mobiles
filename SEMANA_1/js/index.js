import app from "./app.js"
import router from "./components/router.js"


document.addEventListener('DOMContentLoaded', ()=> {
    app()
    router()
})

window.addEventListener('hashchange', () => {
    router()
})