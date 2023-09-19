import "./App.css";
import MainPage from "./page/mainPage/MainPage";
import NotesProvider from "./provider/NotesProvider";

function App() {
  return (
    <div className="App">
      <NotesProvider>
        <h1>Rocket Academy Note Taking App</h1>
        <MainPage />
      </NotesProvider>
    </div>
  );
}

export default App;
