import { AppName, AppSubTitle, Container, ErroMessage, FormLogin, InputField, LoginButton, LoginContainer, LogoLogin, RegisterLink } from "./style"
import MondayIcon from "./assets/MondayIcon.svg"
import { useForm } from 'react-hook-form';
import { ILoginUser } from "../../interfaces";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "../../validators/loginUser";

export const Component = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ILoginUser>({ resolver: yupResolver(schema) });

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
                    <ErroMessage>
                        {errors.username?.message}
                    </ErroMessage>
                    <InputField 
                        placeholder="Senha..." 
                        type='password' 
                        id='password' 
                        {...register('password')} 
                    />
                    <ErroMessage>
                        {errors.password?.message}
                    </ErroMessage>
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