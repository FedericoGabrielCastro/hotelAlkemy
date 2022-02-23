import React from 'react'

const Loading = () => {
    
    return (
        <div className='float-right p-5'>
            <span 
                className="spinner-border spinner-border-xl text-info" 
                role="status" 
                aria-hidden="true"
            />
            
        </div>
    )
}

export default Loading