import { Answer } from "./Answer";

export const Question = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Answer answer="React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template." />
      <Answer answer=" React is remarkably flexible. Once you have learned it, you can use it on a vast variety of platforms to build quality user interfaces." />
      <Answer answer="React is best." />
    </>
  );
};
