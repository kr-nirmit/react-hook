import React, { useContext } from 'react'
import { FnameContext, LnameContext } from './ComponentsA'

function ComponentsC() {
    const fname = useContext(FnameContext)
    const lname = useContext(LnameContext)
    return (
        <div>
            ComponentsC
            <p>Your Name : {fname} {lname}</p>
        </div>
    )
}

export default ComponentsC
