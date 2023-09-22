
import NoteDetail from "../../components/NoteDetail/NoteDetail";
import NoteList from "../../components/NoteList/NoteList";
import "./MainPage.css";

function MainPage() {


  return (
    <div className="mainContainer">
      <NoteList />
      <NoteDetail />
    </div>
  );
}

export default MainPage;
