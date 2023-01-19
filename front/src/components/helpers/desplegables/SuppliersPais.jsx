import React from "react";
import { useState } from "react";
import Select from "react-select";

const suppliersPais = [
    {label: 'Cédula de ciudadanía', value: 'Cédula de ciudadanía'},
    {label: 'Registro civil', value: 'Registro civil'},
    {label: 'Tarjeta de identidad', value: 'Targeta de identidad'},
    {label: 'Documento extranjero', value: 'Documento extranjero'},
    {label: 'Pasaporte', value: 'Pasaporte'},
]

const SuppliersPais = () => {

    const [ selectPais, setSelectPais] = useState();
    
    const selectChangePais = ( {value} ) =>{
        setSelectPais(value);
    }

    return (
        <section>
            <p >País  : {selectPais}</p>
                <Select
                    defaultValue= {{label: 'País', value: 'País'}}
                    options = {suppliersPais}
                    onChange = {selectChangePais}
                />
        </section>    
    )
}

export default SuppliersPais;