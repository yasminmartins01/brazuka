import styled from 'styled-components';
import img1 from '../../img/imagen.png';

export const Div = styled.div`
  width: 100%;
  heigth: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  margin: 0;
  padding: 0;
`

export const H1 = styled.h1 `
  width: 50%;
  height: 100vh;
  height: auto;
  font-size: 25px;
  font-family: roboto;
  align-text: center;
  justify-content: center;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row; 
`

export const Img = styled.image `
  width: 30%; 
  height: 600px;
  background-size: cover;
  background-image: url(${img1});
`
export const Text = styled.p `
  font-size: 20px;
  align-self: center;
  margin: 10px;
`
export const Container = styled.div `
  display: flex;
  flex-direction: column;
  margin: 50px;
  align-items: center;
  width: 50%;
`

export const Button = styled.button`
  width: 80px;
  height: 30px;
  background-color: white;
  margin: 15px; 
  color: black;
  border: none;
  cursor: pointer;
`