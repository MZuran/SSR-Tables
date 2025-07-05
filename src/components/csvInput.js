import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

import { getParsedCSVObject, bladeLordObject } from '@/utils/parse'

import { exportObjectForFE6, exportObjectForFE7, exportObjectForFE8 } from '@/utils/table functions/exportClassTables';

const CsvInput = ({ onLoadData }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleLoadData = () => {
        if (onLoadData) {
            const classObject = getParsedCSVObject(inputValue)
            onLoadData(
                {
                    classObject: classObject,
                    tableData: {
                        FE6: exportObjectForFE6(classObject),
                        FE7: exportObjectForFE7(classObject),
                        FE8: exportObjectForFE8(classObject)
                    }
                }
            );
        }
    };

    const handleUseExampleData = () => {
        if (onLoadData) {
            const classObject = bladeLordObject
            onLoadData(
                {
                    classObject: classObject,
                    tableData: {
                        FE6: exportObjectForFE6(classObject),
                        FE7: exportObjectForFE7(classObject),
                        FE8: exportObjectForFE8(classObject)
                    }
                }
            );
        }
    };

    return (
        <Form className='component-container'>
            <Form.Control
                type="textarea"
                placeholder="Enter CSV data"
                autoComplete='off'
                value={inputValue}
                onChange={handleInputChange}
                size="sm"
                style={{ maxWidth: "95%" }}
                className='m-2'
            />
            <Button variant="outline-secondary" size="sm" onClick={handleLoadData} className='m-2'>
                Load Data
            </Button>
            <Button variant="outline-secondary" size="sm" onClick={handleUseExampleData} className=''>
                Use Example Data
            </Button>
        </Form>
    );
};

export default CsvInput;