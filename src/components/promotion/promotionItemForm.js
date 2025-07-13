import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// Section in list for unpromoted classes
const promotionItems = [
    "HeroCrest",
    "KnightCrest",
    "OrionsBolt",
    "ElysianWhip",
    "GuidingRing",
    "HeavenSeal",
    "OceanSeal",
    "LunarBrace",
    "SolarBrace"
];

const optionsObject = {
    MasterSeal: true
};
promotionItems.forEach(item => optionsObject[item] = false);


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
            style={{ marginRight: "1rem", width: "10rem", marginBottom: "0.5rem" }}
        />
    ));

    checkboxes.push(
        <Form.Check
            type="checkbox"
            key={"MasterSeal"}
            id={`checkbox-MasterSeal`}
            label={"MasterSeal"}
            name={"MasterSeal"}
            checked={true}
            disabled
            onChange={handleCheckboxChange}
            style={{ marginRight: "1rem", width: "10rem", marginBottom: "0.5rem" }}
        />
    )

    useEffect(
        () => { setter(selectedOptions); },
        []
    )

    return (
        <div className='d-flex justify-content-center'>
            <Form className='checkbox-container d-flex flex-wrap'>
                {checkboxes}
            </Form>
        </div>
    );
}

export default PromotionItemForm;
