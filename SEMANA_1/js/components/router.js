import Contact from "./pages/Contact/Contact.js";
import Home from "./pages/Home/Home.js";
import MySpace from "./pages/My Space/MySpace.js";


const router = async () => {
  
  const ruta = window.location.hash 
  const main = document.getElementById('main')
  if (main.firstChild) main.removeChild(main.firstChild)
  
  switch (ruta) {
    case '':
      main.appendChild(Home())
      break;
    case '#/home':
      main.appendChild(Home())
      break;
    case '#/contact':
      main.appendChild(await Contact())
      break;
    case '#/my_space':
        main.appendChild(MySpace())
        break;
    default:
      break;
  }

}

export default router