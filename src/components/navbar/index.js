import React from 'react';

import { Contenedor, Button, Nav } from './navStyles';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
      <Contenedor>
           <Nav>
             <Button><Link to='home' spy={true} smooth={true} offset={50} duration={500}>Inicio</Link></Button>
             <Button><Link to='catalogo' spy={true} smooth={true} offset={50} duration={500}>Catalogo</Link></Button>
             <Button><Link to='about' spy={true} smooth={true} offset={50} duration={500}>Nosotras</Link></Button>
             <Button><Link to='contacto' spy={true} smooth={true} offset={50} duration={500}>Contacto</Link></Button>
           </Nav>
      </Contenedor>
    );
  };

export default Navbar;
