import ColorGrading from './../pages/ColorGrading';
import Contact from './../pages/Contact';
import Nosotros from './../pages/Nosotros';

const routes = [
    {
        url: "/color-grading&page=:page",
        name: "Color Grading",
        renderedComponent: ColorGrading,
        navbarEnabled: true,
        navbarClass: 'color-grading'
    },
    {
        url: "/about",
        name: "Nosotros",
        renderedComponent: Nosotros,
        navbarEnabled: true,
        navbarClass: 'about'
    },
    {
        url: "/services",
        name: "Servicios",
        renderedComponent: Contact,
        navbarEnabled: true,
        navbarClass: 'services'
    },
    {
        url: "/contact",
        name: "Contacto",
        renderedComponent: Contact,
        navbarEnabled: true,
        navbarClass: 'contact'
    },
    {
        url: "/",
        name: "",
        renderedComponent: ColorGrading,
        navbarEnabled: false
    }
];

export default routes;