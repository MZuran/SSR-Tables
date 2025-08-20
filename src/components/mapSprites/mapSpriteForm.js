import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import { useContext } from 'react';
import { ClassContext } from '@/context/classContext';

import parseFileName from './parseNames';

function MapSpriteForm({ onUpdate }) {

    const [values, setValues] = useState({
        smsFileName: '',
        smsNumber: '',
        mmsFileName: '',
        mmsNumber: '',
        size: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const classId = useContext(ClassContext).classContextData.classObject.ID

    const handleSubmit = () => {
        const { smsFileName, smsNumber, mmsFileName } = values;

        if (!smsFileName || !smsNumber || !mmsFileName ) {
            alert("All fields must be filled out.");
            return;
        }

        values.smsFileName = parseFileName(values.smsFileName)
        values.mmsFileName = parseFileName(values.mmsFileName)

        values.mmsNumber = classId

        onUpdate(values);
    };


    return (
        <Form autoComplete="off" className="">
            {/* Sms Inputs */}
            <div className="d-flex align-items-end mb-2 gap-2">
                <Form.Group className="flex-grow-1">
                    <Form.Label>SMS File Name</Form.Label>
                    <Form.Control
                        size="sm"
                        type="text"
                        name="smsFileName"
                        value={values.smsFileName}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </Form.Group>
                <Form.Group style={{ width: '100px' }}>
                    <Form.Label>SMS Number</Form.Label>
                    <Form.Control
                        size="sm"
                        type="number"
                        name="smsNumber"
                        value={values.smsNumber}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </Form.Group>
            </div>
            {/* Mms Inputs */}
            <div className="d-flex flex-row mb-2 gap-2">
                <Form.Group className="flex-grow-1">
                    <Form.Label>MMS File Name</Form.Label>
                    <Form.Control
                        size="sm"
                        type="text"
                        name="mmsFileName"
                        value={values.mmsFileName}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </Form.Group>
            </div>
            {/* Size Inputs */}
            <div>
                <Form.Group className="mb-3">
                    <Form.Label>Sprite Size</Form.Label>
                    <div className='radio-container' style={{paddingLeft: "2px"}}>
                        <Form.Check
                            inline
                            type="radio"
                            name="size"
                            label="16x16"
                            value={0}
                            onChange={handleChange}
                            defaultChecked={true}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            name="size"
                            label="16x32"
                            value={1}
                            onChange={handleChange}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            name="size"
                            label="32x32"
                            value={2}
                            onChange={handleChange}
                        />
                    </div>
                </Form.Group>
            </div>
            <Button variant="primary" onClick={handleSubmit} className='button-style'>
                Update
            </Button>
        </Form>
    );
}

export default MapSpriteForm;
