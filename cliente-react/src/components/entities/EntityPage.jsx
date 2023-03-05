import React from 'react'
import { useLocation } from 'react-router-dom'
import EmployeesTable from '../employees/EmployeesTable'
import EmployeAddModalForm from '../employees/EmployeAddModalForm'
import EntityInfo from './EntityInfo'


const EntityPage = () => {


    // para obtener el id del param url 
    const location = useLocation()

    // obtengo el param id 
    const uid = location.pathname.split("/")[1];


    return (

        <div className='container'>

            <div className="row">
                <div className="col-md-3">
                    <EntityInfo></EntityInfo>
                </div>
                <div className="col p-3">
                    <div className='d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom'>
                        <h2 className='h6'>Empleados</h2>

                        {uid ? (
                            <EmployeAddModalForm entityId={uid} ></EmployeAddModalForm>
                        ) : (
                            <p>Loading...</p>
                        )}

                    </div>
                    <EmployeesTable entityId={uid}></EmployeesTable>
                </div>
            </div>

        </div>
    )
}
export default EntityPage