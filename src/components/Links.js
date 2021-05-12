import React from 'react'
import LinkForm from './LinkForm'

const Links = () => {

    const addTask = () => {
        console.log('new task')
    }



    return (
        <>
            <LinkForm addOrEdit={addTask}/>
            <h2>Links</h2>
        </>
    )
}

export default Links