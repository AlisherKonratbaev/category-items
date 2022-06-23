import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentCategory} from "../../store/filterSlice";

function Tabs(props) {
    const dispatch = useDispatch();
    const currentCat = useSelector(state => state.filter.currentCategory);
    const categories = useSelector(state => state.filter.categories);

    const handleShowCategory = (e,category) => {
        e.preventDefault()
        dispatch(setCurrentCategory(category))
    }
    const handleSelectCategory = (e) => {
        if(e.target.value === "all") {
            dispatch(setCurrentCategory(null))
        } else {
            dispatch(setCurrentCategory(e.target.value))
        }
    }
    return (
        <div className="tabs">
            <ul className="tabs__list">
                <li className="tabs__item">
                    <a
                        className={currentCat == null ? "tabs__link active": "tabs__link"}
                        href="#"
                        onClick={(e) => {handleShowCategory(e,null)}}
                    >
                        Show all
                    </a>
                </li>

                {categories && categories.map(category => (
                    <li className="tabs__item" key={category}>
                        <a
                            className={currentCat == category ? "tabs__link active": "tabs__link"}
                            href="#"
                            onClick={(e) => {handleShowCategory(e,category)}}
                        >
                            {category}
                        </a>
                    </li>
                ))}
            </ul>
            <select className="tabs__select" onChange={(e) => handleSelectCategory(e)}>
                <option value="all">Show all</option>
                {categories && categories.map(category => (
                   <option
                        selected={category == currentCat ? true : false}
                        value={category}
                        key={category}
                    >
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Tabs;
