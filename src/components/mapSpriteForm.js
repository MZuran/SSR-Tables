import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function MapSpriteForm({ onUpdate }) {
    const [values, setValues] = useState({
        smsFileName: '',
        smsNumber: '',
        mmsFileName: '',
        mmsNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        const { smsFileName, smsNumber, mmsFileName, mmsNumber } = values;

        if (!smsFileName || !smsNumber || !mmsFileName || !mmsNumber) {
            alert("All fields must be filled out.");
            return;
        }

        console.log(values)
        onUpdate(values);
    };


    return (
        <Form autoComplete="off" className="mt-3 mb-3">
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

            <div className="d-flex align-items-end mb-2 gap-2">
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
                <Form.Group style={{ width: '100px' }}>
                    <Form.Label>MMS Number</Form.Label>
                    <Form.Control
                        size="sm"
                        type="number"
                        name="mmsNumber"
                        value={values.mmsNumber}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </Form.Group>
            </div>

            <Button variant="primary" size="sm" onClick={handleSubmit} className='clipboard-button'>
                Update
            </Button>
        </Form>
    );
}

export default MapSpriteForm;
