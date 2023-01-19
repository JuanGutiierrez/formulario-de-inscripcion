import React from 'react';
import SuppliersCiudad from '../desplegables/SuppliersCiudad';
import SuppliersDepartamento from '../desplegables/SuppliersDepartamento';
import SuppliersId from '../desplegables/SuppliersId';
import SuppliersMarca from '../desplegables/SuppliersMarca';
import SuppliersPais from '../desplegables/SuppliersPais';
import axios from 'axios';
import { useState } from 'react';

const apiClientes = 'http://localhost:3100/clientes';

const FormularioClientes = () => {

    const [tipo_identificacion, setTipo_Identificacion] = useState('')
    const [numero_identificacion, setNumero_Identificacion] = useState('')
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [fecha_nacimiento, setFecha_Nacimiento] = useState('')
    const [direccion, setDireccion] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [departamento, setDepartamento] = useState('')
    const [pais, setPais] = useState('')
    const [marca, setMarca] = useState('')


    return (
        <section>
            <form action="">
                <SuppliersId />
                <p>Número de identificación</p>
                <input placeholder='Número de identificación' type="text" />
                <p>Nombres</p>
                <input placeholder='Nombres' type="text" />
                <p>Apellidos</p>
                <input placeholder='Apellidos' type="text" />
                <p>Fecha de nacimiento</p>
                <input placeholder='Fecha de nacimiento' type="date" />
                <p>Dirección</p>
                <input placeholder='Dirección' type="text" />
                <SuppliersCiudad />
                <SuppliersDepartamento />
                <SuppliersPais />
                <SuppliersMarca />
            </form>
        </section>
    )
}

export default FormularioClientes;