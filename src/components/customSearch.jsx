import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setSearchAction } from '../redux/actions/setSearchAction'

const CustomSearch = () => {

    const dispatch = useDispatch()

    const search = useSelector(store => store.setSearchReducer)

    const handleSearch = useCallback( event => {
        dispatch(setSearchAction(event.target.value))
    }, [dispatch, setSearchAction])

    return (
        <form className="form-inline mb-3 d-flex justify-content-center md-form form-sm mt-0">
            <input 
                className="form-control form-control-sm ml-3 w-75" 
                type="text" 
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={handleSearch}/>
        </form>
    )
}

export default CustomSearch