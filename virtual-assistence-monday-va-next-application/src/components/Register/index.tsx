

export const Component = () => {

    return(
        <></>
    )
}

// const questions = [
//     {
//       id: 1,
//       question: "What is your name?",
//       inputType: "text",
//     },
//     {
//       id: 2,
//       question: "What is your email?",
//       inputType: "email",
//     },
//     {
//       id: 3,
//       question: "What is your phone number?",
//       inputType: "tel",
//     },
//   ];
  
//   function ChatForm() {
//     const [step, setStep] = React.useState(0);
//     const [formData, setFormData] = React.useState({});
  
//     const handleChange = (event) => {
//       setFormData({
//         ...formData,
//         [event.target.name]: event.target.value,
//       });
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       setStep(step + 1);
//     };
  
//     const renderStep = () => {
//       const currentQuestion = questions[step];
//       return (
//         <div>
//           <p>{currentQuestion.question}</p>
//           <input
//             type={currentQuestion.inputType}
//             name={currentQuestion.id}
//             onChange={handleChange}
//           />
//           <button type="submit">Next</button>
//         </div>
//       );
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         {step < questions.length ? renderStep() : <p>Thank you for completing the form!</p>}
//       </form>
//     );
//   }
  
//   export default ChatForm;