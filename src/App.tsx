import "@styles/app.css";
import Header from "@components/header/header";
import Main from "./pages/main";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="app__body">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
