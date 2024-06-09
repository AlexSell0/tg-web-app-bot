import './App.css';
import {useEffect} from "react";
import Header from "./components/ui/header/Header";
const tg = window.Telegram.WebApp;
function App() {

    useEffect(() => {
        tg.ready();
    }, []);

    let info = tg.initData

  return (
    <div className="App">
        <Header/>

        <div className="container">
            {info}
        </div>
    </div>
  );
}

export default App;
