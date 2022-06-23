import React from 'react';
import {useSelector} from "react-redux";
import {status} from "../../helper";

import Item from "./Item";

function Items(props) {
    const {list, status: fetchStatus, error} = useSelector(state => state.item)
    const currentCat = useSelector(state => state.filter.currentCategory);

    if (error) return (<h3>Error</h3>)
    return (
        <div className="item-wrap">
            {(fetchStatus === status.loading) ?
                <h2>preloader</h2> :
                list.map(item => {
                        if (!currentCat) return (
                            <Item key={item.id} item={item}/>
                        )
                        else if (currentCat === item.category) return (
                            <Item key={item.id} item={item}/>
                        )
                    }
                )
            }
        </div>
    );
}

export default Items;