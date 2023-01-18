import React from 'react';
import { useState } from 'react';
import Select from 'react-select';

const suppliersId = [
    {label: 'Cédula de ciudadanía', value: 'Cédula de ciudadanía'},
    {label: 'Registro civil', value: 'Registro civil'},
    {label: 'Tarjeta de identidad', value: 'Targeta de identidad'},
    {label: 'Documento extranjero', value: 'Documento extranjero'},
    {label: 'Pasaporte', value: 'Pasaporte'},
]

const FormularioClientes = () => {

    const [ selectId, setSelectId] = useState();

    const selectChange = ( {value} ) =>{
        setSelectId(value);
    }

    return (
        <section>
            <form action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <p >Identificación: {selectId}</p>
                <Select
                    options = {suppliersId}
                    onChange = {selectChange}
                />
            </form>
        </section>
    )
}

export default FormularioClientes;