
import QuizPage from "./components/pages/QuizPage";
import LysKnap from "./components/atoms/darkLight";
import ReusableFocusTrap from "./components/atoms/FocusTrap";

function App() {

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 0 }}>
        <ReusableFocusTrap initialFocusSelector="#quiz-container">
        <LysKnap />
        <div id="quiz-container">
        <QuizPage />
        </div>
      </ReusableFocusTrap>
    </div>
  );
}

export default App;
