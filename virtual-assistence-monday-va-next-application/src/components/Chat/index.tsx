import React from "react";

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
    };
    
    const renderStep = () => {
        const currentQuestion = questions[step];
        return (
        <div>
            <p>{currentQuestion.question}</p>
            <input
            type={currentQuestion.inputType}
            name={currentQuestion.id}
            onChange={handleChange}
            />
            <button type="submit">Next</button>
        </div>
        );
    };
    
    return (
        <form onSubmit={handleSubmit}>
            {
                step < questions.length ? 
                    renderStep() 
                    : 
                    <p>Obrigado por se registrar!</p>
            }
        </form>
    );
}