import React from 'react';
import { Container, Form, Img, Button, Input } from './footerstyles';

function Footer() {
        return (
            <Container>
                <Form action="https://formsubmit.co/yasmartins999@gmail.com" method="POST">
                    <Input type='text' placeholder='Nombre'/>
                    <Input type='email' placeholder='Correo electronico'/>
                    <Input type='text' placeholder='Mensaje'/>
                    <Button> Enviar </Button>
                </Form>
                <Img>
                   
                </Img>
            </Container>
        );
    }


export default Footer;