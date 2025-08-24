import React from 'react'
import ClassTypesForm from './classTypesForm'
import { useState } from 'react'
import ClassTypesAccordion from './classTypesAccordion'

function ClassTypesContainer({filePaths}) {
  const [selectedOptions, setSelectedOptions] = useState(false)

  return (
    <div className='component-container'>
            <h5 className='mb-3'>Class Types</h5>
            <p>
                Select all the types that apply. Make sure to update before copying FE8's class table. <br/>
                <code>MonsterType</code> is exclusive to FE8, but selecting it will grant non-prf S rank weapons effectiveness against the current class in FE6 as well.
            </p>
            <hr/>
            <ClassTypesForm setter={setSelectedOptions}/>
            {
              selectedOptions &&
              <>
              <hr/>
              <ClassTypesAccordion filePaths={filePaths} selectedTypesObject={selectedOptions}/>
              </>
            }
        </div>
  )
}

export default ClassTypesContainer
