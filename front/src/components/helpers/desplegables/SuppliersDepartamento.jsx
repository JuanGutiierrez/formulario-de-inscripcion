import React from "react";
import { useState } from "react";
import Select from "react-select";

const suppliersDepartamento = [
    {label: 'Cédula de ciudadanía', value: 'Cédula de ciudadanía'},
    {label: 'Registro civil', value: 'Registro civil'},
    {label: 'Tarjeta de identidad', value: 'Targeta de identidad'},
    {label: 'Documento extranjero', value: 'Documento extranjero'},
    {label: 'Pasaporte', value: 'Pasaporte'},
]


const SuppliersDepartamento = () => {
    
    const [ selectDepartamento, setSelectDepartamento] = useState();

    const selectChangeDepartamento = ( {value} ) =>{
        setSelectDepartamento(value);
    }

    return (
        <section>
            <p >Departamento : {selectDepartamento}</p>
                <Select
                    defaultValue= {{label: 'Departamento', value: 'Departamento'}}
                    options = {suppliersDepartamento}
                    onChange = {selectChangeDepartamento}
                />
        </section>    
    )
}

export default SuppliersDepartamento;