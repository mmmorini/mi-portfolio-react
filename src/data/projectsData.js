import deployGastos from "../assets/deploy-gestor-gastos.png"
import buscadorPeli from "../assets/buscador-peli.png"
import proximamente from "../assets/proximamente.png"

import htmlIcon from "../assets/html.svg"
import cssIcon from "../assets/css.svg"
import jsIcon from "../assets/js.svg"
import reactIcon from "../assets/react.svg"

const projectsData = [
    {
        image: deployGastos,
        title: 'Gestor de gastos',
        description: 'Aplicación simple para tomar nota de tus gastos diarios y mensuales.',
        tech: [htmlIcon, cssIcon, jsIcon]
    },
    {
        image: buscadorPeli,
        title: 'Buscador con API',
        description: 'Aplicación para buscar películas usando una API.',
        tech: [htmlIcon, cssIcon, jsIcon]
    },
    {
        image: proximamente,
        title: 'Próximo proyecto con React',
        description: 'Proyecto con React.',
        tech: [htmlIcon, cssIcon, jsIcon, reactIcon]
    }
];

export default projectsData;