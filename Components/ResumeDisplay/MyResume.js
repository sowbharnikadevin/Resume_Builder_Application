import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import jsPDF from 'jspdf'
import Template1 from '../TemplatesComponents/Template1'
import Template2 from '../TemplatesComponents/Template2'
import Template3 from '../TemplatesComponents/Template3'
import Template4 from '../TemplatesComponents/Template4'
import Template5 from '../TemplatesComponents/Template5' // Import the new template
import Template6 from '../TemplatesComponents/Template6' // Import the new template
import html2canvas from 'html2canvas'
import SuccessMessage from './Modal'

function MyResume() {
    const selectedTemplate = useSelector(state => state.dataStore.selectedTemplate)
    const [showModal, setShowModal] = useState(false)
    const downloadComponentPDF = () => {
        const input = document.getElementById('divToPrint');
        html2canvas(input, { scrollY: -window.scrollY })
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF("p", "px", "a4");
            var ratio = canvas.width/canvas.height;
            var width = pdf.internal.pageSize.getWidth();
            var height = width / ratio;
            pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
            pdf.save("resume.pdf");
        })
        .then(()=>{
            setTimeout(() => {
                setShowModal(true)
                setTimeout(() => setShowModal(false), 6000)
            }, 100)
        });
    }
    
    return (
        <div className='container w-100 overflow-scroll'>
            <div className='row mt-2 p-5'>
                <div className='w-100 d-flex justify-content-center'>
                    <Link to="/detailsfillingpage/keyskills">
                        <button className='btn btn-primary me-4 p-2'> Go-Back</button>
                    </Link>
                    <button className='btn btn-success ms-3 p-2' onClick={downloadComponentPDF}>
                        Save Resume
                    </button>
                </div>
            </div>
            <div className='mt-2 p-5 w-100' style={{ minWidth:"1200px", overflow:'scroll'}}>
                <div className='w-100 d-flex justify-content-center'>
                    <div className='w-100'>
                        <div id='divToPrint' className='w-100'>
                            {selectedTemplate === ""
                                ? <div><h1>Please select a template!</h1></div>
                                : selectedTemplate === "Template 1"
                                ? <Template1 />
                                : selectedTemplate === "Template 2"
                                ? <Template2 />
                                : selectedTemplate === "Template 3"
                                ? <Template3 />
                                : selectedTemplate === "Template 4"
                                ? <Template4 />
                                : selectedTemplate === "Template 5" // Ensure correct string value
                                ? <Template5 />
                                : selectedTemplate === "Template 6"
                                ? <Template6 />

                                
                                : <div><h1>Unknown template selected</h1></div>} {/* Fallback for unknown template */}
                        </div>
                    </div>
                </div>
                <div><SuccessMessage showModal={showModal} setShowModal={setShowModal} /></div>
            </div>
        </div>
    )
}

export default MyResume
