import React from 'react'
import MovementCostForm from './movementCostForm'

function MovementCostContainer() {
    return (
        <div className='component-container'>
            <h5 className='mb-3'>Movement Costs</h5>
            <p>
                Make sure to set & update it at least once before copying the class tables. <br/>
                Movement Costs for rain & snow are automatically updated as well.
            </p>
            <hr/>
            <MovementCostForm />
        </div>
    )
}

export default MovementCostContainer
