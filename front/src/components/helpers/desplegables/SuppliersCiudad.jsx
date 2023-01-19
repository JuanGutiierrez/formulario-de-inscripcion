import React from "react";
import { useState } from "react";
import Select from "react-select";

const suppliersCiudad = [
    {label: 'Cédula de ciudadanía', value: 'Cédula de ciudadanía'},
    {label: 'Registro civil', value: 'Registro civil'},
    {label: 'Tarjeta de identidad', value: 'Targeta de identidad'},
    {label: 'Documento extranjero', value: 'Documento extranjero'},
    {label: 'Pasaporte', value: 'Pasaporte'},
]

const SuppliersCiudad = () => {
    
    const [ selectCiudad, setSelectCiudad] = useState();
    
    const selectChangeCiudad = ( {value} ) =>{
        setSelectCiudad(value);

    }
    return (
        <section>
                <p >Ciudad : {selectCiudad}</p>
                <Select
                    defaultValue= {{label: 'Ciudad', value: 'Ciudad'}}
                    options = {suppliersCiudad}
                    onChange = {selectChangeCiudad}
                />
        </section>    
    )
}

export default SuppliersCiudad;