import styled from 'styled-components'

export  const Container = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
`

export  const Form = styled.div`
  width: 40%;
  height: 500px;
  margin: 10px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export  const Img = styled.div`
  width: 40%;
  height: 500px;
  background-size: contain;
  margin: 20px;
  background-image: url('https://static.vecteezy.com/system/resources/previews/005/251/300/non_2x/hand-drawn-fashion-illustration-of-woman-s-face-on-white-background-beauty-art-of-girl-with-natural-makeup-fashion-drawing-sketch-of-an-elegant-portrait-romantic-woman-face-with-long-eyelashes-vector.jpg');
`

export const Button = styled.button`
  width: 150px;
  height: 30px;
  color: white;
  align-self: center;
  justify-content: center;
  background-color: black;
  cursor: pointer;
`

export const Input = styled.input`
  width: 350px;
  height: 30px;
  border: none; 
  margin: 8px;
  align-self: center;
  justify-content: center;
`
