import React, { useState } from 'react'
import '../App.css'
import { pdfjs } from 'react-pdf';
import { AiOutlineEye } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfUpload = () => {
    const [file, setFile] = useState(null);

    const onFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };


    const openPdf = () => {
        if (file) {
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL);
        }
    };

    const deletePdf = () => {
        if (file) {
          setFile(null);
          setNumPages(null);
          setPageNumber(1);
        }
      };

    return (
        <>
            <div className="child-container left rounded bg-white p-3 d-flex align-items-center gap-1">
                <p className='label'>Meter Reader Signature</p>
                <input type="file" accept=".pdf" onChange={onFileChange} className='w-50' />
                {file && (
                    <div className='d-flex gap-2 align-items-center'>
                        <p className='mb-0'>{file.name}</p>
                        <AiOutlineEye onClick={openPdf} className='fs-5' />
                        <RiDeleteBin6Line onClick={deletePdf} className='fs-5' />
                    </div>
                )}
            </div>
        </>
    )
}

export default PdfUpload