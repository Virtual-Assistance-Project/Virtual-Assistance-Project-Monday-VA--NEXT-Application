import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BotMessages, ButtonNext, ChatFormContainer, ChatQuestionsContainer, FullScreen, InputAnswer, TitleRegister } from "../Register/style";

export const ChatComponent = ({questions}:any) => {

    const [step, setStep] = React.useState(0);
    const [formData, setFormData] = React.useState({});
    const router = useRouter();

    const handleChange = (event:any) => {
    setFormData(
        {...formData,[event.target.name]: event.target.value,}
    )};

    const handleSubmit = (event:any) => {
        event.preventDefault();
        setStep(step + 1);
        event.target.value = "";
    };

    useEffect(() => {
        if (step === questions.length) {
            setTimeout(() => {
                router.push("/dashboard");
            }, 1000);
        }
    }, [step, questions.length]);
    
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
                Monday VA
            </TitleRegister>
                <FullScreen>
                {
                step < questions.length ? 
                    renderStep() 
                    : 
                    <ChatQuestionsContainer>
                        <BotMessages>
                            processando...
                        </BotMessages>
                    </ChatQuestionsContainer>
                }
                </FullScreen>
            </ChatFormContainer>
        </>
    );
}