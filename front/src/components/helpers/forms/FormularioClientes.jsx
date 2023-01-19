import React from 'react';
import SuppliersCiudad from '../desplegables/SuppliersCiudad';
import SuppliersDepartamento from '../desplegables/SuppliersDepartamento';
import SuppliersId from '../desplegables/SuppliersId';
import SuppliersMarca from '../desplegables/SuppliersMarca';
import SuppliersPais from '../desplegables/SuppliersPais';

const FormularioClientes = () => {
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