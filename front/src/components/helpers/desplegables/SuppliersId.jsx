import React from "react";
import { useState } from "react";
import Select from "react-select";
import axios from 'axios';

const suppliersId = [
    {label: 'Cédula de ciudadanía', value: 'Cédula de ciudadanía'},
    {label: 'Registro civil', value: 'Registro civil'},
    {label: 'Tarjeta de identidad', value: 'Tarjeta de identidad'},
    {label: 'Documento extranjero', value: 'Documento extranjero'},
    {label: 'Pasaporte', value: 'Pasaporte'},
]

const SuppliersId = () => {

    const [ selectId, setSelectId] = useState();

    const selectChangeId = ( {value} ) =>{
        setSelectId(value);
    }
    return (
        <section>
            <p >{/* {selectId} */}</p>
                <Select className='inputs' 
                    defaultValue= {{label: 'Identificación', value: 'Identificación'}}
                    options = {suppliersId}
                    onChange = {selectChangeId}
                />
        </section>    
    )
}

export default SuppliersId;