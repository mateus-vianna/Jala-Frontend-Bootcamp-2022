import "./App.css";
import Main from "./layout/main";
import Footer from "./layout/footer";
import Header from "./layout/header";

function App() {
  const show = false;

  return (
    <>
      <Header />
      <Main show={show} />
      <Footer />
    </>
  );
}

export default App;
