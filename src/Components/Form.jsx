import React, { useState } from 'react'
import '../App.css'
import PdfUpload from './PdfUpload'

const Form = () => {

    return (
        <>
            <div className="container">
                <p className='py-2 fw-semibold fs-5'>Meter Reading Inspection Report</p>
                <div className="parent-container d-flex gap-3">
                    <div className=" left w-75 d-flex flex-column gap-3">
                        <div className='child-container top bg-white p-3 py-1 pb-3 rounded'>
                            <div className="section_1 d-flex gap-3 my-3">
                                <div className='w-100 '>
                                    <p className='label mb-1'>Consumer Name</p>
                                    <input type="text" />
                                </div>
                                <div className='w-100  '>
                                    <p className='label mb-1'>Date Of Submission of Report</p>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="section_1 d-flex gap-3 my-3">
                                <div className='w-100 '>
                                    <p className='label mb-1'>Address</p>
                                    <input type="text" />
                                </div>
                                <div className='w-100  '>
                                    <p className='label mb-1'>Date Of Visit</p>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="section_1 d-flex gap-3 my-3">
                                <div className='w-100 '>
                                    <p className='label mb-1'>Premise Type</p>
                                    <input type="text" />
                                </div>
                                <div className='w-100  '>
                                    <p className='label mb-1'>Total family members / Dwelling units</p>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="section_2 my-3">
                                <p className='label mb-1'>Alternative source of water</p>

                                <div className="d-flex">
                                    <div className='d-flex w-100 align-items-center'>
                                        <label>Yes</label><input type="radio" />
                                        <label className='ms-3'>No</label><input type="radio" />
                                    </div>
                                    <div className='w-100 d-flex align-items-center'>
                                        <p className='label mb-1 me-2'>Remark</p>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="section_2 my-3">
                                <p className='label mb-1'>Any other connection found in Site</p>

                                <div className="d-flex">
                                    <div className='d-flex w-100 align-items-center'>
                                        <label>Yes</label><input type="radio" />
                                        <label className='ms-3'>No</label><input type="radio" />
                                    </div>
                                    <div className='w-100 d-flex align-items-center'>
                                        <p className='label mb-1 me-2'>Remark</p>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="section_1 d-flex gap-3 my-3">
                                <div className='w-100 '>
                                    <p className='label mb-1'>Zone</p>
                                    <input type="text" />
                                </div>
                                <div className='w-100  '>
                                    <p className='label mb-1'>Zone No.</p>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="section_1 d-flex gap-3 my-3">
                                <div className='w-100 '>
                                    <p className='label mb-1'>Nearby Contract Account No.</p>
                                    <input type="text" />
                                </div>
                                <div className='w-100  '>
                                    <p className='label mb-1'>Meter Reader Name</p>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="remark">
                                <p className='label mb-1'>Remark</p>
                                <textarea className='rounded border w-100 p-2' style={{ height: "6rem" }} />
                            </div>
                        </div>
                        <div className='bottom'>
                            <PdfUpload />
                        </div>
                    </div>

                    <div className="child-container right w-25 rounded p-2 bg-white">
                        <textarea type="text" placeholder='Enter Remarks' className='rounded border w-100 p-2' style={{ height: "5rem" }} />
                        <button>Mark for Hold</button>
                        <b><p className='m-auto text-center py-2' style={{ fontSize: "12px" }}>OR</p></b>
                        <button className='bg-warning'>Approve</button>
                    </div>
                </div>

                <div className="actionBtn w-100 d-flex justify-content-center mt-3">
                    <button className='bg-warning' style={{ width: "16rem" }}>Action</button>
                </div>
            </div>
        </>
    )
}

export default Form