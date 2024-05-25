import { useState } from 'react';
import pdfFile from '../../DOC/Informe_de_la_Parte_01.pdf';
const P01 = () => {
    const [pdfUrl, setPdfUrl] = useState(pdfFile);

    return (
        <>
        {
            pdfUrl ? (
            <div className="p-4">
                <div style={{ height: '1200px', marginBottom: '20px' }}>
                    <iframe src={pdfUrl} width="100%" height="100%" title="PDF" style={{ border: 'none' }}></iframe>
                </div>
            </div>
            ) : (
                <p>Loading...</p>
            )
        }
            
        </>
    );



}

export default P01;
