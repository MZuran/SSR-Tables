import React, { useState, useContext, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import PromotionItemForm from './promotionItemForm'

import { ClassContext } from '@/context/classContext'

import { exportObjectForFE6, exportObjectForFE7, exportObjectForFE8 } from '@/utils/table functions/exportClassTables'

function PromotionForm({ setUsablePromotionItemsParent }) {
    const [canPromote, setCanPromote] = useState(false)
    const [relatedClass, setRelatedClass] = useState("")
    const [altPromotion, setAltPromotion] = useState("")
    const [usablePromotionItems, setUsablePromotionItems] = useState([])

    const { updateClassContext, classContextData, classContextUpdateNumber } = useContext(ClassContext)

    const updateClickHandler = () => {
        classContextData.classObject["Menu Class"] = relatedClass || "0x00";
        classContextData.tableData["Alt Class"] = altPromotion || "0x00";

        classContextData.tableData.FE6 = exportObjectForFE6(classContextData.classObject)
        classContextData.tableData.FE7 = exportObjectForFE7(classContextData.classObject)
        classContextData.tableData.FE8 = exportObjectForFE8(classContextData.classObject)

        updateClassContext(classContextData)

        if (canPromote) {
            setUsablePromotionItemsParent(usablePromotionItems)
        }   else    {
            setUsablePromotionItemsParent(null)
        }
    }

    return (
        <>
            <Form.Check
                type="switch"
                label="Class is able to promote"
                checked={canPromote}
                onChange={() => setCanPromote(!canPromote)}
                className="switch-headers mt-3"
            />

            {canPromote && (
                <>
                    <hr />
                    <h5>Usable Promotion Items</h5>
                    <PromotionItemForm setter={setUsablePromotionItems} />
                </>
            )}

            <hr />

            <Form autoComplete="off">
                <Form.Group className="d-flex align-items-center mb-4 mt-4 flex-wrap">
                    <Form.Label
                        className="mb-0 me-2"
                        htmlFor="classLineInput"
                        style={{ width: "8rem" }}>
                        {canPromote ? "Main Promotion" : "Promotes From"}
                    </Form.Label>
                    <Form.Control
                        id="classLineInput"
                        size="sm"
                        type="text"
                        name="classLine"
                        value={relatedClass}
                        onChange={(e) => setRelatedClass(e.target.value)}
                        style={{ maxWidth: "10rem" }}
                        autoComplete="off"
                        placeholder="0x00"
                        className="me-2"
                    />
                    <small className="text-muted"><em>(Class ID/Pointer)</em></small>
                </Form.Group>

                {canPromote && (
                    <Form.Group className="d-flex align-items-center flex-wrap mb-4">
                        <Form.Label
                            className="mb-0 me-2"
                            htmlFor="altPromotionInput"
                            style={{ width: "8rem" }}>
                            FE8 Alt Promotion
                        </Form.Label>
                        <Form.Control
                            id="altPromotionInput"
                            size="sm"
                            type="text"
                            name="altPromotion"
                            value={altPromotion}
                            onChange={(e) => setAltPromotion(e.target.value)}
                            style={{ maxWidth: "10rem" }}
                            autoComplete="off"
                            placeholder="0x00"
                            className="me-2"
                        />
                        <small className="text-muted"><em>(Class ID/Pointer)</em></small>
                    </Form.Group>
                )}

                <hr />
                <Button className="button-style m-0" onClick={updateClickHandler}>Update</Button>
            </Form>
        </>
    )
}

export default PromotionForm
