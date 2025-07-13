import React, { useState } from 'react'
import PromotionForm from './promotionForm'
import PromotionItemFile from './promotionItemFile'
import UnpromotedFileList from './unpromotedFileList'

function PromotionContainer({ filePath }) {
    const [usablePromotionItems, setUsablePromotionItems] = useState(null)
    const [canPromote, setCanPromote] = useState(false)

    return (
        <div className='component-container'>
            <div className="">
                <h5>Promotion</h5>
                <PromotionForm
                    setUsablePromotionItemsParent={setUsablePromotionItems}
                    setCanPromoteParent={setCanPromote}
                    filePath={filePath}
                />
                {canPromote 
                && <> 
                <PromotionItemFile promotionItemsObject={usablePromotionItems} filePath={filePath}/> 
                <UnpromotedFileList filePath={filePath}/>
                </>}
            </div>
        </div>
    )
}

export default PromotionContainer
