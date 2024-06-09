import './App.css';
import {useEffect} from "react";
import Header from "./components/ui/header/Header";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import form from "./components/Form/Form";
import Form from "./components/Form/Form";

function App() {
    const {tg, onToggleTelegram} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, []);



  return (
    <div className="App">
        <Header/>

        <Routes>
            <Route index element={<ProductList/>}/>
            <Route path={'form'} element={<Form/>}/>
        </Routes>
    </div>
  );
}

export default App;
