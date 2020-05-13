import React from 'react';
import { useParams } from 'react-router-dom';
import ColorGrading from './../../pages/ColorGrading';
import Nosotros from './../../pages/Nosotros';
import Contact from './../../pages/Contact';
import Servicios from './../../pages/Servicios';

const Main = props => {
    const {section} = useParams();
    console.log(section);
    return (
        <main>
            {section == 'color-grading' ? (
                <ColorGrading/>
            ) : section == 'nosotros' ? (
                <Nosotros/>
            ) : section == 'contacto' ? (
                <Contact/>
            ) : section == 'servicios' ? (
                <Servicios/>
            ) : (
                <ColorGrading/>
            )}
        </main>
    )
}

export default Main;