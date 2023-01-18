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
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <SuppliersCiudad />
                <SuppliersDepartamento />
                <SuppliersPais />
                <SuppliersMarca />
            </form>
        </section>
    )
}

export default FormularioClientes;