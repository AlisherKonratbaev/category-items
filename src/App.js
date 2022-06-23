import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import {fetchItems} from "./store/itemSlice";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])

    return (
        <>
            <Header/>
            <Portfolio />
        </>
    );
}

export default App;
