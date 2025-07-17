import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function WeaponForm({ setParent, className, style }) {
    const [weaponState, setWeaponState] = useState({
        Sword: false,
        Lance: false,
        Axe: false,
        Bow: false,
        Magic: false,
        Monster: false,
        Staff: false,
        Refresh: false,
        Unarmed: true,
    });

    const handleChange = (event) => {
        const { name, checked } = event.target;

        setWeaponState((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const handleUpdate = () => {
        setParent(weaponState);
    };

    return (
        <div className={className} style={style}>
            <Form className='d-flex flex-wrap flex-column'>
                <div className='d-flex flex-wrap'>
                    <Form.Check
                        type="checkbox"
                        className='checkbox'
                        label="Sword"
                        name="Sword"
                        id="weapon-sword"
                        checked={weaponState.Sword}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="checkbox"
                        className='checkbox'
                        label="Lance"
                        name="Lance"
                        id="weapon-lance"
                        checked={weaponState.Lance}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="checkbox"
                        className='checkbox'
                        label="Axe"
                        name="Axe"
                        id="weapon-axe"
                        checked={weaponState.Axe}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="checkbox"
                        className='checkbox'
                        label="Bow"
                        name="Bow"
                        id="weapon-bow"
                        checked={weaponState.Bow}
                        onChange={handleChange}
                    />
                </div>
                <div className='d-flex flex-wrap'>
                    <Form.Check
                        type="checkbox"
                        className='checkbox'
                        label="Magic"
                        name="Magic"
                        id="weapon-magic"
                        checked={weaponState.Magic}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="checkbox"
                        className='checkbox'
                        label="Monster"
                        name="Monster"
                        id="weapon-monster"
                        checked={weaponState.Monster}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="checkbox"
                        className='checkbox'
                        label="Staff"
                        name="Staff"
                        id="weapon-staff"
                        checked={weaponState.Staff}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="checkbox"
                        className='checkbox'
                        label="Refresh"
                        name="Refresh"
                        id="weapon-refresh"
                        checked={weaponState.Refresh}
                        onChange={handleChange}
                    />
                </div>
                <Form.Check
                        type="checkbox"
                        className='checkbox'
                        label="Unarmed"
                        name="Unarmed"
                        id="weapon-unarmed"
                        checked={weaponState.Unarmed}
                        onChange={handleChange}
                    />
            </Form>
            <Button
                className='button-style'
                variant="primary"
                onClick={handleUpdate}
                id="weapon-update-button"
                style={{marginLeft: "0.5rem"}}
            >
                Update
            </Button>
        </div>
    );
}

export default WeaponForm;
