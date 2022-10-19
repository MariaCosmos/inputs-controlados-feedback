import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const sendData = () => {
  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
  if(name === ("") || age === ("") || email === ("")){
    alert("Todos os campos são obrigatórios, preencha-os")
  }else if (name.length < 10 & name.length > 30){
    alert("O nome deve ter de 10 a 30 caracteres")
  }else if (!email.includes("@") & !email.includes(".com")){
    alert("formato do email incorreto")
  }else if (age < 18){
    alert("só maiores de 18 anos podem se inscrever na Labenu")
  }else {
    console.log({name, age, email})
    setFormFlow(2)
  }
  
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      name={name} age={age} email={email} onChangeName={onChangeName} onChangeAge={onChangeAge} onChangeEmail={onChangeEmail} sendData={sendData}
      /> : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage