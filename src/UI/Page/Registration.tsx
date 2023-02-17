import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Service from '../../Services/Service';
const Registration = () => {
 
  const navigation = useHistory()
  const regUserHandler = async(e: any) => {
      e.preventDefault();
      const { target } = e;
      const reg = await Service.reg(target[0].value, target[1].value, target[2].value)
      navigation.push('/Login');   
      console.log(reg)
      
   }
  return (
    <Form onSubmit={regUserHandler} style={{width: "30%", margin: "0 auto"}}>
      <h1 className="text-center">Регистрация</h1>
      <Form.Group className="text-center mb-3">
        <Form.Label>Введите адрес</Form.Label>
        <Form.Control type="text" placeholder="Address"/>
      </Form.Group>

      <Form.Group className="text-center mb-3">
        <Form.Label>Введите логин</Form.Label>
        <Form.Control type="text" placeholder="Login"/>
      </Form.Group>

      <Form.Group className="text-center mb-3">
        <Form.Label>Введите пароль</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Подтвердить
      </Button>
    </Form>
  )
}
export default Registration;

