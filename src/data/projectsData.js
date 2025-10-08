import deployGastos from "../assets/deploy-gestor-gastos.png"
import buscadorPeli from "../assets/buscador-peli.png"
import portfolio from "../assets/portfolio.png"

import htmlIcon from "../assets/html.svg"
import cssIcon from "../assets/css.svg"
import jsIcon from "../assets/js.svg"
import reactIcon from "../assets/react.svg"

const projectsData = [
    {
        image: deployGastos,
        title: 'Gestor de gastos',
        description: 'Aplicación simple para tomar nota de tus gastos diarios y mensuales.',
        tech: [htmlIcon, cssIcon, jsIcon],
        githubUrl: 'https://github.com/mmmorini/gestor-de-gastos',
        deployUrl: 'https://spontaneous-griffin-672824.netlify.app/'
    },
    {
        image: buscadorPeli,
        title: 'Buscador con API',
        description: 'Aplicación para buscar películas usando una API.',
        tech: [htmlIcon, cssIcon, jsIcon],
        githubUrl: 'https://github.com/mmmorini/movie-search-app',
        deployUrl: 'https://searchappmov.netlify.app/'
    },
    {
        image: portfolio,
        title: 'Mi portfolio web',
        description: 'Portfolio Web hecho con React.',
        tech: [htmlIcon, cssIcon, jsIcon, reactIcon],
        githubUrl: '',
        deployUrl: ''
    }
];

export default projectsData;