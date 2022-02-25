import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { removeRecipeAction } from '../redux/actions/addRecipeAction'

import Dish from './dish'

const MenuItems = () => {

    const dispatch = useDispatch()

    const menu = useSelector(store => store.addRecipeReducer) // menu items

    const handleRemove = (item) => {
        dispatch(removeRecipeAction(item))
    }

    return (
        <div className='row'>
            {
                menu.map(item => {
                    
                    return <Dish
                        key={item.id} 
                        image={item.image} 
                        title={item.title}
                        option={"remove"}
                        doThis={() => handleRemove(item.id)}/>
                }) 
            }
        </div>
    )
}

export default MenuItems