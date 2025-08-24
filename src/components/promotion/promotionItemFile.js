import React, { useEffect, useState, useContext } from 'react'
import { Accordion } from 'react-bootstrap'
import CodeBlock from '../codeBlock'
import { ClassContext } from '@/context/classContext'

function PromotionItemFile({ promotionItemsObject, filePath }) {
  const [accordionItems, setAccordionItems] = useState([])

  const { classContextData } = useContext(ClassContext)
  const classPointer = classContextData.classObject["Class Pointer"]

  useEffect(() => {
    let array = []

    for (const item in promotionItemsObject) {
      if (promotionItemsObject[item]) {
        array.push(`${item}`)
      }
    }

    setAccordionItems(array)
  }, [promotionItemsObject])

  return (
    <>

      {
        accordionItems.length > 0 &&
        <div className='mt-4'>
          <hr />
          <h5>Setting promotion items</h5>

          <small className="text-muted wrap-container"><em>{filePath[0]}<br />{filePath[1]}<br />{filePath[2]}</em></small>

          <p className='mt-4'>Heaven Seal is exclusive for the FE7 list.<br />Lunar and Solar brace are exclusive for the FE8 list.<br />There's no Master Seal in FE6.</p>
          {/* <hr /> */}
          <Accordion className=''>
            {accordionItems.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={item}>
                <Accordion.Header>{item}</Accordion.Header>
                <Accordion.Body>
                  {/* Placeholder content */}
                  <p>Find the <code>{item}List</code> and add <code>BYTE: {classPointer}</code> under the added classes section.</p>
                  <CodeBlock copyContent={`BYTE: ${classPointer}`}>
                    <i className=''>BYTE {item}List:<br />
                    ...<br />
                    #ifdef AddedClasses<br />
                    ...<br /></i>
                    <b>BYTE: {classPointer}</b>
                  </CodeBlock>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      }
    </>
  )
}

export default PromotionItemFile
