
import Contacto from "../pages/Contacto.jsx";
import Entradas from "../pages/Entradas.jsx";
import Galeria from "../pages/Galeria.jsx";
import Horarios from "../pages/Horarios.jsx";
import Inicio from "../pages/Inicio.jsx";
import Lineup from "../pages/Lineup.jsx";

export let router = [
    {
        path:"/",
        element:<Inicio/>
    },
     {
        path:"/lineup",
        element:<Lineup/>
    },
     {
        path:"/galeria",
        element:<Galeria/>
    },
     {
        path:"/entradas",
        element:<Entradas/>
    },
     {
        path:"/horarios",
        element:<Horarios/>
    },
     {
        path:"/contacto",
        element:<Contacto/>
    }
]
