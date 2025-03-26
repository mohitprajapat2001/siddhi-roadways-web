import React from 'react'

const AddItemModal = ({ id, handleSubmit }) => {
    return (
        <div>
            <dialog id="add_item_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Add Invoice Item!</h3>
                    <div>
                        <form method="POST" onSubmit={handleSubmit} className='flex flex-col gap-3'>
                            <input className='hidden' value={id} name='invoice_id' />
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Item Name</span>
                                </div>
                                <input type="text" placeholder="Enter Item Name" className="input input-bordered w-full" name='title' required />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Item Quantity</span>
                                </div>
                                <input type="text" placeholder="Enter Item Quantity" className="input input-bordered w-full" name='quantity' required />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Item Price</span>
                                </div>
                                <input type="text" placeholder="Enter Item Price" className="input input-bordered w-full" name='price' required />
                            </label>
                            <button className='btn btn-secondary w-full'>
                                Add Item
                            </button>
                        </form>
                    </div>
                </div>
            </dialog></div>
    )
}

export default AddItemModal