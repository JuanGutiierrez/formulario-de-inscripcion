import React from "react";
import { useState } from "react";
import Select from "react-select";
import axios from 'axios';

const suppliersMarca = [
    {label: 'Americanino', value: 'Americanino'},
    {label: 'American Eagle', value: 'American Eagle'},
    {label: 'Chevignon', value: 'Chevignon'},
    {label: 'Esprit', value: 'Esprit'},
    {label: 'Naf Naf', value: 'Naf Naf'},
    {label: 'Rifle', value: 'Rifle'},
]

const SuppliersMarca = () => {

    const [ selectMarca, setSelectMarca] = useState();

    const selectChangeMarca = ( {value} ) =>{
        setSelectMarca(value);
    }

    return (
        <section>
            <p >Marca   {/* {selectMarca} */}</p>
                <Select
                    defaultValue= {{label: 'Marca', value: 'Marca'}}
                    options = {suppliersMarca}
                    onChange = {selectChangeMarca}
                />
        </section>    
    )
}

export default SuppliersMarca;