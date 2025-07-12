import React, { useState } from 'react'
import PromotionForm from './promotionForm'

function PromotionContainer({filePath}) {
    const [usablePromotionItems, setUsablePromotionItems] = useState(null)

    return (
        <div className='component-container'>
            <div className="">
                <h5>Promotion</h5>
                <small className="text-muted wrap-container"><em>{filePath}</em></small>
                <PromotionForm setUsablePromotionItemsParent={setUsablePromotionItems} filePath={filePath} />
                {
                    usablePromotionItems &&
                    <>
                        
                    </>
                }
            </div>
        </div>
    )
}

export default PromotionContainer
