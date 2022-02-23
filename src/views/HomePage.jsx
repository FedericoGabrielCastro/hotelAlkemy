import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AnimatedPageRender from '../components/animatedPageRender'
import CustomNavbar from '../components/customNavbar'
import CustomSearch from '../components/customSearch'
import Dish from '../components/dish'

import { getRecipesSagaAction } from '../redux/actions/getRecipesAction'

const HomePage = () => {

    const dispatch = useDispatch()

    const recipes = useSelector(store => store.getRecipesReducer.recipes) // get recipes
    const search = useSelector(store => store.setSearchReducer) // mange search for the filter
   
    console.log(recipes)     

    useEffect(() => {
        dispatch(getRecipesSagaAction())
    }, [])

    return (
        <AnimatedPageRender>
            <CustomNavbar />
            <main className='container row'>
                <section className=' col-md-6 text-center'>
                    <CustomSearch />
                    <div className='row'>
                        {
                            recipes.filter((item) => {
                                if (item.name.toLowerCase().startsWith(search.toLowerCase())
                                    || item.name.toLowerCase().endsWith(search.toLowerCase())
                                    || item.name.toLowerCase().includes(search.toLowerCase())
                                    || item.company.name.toLowerCase().startsWith(search.toLowerCase())
                                    || item.company.name.toLowerCase().endsWith(search.toLowerCase())
                                    || item.company.name.toLowerCase().includes(search.toLowerCase())) {
                                        return true
                                    } else {
                                        return false
                                    }
                                }).map((item) => {

                                return <Dish 
                                    key={item.id} 
                                    image={item.image} 
                                    title={item.title}/>
                            })
                        }
                    </div>
                </section>
                <aside className='col-md-6 text-center container '>
                    <h3> Menu </h3>
                </aside>
            </main>
        </AnimatedPageRender>
    )
}

export default HomePage