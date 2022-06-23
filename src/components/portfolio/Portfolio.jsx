import React, {useEffect} from 'react';
import Tabs from "./Tabs";
import Items from "./Items";
import {useDispatch, useSelector} from "react-redux";
import {clearSelectedId, fetchItems, removeItems} from "../../store/itemSlice";


function Portfolio(props) {
    const dispatch = useDispatch();
    const currentCat = useSelector(state => state.filter.currentCategory);
    const ids = useSelector(state => state.item.selectedId)

    useEffect(() => {
        const delIds = (e) => {
            if (e.code === 'Delete') {
                dispatch(removeItems())
                dispatch(clearSelectedId())
                document.removeEventListener('keydown', delIds)
            }
        }
        document.addEventListener('keydown', delIds)
    }, [ids])

    const handleLoad = (category) => {
        dispatch(fetchItems(category))
        window.scrollBy(0,document.documentElement.scrollHeight)
    }

    return (
        <section className="portfolio">
            <div className="container">
                <div className="portfolio__inner">
                    <Tabs/>
                    <Items/>
                    <button
                        onClick={(e) => handleLoad(currentCat)}
                        className="portfolio__btn">
                        load more
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;