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
    const [numeroId, setNumeroId] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [fecha_nacimiento, setFecha_Nacimiento] = useState('')
    const [direccion, setDireccion] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [departamento, setDepartamento] = useState('')
    const [pais, setPais] = useState('')
    const [marca, setMarca] = useState('')

    const guardarCliente = async() => {
        const cliente = {
            tipo_identificacion: tipo_identificacion,
            numero_identificacion: numeroId,
            nombre: nombre,
            apellido: apellido,
            fecha_nacimiento: fecha_nacimiento,
            direccion: direccion,
            direccion: direccion,
            direccion: direccion,
            direccion: direccion,
            direccion: direccion
        }
        await axios.post(apiClientes, cliente)
    }

    return (
        <section>
            <form onSubmit={guardarCliente} action="" className='form'>
                <main className='contFormMain'>
                    <section className='contInputsId'>
                        <SuppliersId value={tipo_identificacion} onChange={(e)=> setTipo_Identificacion(e.target.value)} />
                        <input value={numeroId} onChange={(e)=> setNumeroId(e.target.value)} className='inputs' placeholder='Número de identificación' type="text" />
                    </section>
                    <section className='contInputsName'>
                        <input value={nombre} onChange={(e)=> setNombre(e.target.value)} className='inputs' placeholder='Nombres' type="text" />
                        <input value={apellido} onChange={(e)=> setApellido(e.target.value)} className='inputs' placeholder='Apellidos' type="text" />
                    </section>
                    <section className='contInputsDate'>
                        <label htmlFor="fecha_nacimiento">Fecha de nacimiento:</label>
                        <input value={fecha_nacimiento} onChange={(e)=> setFecha_Nacimiento(e.target.value)} className='inputs' placeholder='Fecha de nacimiento' type="date" />
                        <input value={direccion} onChange={(e)=> setDireccion(e.target.value)} className='inputs' placeholder='Dirección' type="text" />
                    </section>
                    <section className='contInputs'>
                        <SuppliersPais value={pais} onChange={(e)=> setPais(e.target.value)} />
                        <SuppliersMarca value={marca} onChange={(e)=> setMarca(e.target.value)} />
                        <SuppliersCiudad value={ciudad} onChange={(e)=> setCiudad(e.target.value)} />
                        <SuppliersDepartamento value={departamento} onChange={(e)=> setDepartamento(e.target.value)} />
                    </section>
                    <input /* onClick={guardarCliente}  */className='inputs btnEnviar' type="submit" value="Enviar" />
                </main>
            </form>
        </section>
    )
}

export default FormularioClientes;