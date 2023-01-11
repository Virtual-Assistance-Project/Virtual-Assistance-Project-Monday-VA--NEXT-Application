import React from "react";
import { BotMessages, ButtonNext, ChatFormContainer, ChatQuestionsContainer, FullScreen, InputAnswer, TitleRegister } from "../Register/style";

export const ChatComponent = ({questions}:any) => {

    const [step, setStep] = React.useState(0);
    const [formData, setFormData] = React.useState({});

    const handleChange = (event:any) => {
    setFormData(
        {...formData,[event.target.name]: event.target.value,}
    )};

    const handleSubmit = (event:any) => {
        event.preventDefault();
        setStep(step + 1);
        event.target.value = "";
    };
    
    const renderStep = () => {
        const currentQuestion = questions[step];
        console.log(formData)
        return (
            <ChatQuestionsContainer>
                <BotMessages>
                    {currentQuestion.question}
                </BotMessages>
                <InputAnswer
                type={currentQuestion.inputType}
                name={currentQuestion.id}
                onChange={handleChange}
                />
                <ButtonNext type="submit">Next</ButtonNext>
            </ChatQuestionsContainer>
        );
    };
    
    return (
        <>
            <ChatFormContainer onSubmit={handleSubmit}>
            <TitleRegister>
                Cadastro
            </TitleRegister>
                <FullScreen>
                {
                step < questions.length ? 
                    renderStep() 
                    : 
                    <BotMessages>
                        Obrigado por se registrar!
                    </BotMessages>
                }
                </FullScreen>
            </ChatFormContainer>
        </>
    );
}