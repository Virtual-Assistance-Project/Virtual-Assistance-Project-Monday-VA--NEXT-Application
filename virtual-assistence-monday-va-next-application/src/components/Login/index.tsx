import { Container } from "./style"
import MondayIcon from "../../public/Icon/MondayIcon.svg"
import { useForm } from 'react-hook-form';
import { ILoginUser } from "../../interfaces";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "../../validators/loginUser";

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({ resolver: yupResolver(schema) });


export const Component = () => {
    return <Container>
        <main>
            <img src={MondayIcon} alt="Logo" />
            <div>
                <h1>
                    Monday
                </h1>
                <h2>
                    Conecte e controle sua vida <br/>com seu mobile
                </h2>
                <div>
                    <form onSubmit={handleSubmit(()=>console.log("Função de envio para api aqui."))}>
                        
                        <input 
                            placeholder="Usuário..." 
                            type='text' 
                            id='username' 
                            {...register('username')} 
                        />
                        <p>{errors.username?.message}</p>

                        <input 
                            placeholder="Senha..." 
                            type='password' 
                            id='password' 
                            {...register('password')} 
                        />
                        <p>{errors.password?.message}</p>

                        <button>
                            Entrar
                        </button>

                    </form>
                    <a href="/register">
                        Cadastre-se aqui...
                    </a>
                </div>
            </div>
        </main>
    </Container>
}