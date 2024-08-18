import React from 'react'
import { useSelector } from 'react-redux'
const shortid = require('shortid')

function Template5() {
    const dataStore = useSelector(state => state.dataStore)
    
    return (
        <div className='w-100' style={{border:"2px solid #4a90e2", backgroundColor:"#f0f4f8", fontFamily:"Arial, sans-serif"}}>
            <div className='row m-0'>
                <div className='col col-3 d-flex flex-column align-items-center py-5' style={{backgroundColor:"#4a90e2"}}>
                    <img className="rounded-circle mb-3" src={ dataStore.imageFile} alt='profile-pic'
                        style={{maxHeight:'150px', width:'150px', background:'grey'}}/>
                    <div className="text-center" style={{color:"white", fontSize:"22px"}}>
                        <div>{ dataStore.personalInfo.firstName +" "+  dataStore.personalInfo.lastName}</div>
                        <div>{dataStore.workEx[dataStore.workEx.length -1].title}</div>
                    </div>
                    <div className="mt-3 text-white text-center" style={{fontSize:"16px"}}>
                        <div>Email: {dataStore.personalInfo.Email}</div>
                        <div>Phone: {dataStore.personalInfo.Mobile}</div>
                        <div>Address: {`${dataStore.personalInfo.Address1}, ${dataStore.personalInfo.Address2}, ${dataStore.personalInfo.City}, ${dataStore.personalInfo.State}, ${dataStore.personalInfo.Pin}`}</div>
                    </div>
                </div>
                <div className='col col-9 p-5'>
                    <div className="mb-4">
                        <h2 style={{color:"#4a90e2"}}>Professional Summary</h2>
                        <p>{dataStore.personalInfo.Objective}</p>
                    </div>
                    <div className="mb-4">
                        <h2 style={{color:"#4a90e2"}}>Professional Experience</h2>
                        {dataStore.workEx.map((item) => (
                            <div key={shortid.generate()} className="mb-3">
                                <h4>{item.orgName}</h4>
                                <h5>{item.title}</h5>
                                <p>{item.startYear} - {item.endYear}</p>
                                <p>{item.jobDescription}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mb-4">
                        <h2 style={{color:"#4a90e2"}}>Education</h2>
                        {dataStore.education.map((item) => (
                            <div key={shortid.generate()} className="mb-3">
                                <h4>{item.Degree}</h4>
                                <p>{item.Type} from {item.University}</p>
                                <p>Duration: {item.Start} - {item.End}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2 style={{color:"#4a90e2"}}>Key Skills</h2>
                        <ul>
                            {dataStore.skills.map((skill) => (
                                <li key={shortid.generate()} style={{listStyleType:"none", fontSize:"18px"}}>{skill.skillName}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template5
