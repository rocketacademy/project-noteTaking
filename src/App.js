import "./App.css";
import MainPage from "./page/mainPage/MainPage";
import NotesProvider from "./provider/NotesProvider";


/**
 * 
 * We try to keep App.js clean here, and only use it to put together Provider (so the rest of the app can have access to the useContext) and the main app
 * 
 * IF we were going to put in a router, this maybe a good place to do it, or at least bring in the browser router
 * 
 */
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
