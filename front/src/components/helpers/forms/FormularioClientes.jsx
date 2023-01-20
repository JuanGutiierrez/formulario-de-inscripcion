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

/*     const [numero_identificacion, setNumero_Identificacion] = useState('')
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [fecha_nacimiento, setFecha_Nacimiento] = useState('')
    const [direccion, setDireccion] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [departamento, setDepartamento] = useState('')
    const [pais, setPais] = useState('')
    const [marca, setMarca] = useState('') */


    return (
        <section>
            <form action="" className='form'>
                <main className='contFormMain'>
                    <section className='contInputsId'>
                        <SuppliersId />
                        <input className='inputs' placeholder='Número de identificación' type="text" />
                    </section>
                    <section className='contInputsName'>
                        <input className='inputs' placeholder='Nombres' type="text" />
                        <input className='inputs' placeholder='Apellidos' type="text" />
                    </section>
                    <section className='contInputsDate'>
                        <input className='inputs' placeholder='Fecha de nacimiento' type="date" />
                        <input className='inputs' placeholder='Dirección' type="text" />
                    </section>
                    <section className='contInputs'>
                        <SuppliersPais />
                        <SuppliersMarca />
                        <SuppliersCiudad />
                        <SuppliersDepartamento />
                    </section>
                    <input className='inputs btnEnviar' type="submit" value="Enviar" />
                </main>
            </form>
        </section>
    )
}

export default FormularioClientes;