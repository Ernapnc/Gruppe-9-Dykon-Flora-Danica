
import QuizPage from "./components/pages/QuizPage";
import DarkLight from "./components/molecules/darkLight.tsx"

function App() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <DarkLight />
      <QuizPage />
    </div>
  );
}

export default App;
