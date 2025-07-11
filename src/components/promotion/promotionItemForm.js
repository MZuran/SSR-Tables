import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// Section in list for unpromoted classes
const promotionItems = [
    "HeroCrest",
    "KnightCrest",
    "OrionsBolt",
    "ElysianWhip",
    "GuidingRing",
    "HeavenSeal",
    "MasterSeal",
    "OceanSeal",
    "LunarBrace",
    "SolarBrace"
];

const optionsObject = {};

promotionItems.forEach(item => optionsObject[item] = false);

function PromotionItemForm({ setter }) {
    const [selectedOptions, setSelectedOptions] = useState(optionsObject);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;

        // Update selected options state
        const updatedOptions = {
            ...selectedOptions,
            [name]: checked,
        };

        // Update state
        setSelectedOptions(updatedOptions);

        // Pass the updated state to parent
        setter(updatedOptions);
    };

    const checkboxes = promotionItems.map((label) => (
        <Form.Check
            key={label}
            type="checkbox"
            id={`checkbox-${label}`}
            label={label}
            name={label}
            checked={selectedOptions[label]}
            onChange={handleCheckboxChange}
            style={{ marginRight: "1rem", width: "10rem" }}
        />
    ));

    return (
        <Form className='checkbox-container d-flex flex-wrap'>
            {checkboxes}
        </Form>
    );
}

export default PromotionItemForm;
