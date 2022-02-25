import React, { useEffect, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import AnimatedPageRender from '../components/animatedPageRender'
import CustomNavbar from '../components/customNavbar'
import CustomSearch from '../components/customSearch'
import Dish from '../components/dish'
import MenuItems from '../components/menuItems'

import { addRecipeAction } from '../redux/actions/addRecipeAction'
import { getRecipesSagaAction } from '../redux/actions/getRecipesAction'

const HomePage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const recipes = useSelector(store => store.getRecipesReducer.recipes) // get recipes
    const search = useSelector(store => store.setSearchReducer) // mange search for the filter
   
    console.log(recipes)

    const handleAddtoMenu = (item) => {
        dispatch(addRecipeAction(item))
    }
    
    // validation token to enter in the page
    useEffect(() => {
        const userIsLoging = window.localStorage.getItem("USER_TOKEN")
        
        if ( userIsLoging ) {
            console.log("IS LOGIN")
        } else {
            navigate(`/login`)
        }
    },[])

    useEffect(() => {
        dispatch(getRecipesSagaAction())
    }, [])

    return (
        <AnimatedPageRender>
            <CustomNavbar />
            <main className='ml-2 mr-2 row'>
                <section className=' col-md-6 text-center'>
                    <CustomSearch />
                    <div className='row'>
                        {
                            recipes.filter((item) => {
                                if (item.title.toLowerCase().startsWith(search.toLowerCase())
                                    || item.title.toLowerCase().endsWith(search.toLowerCase())
                                    || item.title.toLowerCase().includes(search.toLowerCase())) {
                                        return true
                                    } else {
                                        return false
                                    }
                                }).map((item) => {

                                return <Dish 
                                    key={item.id} 
                                    image={item.image} 
                                    title={item.title}
                                    option={"add to menu"}
                                    doThis={() => handleAddtoMenu(item)}/>
                            })
                        }
                    </div>
                </section>
                <aside className='col-md-6 text-center container '>
                    <h3> Menu </h3>
                    <MenuItems />
                </aside>
            </main>
        </AnimatedPageRender>
    )
}

export default HomePage