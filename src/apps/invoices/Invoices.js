import React from 'react'
import { NavLink } from 'react-router-dom'
import Context from '../../context/Contexts'
import { useContext, useEffect } from 'react'

const Invoices = () => {
    const { invoices, getInvoices, deleteInvoice } = useContext(Context.InvoiceContext)
    useEffect(() => {
        invoices || getInvoices()
    }, [getInvoices, invoices])
    const handleDelete = (id) => {
        deleteInvoice(id)
    }
    return (
        <div className="p-1 ml-20 h-screen bg-base-100" >
            <div className='flex flex-col w-full h-screen overflow-y-auto gap-3'>
                <div className='p-2 rounded-lg bg-base-300 shadow-md w-full flex justify-between items-center'>
                    <h1 className='text-xl font-bold'>Invoice List</h1>
                    <buttton className="btn btn-primary btn-sm">
                        <NavLink to="/">
                            Generate Invoice
                        </NavLink>
                    </buttton>
                </div>
                <div className='p-2 rounded-lg bg-base-200 shadow-md w-full'>
                    <table className="table w-full table-striped">
                        <thead>
                            <tr className="capitalize text-center">
                                <th>ID</th>
                                <th>Truck Number</th>
                                <th>Consignor</th>
                                <th>Consignee</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>To Pay</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            (invoices && invoices.map((invoice, index) => {
                                return (
                                    <tbody key={index}>
                                        <tr className="capitalize text-center">
                                            <td>{invoice.invoice_number}</td>
                                            <td>
                                                {invoice.truck_number}
                                            </td>
                                            <td>{invoice.consignor.get_full_name}</td>
                                            <td>{invoice.consignee.get_full_name}</td>
                                            <td>{invoice.source.name_ascii}</td>
                                            <td>{invoice.destination.name_ascii}</td>
                                            <td>{invoice.to_pay}</td>
                                            <td className="flex justify-center items-center gap-x-1">
                                                <button className="btn btn-sm btn-neutral">
                                                    <NavLink to={`/invoices/${invoice.id}`}>
                                                        Details
                                                    </NavLink>
                                                </button>
                                                <button className="btn btn-sm btn-neutral" onClick={() => handleDelete(invoice.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })) || (<tbody>
                                <tr>
                                    <th colSpan="8">No Invoices Found</th>
                                </tr>
                            </tbody>)
                        }
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Invoices