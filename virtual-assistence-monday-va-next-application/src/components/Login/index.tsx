import { AppName, AppSubTitle, Container, FormLogin, InputField, LoginButton, LoginContainer, LogoLogin, RegisterLink } from "./style"
import MondayIcon from "./assets/MondayIcon.svg"
import { useForm } from 'react-hook-form';
import { ILoginUser } from "../../interfaces";
import React from "react";

export const Component = () => {

    const {
        register,
        handleSubmit,
      } = useForm<ILoginUser>();

    return (
        <Container>
            <LogoLogin 
                src={MondayIcon.src} 
                alt="Logo" 
            />
            <LoginContainer>
                <AppName>
                    Monday VA
                </AppName>
                <AppSubTitle>
                    Conecte e controle sua vida com seu mobile
                </AppSubTitle>
                <FormLogin 
                    onSubmit={
                        handleSubmit(
                        ()=>console.log("Função de envio para api aqui.")
                )}>
                    <InputField 
                        placeholder="Usuário..." 
                        type='text' 
                        id='username' 
                        {...register('username')} 
                    />
                    <InputField 
                        placeholder="Senha..." 
                        type='password' 
                        id='password' 
                        {...register('password')} 
                    />
                    <LoginButton type='submit'>
                        Entrar
                    </LoginButton>

                </FormLogin>    
                <RegisterLink href="/register">
                    Cadastre-se aqui...
                </RegisterLink>
            </LoginContainer>
        </Container>
    )
}