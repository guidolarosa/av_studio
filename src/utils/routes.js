import ColorGrading from './../pages/ColorGrading';
import Contact from './../pages/Contact';
import Nosotros from './../pages/Nosotros';

export const routes = [
    {
        url: "/color-grading",
        name: "Color Grading"
    },
    {
        url: "/nosotros",
        name: "Nosotros"
    },
    {
        url: "/servicios",
        name: "Servicios"
    },
    {
        url: "/contacto",
        name: "Contacto"
    }
];

export const paths = [
    '/:section',
    '/:section&page=:page',
    '/'
];