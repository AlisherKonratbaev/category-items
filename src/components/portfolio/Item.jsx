import React from 'react';
import {setCurrentCategory} from "../../store/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedId} from "../../store/itemSlice";
import {getFirstWord} from "../../helper";

function Item(props) {
    const item = props.item;
    const ids = useSelector(state => state.item.selectedId)
    const dispatch = useDispatch();

    const handleShowCategory = (e,category) => {
        e.preventDefault()
        e.stopPropagation();
        dispatch(setCurrentCategory(category))
    }

    const handleClick = (id) => {
        dispatch(setSelectedId(id))
    }

    const getClassName = (id) => {
        let classes = ['item'];
        if(ids.includes(id)) {
            classes.push('active')
        }
        return classes.join(" ");
    }

    return (
        <div
            className={getClassName(item.id)}
            style={{backgroundImage: `url(${item.urls.regular})`}}
            onClick={() => handleClick(item.id)}
        >
            <div className="mask"/>
            <div className="overlay"/>
            <div className="item__inner">
                <a
                    className="item__link"
                    href=""
                    onClick={(e) => handleShowCategory(e, item.category)}
                >
                    {item.category}
                </a>
                <p className="item__title">{getFirstWord(item.title)}</p>
            </div>
        </div>
    );
}

export default Item;
