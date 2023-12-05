import "@styles/global.css";
import "@styles/app.css";
import Header from "@components/header";
import Main from "./pages/main";
function App() {
  return (
    <div className="app__body">
      <Header />
      <Main />
      <p>MUCHISIMO ROCK</p>
    </div>
  );
}

export default App;
