import logo from "./logo.svg";
import "./App.css";
import { Question } from "./components/Question";

function App() {
  return (
    <Question
      title="Is React really important?"
      description="Let me know all the advantages of using React."
    />
  );
}

export default App;
