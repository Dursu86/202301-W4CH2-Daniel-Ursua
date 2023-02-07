import "./App.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Personal } from "./features/personal.data/personal";

function App() {
  return (
    <>
      <Header />
      <Personal />
      <Footer />
    </>
  );
}

export default App;
