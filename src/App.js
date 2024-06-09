import './App.css';
import {useEffect} from "react";
import Header from "./components/ui/header/Header";
const tg = window.Telegram.WebApp;
function App() {

    useEffect(() => {
        tg.ready();
    }, []);



  return (
    <div className="App">
        <Header/>

        <div className="container">

        </div>
    </div>
  );
}

export default App;
