import './App.css';
import {useEffect} from "react";
import Header from "./components/ui/header/Header";
import {useTelegram} from "./hooks/useTelegram";

function App() {
    const {tg, onToggleTelegram} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, []);



  return (
    <div className="App">
        <Header/>

        <div className="container">
            <button onClick={onToggleTelegram}>toggle</button>
        </div>
    </div>
  );
}

export default App;
