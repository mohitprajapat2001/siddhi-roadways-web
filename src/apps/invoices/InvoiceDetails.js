/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../../context/Contexts'
import { NavLink } from 'react-router-dom'
import AddItemModal from './AddItemModal'

const InvoiceDetails = () => {
    const { detail, getInvoiceDetails, addInvoiceItem, deleteInvoiceItem } = useContext(Context.InvoiceContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const response = addInvoiceItem(new FormData(e.target));
        response && getInvoiceDetails(invoice)
    }
    const { invoice } = useParams()
    const handleDelete = (id) => {
        deleteInvoiceItem(id)
    }
    useEffect(() => {
        getInvoiceDetails(invoice)
    }, [invoice])

    return (
        <div className="p-1 ml-20 h-screen bg-base-100" >
            <div className='flex flex-col w-full h-screen overflow-y-auto gap-3'>
                <div className='p-2 rounded-lg bg-base-300 shadow-md w-full flex justify-between items-center'>
                    <h1 className='text-xl font-bold'>Invoice Detail</h1>
                    <button className="btn btn-primary btn-sm">
                        <NavLink to="/">
                            Generate Invoice
                        </NavLink>
                    </button>
                </div>
                <div className='mx-14 px-5 py-3 rounded-lg bg-base-300 shadow-md flex flex-col gap-y-5'>
                    {((detail && <>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-start items-center gap-x-2'>
                                <button className='text-2xl font-bold'>
                                    {detail.invoice_number}
                                </button>
                                <div className='divider divider-horizontal m-0'></div>
                                <button className='text-2xl font-bold'>
                                    {detail.to_pay ? 'Paid' : 'Unpaid'}
                                </button>
                                <div className='divider divider-horizontal m-0'></div>
                                <button className='text-2xl font-bold'>
                                    {detail.truck_number}
                                </button>
                            </div>
                            <div className='flex justify-end items-center gap-x-2'>
                                <button className='btn btn-primary font-bold'>
                                    Delete Invoice
                                </button>
                            </div>
                        </div>
                        <div>
                            <table className="table-auto w-full border-collapse border border-gray-300">
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Consignor</td>
                                        <td className="border border-gray-300 px-4 py-2">{detail.consignor.get_full_name}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Consignee</td>
                                        <td className="border border-gray-300 px-4 py-2">{detail.consignee.get_full_name}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Source</td>
                                        <td className="border border-gray-300 px-4 py-2">{detail.source.display_name}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Destination</td>
                                        <td className="border border-gray-300 px-4 py-2">{detail.destination.display_name}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Product Items */}
                        <div className='flex flex-col items-end gap-y-3 w-full'>
                            <button className='btn btn-primary' onClick={() => document.getElementById('add_item_modal').showModal()}>
                                Add Item
                            </button>
                            <AddItemModal id={detail.id} handleSubmit={handleSubmit} />
                            {((detail.items && detail.items.length &&
                                <table className='w-full table table-striped'>
                                    <thead>
                                        <tr className='text-center'>
                                            <th>Item Name</th>
                                            <th>Item Quantity</th>
                                            <th>Item Price</th>
                                            <th>Item Freight</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-center'>
                                        {detail.items.map((item, index) =>
                                            <tr key={index}>
                                                <th>{item.title}</th>
                                                <th>{item.quantity}</th>
                                                <th>{item.price}</th>
                                                <th>{item.freight}</th>
                                                <th className='flex items-center justify-center px-2'>
                                                    <button className='btn btn-neutral btn-sm' onClick={() => handleDelete(item.id)}>
                                                        Delete Item
                                                    </button>
                                                </th>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            ) ||
                                <p className='w-full'>No Items Available</p>
                            )}
                        </div> </>) || (
                            <p className='w-full'>No Details Available</p>
                        ))}
                </div>
            </div>
        </div >
    )
}

export default InvoiceDetails