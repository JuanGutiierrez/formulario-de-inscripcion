const suppliersDepartamento = [
    {"id": 0, "departamento": "Amazonas"},
    {"id": 1, "departamento": "Antioquia"},
    {"id": 2, "departamento": "Arauca"},
    {"id": 3, "departamento": "Atlántico"},
    {"id": 4, "departamento": "Bolívar"},
    {"id": 5, "departamento": "Boyacá"},
    {"id": 6, "departamento": "Caldas"},
    {"id": 7, "departamento": "Caquetá"},
    {"id": 8, "departamento": "Casanare"},
    {"id": 9, "departamento": "Cauca"},
    {"id": 10, "departamento": "Cesar"},
    {"id": 11, "departamento": "Chocó"},
    {"id": 12, "departamento": "Cundinamarca"},
    {"id": 13, "departamento": "Córdoba"},
    {"id": 14, "departamento": "Guainía"},
    {"id": 15, "departamento": "Guaviare"},
    {"id": 16, "departamento": "Huila"},
    {"id": 17, "departamento": "La Guajira"},
    {"id": 18, "departamento": "Magdalena"},
    {"id": 19, "departamento": "Meta"},
    {"id": 20, "departamento": "Meta"},
    {"id": 21, "departamento": "Norte de Santander"},
    {"id": 22, "departamento": "Putumayo"},
    {"id": 23, "departamento": "Quindío"},
    {"id": 24, "departamento": "Risaralda"},
    {"id": 25, "departamento": "San Andrés y Providencia"},
    {"id": 26, "departamento": "Santander"},
    {"id": 27, "departamento": "Sucre"},
    {"id": 28, "departamento": "Tolima"},
    {"id": 29, "departamento": "Valle del Cauca"},
    {"id": 30, "departamento": "Vaupés"},
    {"id": 31, "departamento": "Vichada"},
]

import React from "react";
import { useState } from "react";
import Select from "react-select";
import axios from 'axios';

const SuppliersDepartamento = () => {
    
    const [ selectDepartamento, setSelectDepartamento] = useState();

    const selectChangeDepartamento = ( {value} ) =>{
        setSelectDepartamento(value);
    }

    return (
        <section>
            <p >{/* {selectDepartamento} */}</p>
                <Select className='inputs'
                    defaultValue= {{label: 'Departamento', value: 'Departamento'}}
                    options = {suppliersDepartamento.map(sup => ({label: sup.departamento, value: sup.id}))}
                    onChange = {selectChangeDepartamento}
                />
        </section>    
    )
}

export default SuppliersDepartamento;