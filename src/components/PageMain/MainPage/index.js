import React from 'react'
import styled from "styled-components";
import Input from '../Input/Input';
import Button from '../Button/Button';
import '../MainPage/style';
import { Link } from 'react-router-dom'



function MainPage() {
  return (
    <>
      <Header>
        <img src='./img/logo.svg' alt='logo' />
      </Header>

      <Main>
        <Title>
            <TitleMain>У нас есть <TitleVacancy>56</TitleVacancy> <br/>
                <TitleOpen>открытых вакансий</TitleOpen>
            </TitleMain>

            <WrapperLink>
                <Link Link to="">Перейти к вакансиям</Link>
                <img src="./img/vector.svg" alt='link'/>
            </WrapperLink>
        </Title>

        <Form>
            <h2>Вход в личный кабинет кандидата</h2>
            <p>Логин</p>
            <Input/>
            <p>Пароль</p>
            <Input/>

            <Button text={'Войти'}/>
            <WrapperLink>
                <Link Link to="">Забыли пароль?</Link>
                <img src="./img/vector.svg" alt='link'/>
            </WrapperLink>

            <RegisterLink>
                <p>Нет аккаунта? </p> 
                <WrapperLink>
                    <Link Link to=""> Зарегистрироваться</Link>
                    <img src="./img/vector.svg" alt='link'/>
                </WrapperLink>
            </RegisterLink>
        </Form>
      </Main>
    </>
  );
}
export default MainPage;

