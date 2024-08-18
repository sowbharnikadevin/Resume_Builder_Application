import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './CoverLetterGenerator.css';

const CoverLetterGenerator = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobPortalSource, setJobPortalSource] = useState('');
  const [degree, setDegree] = useState('');
  const [universityName, setUniversityName] = useState('');
  const [courses, setCourses] = useState('');
  const [gpa, setGpa] = useState('');
  const [classRank, setClassRank] = useState('');
  const [totalStudents, setTotalStudents] = useState('');
  const [interestAreas, setInterestAreas] = useState(['', '', '']);
  const [project, setProject] = useState('');
  const [internshipCompany, setInternshipCompany] = useState('');
  const [projectRank, setProjectRank] = useState('');
  const [generatedLetter, setGeneratedLetter] = useState('');

  const handleGenerate = () => {
    const coverLetter = `
      Sub: Cover Letter

      Dear Hiring Manager,

      I am writing this letter to you regarding the ${jobTitle} position that has recently
      opened up in your company. I came across this position on ${jobPortalSource} and was
      pleasantly surprised to find that I have all the required qualifications for this 
      job.

      I have studied ${degree} from ${universityName}. During my time there, I had taken up
      courses related to ${courses}.

      Currently, I hold a total ${gpa} GPA and have been a good student throughout my 
      time at the University.I have also been ranked ${classRank} in a class of 
      approximately ${totalStudents} students.

      While attending classes, I focused my attention on the following areas:
      1. ${interestAreas[0]}
      2. ${interestAreas[1]}
      3. ${interestAreas[2]}

      My focused study helped me develop ${project}. It has also helped me secure a 
      prominent internship at ${internshipCompany},where I was ranked ${projectRank} 
      overall.

      I would be grateful to have an interview session with you. Please take a look 
      at the resume I have enclosed with this letter at your convenience. 
      I have provided my email and contact number should you be interested in 
      knowing more about me.

      Sincerely,
      [Your Name]
    `;

    setGeneratedLetter(coverLetter);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(generatedLetter, 10, 10);
    doc.save('cover_letter.pdf');
  };

  return (
    <div className="cover-letter-container">
      <h2>Cover Letter Generator</h2>
      
      <div className="form-group">
        <label>Job Title:</label>
        <input 
          type="text" 
          value={jobTitle} 
          onChange={(e) => setJobTitle(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Company Name:</label>
        <input 
          type="text" 
          value={companyName} 
          onChange={(e) => setCompanyName(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Job Portal Source:</label>
        <input 
          type="text" 
          value={jobPortalSource} 
          onChange={(e) => setJobPortalSource(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Degree:</label>
        <input 
          type="text" 
          value={degree} 
          onChange={(e) => setDegree(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>University Name:</label>
        <input 
          type="text" 
          value={universityName} 
          onChange={(e) => setUniversityName(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Relevant Courses:</label>
        <input 
          type="text" 
          value={courses} 
          onChange={(e) => setCourses(e.target.value)} 
          placeholder="Separate courses with commas"
        />
      </div>
      <div className="form-group">
        <label>GPA:</label>
        <input 
          type="text" 
          value={gpa} 
          onChange={(e) => setGpa(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Class Rank:</label>
        <input 
          type="text" 
          value={classRank} 
          onChange={(e) => setClassRank(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Total Students:</label>
        <input 
          type="text" 
          value={totalStudents} 
          onChange={(e) => setTotalStudents(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Areas of Interest (3):</label>
        {interestAreas.map((area, index) => (
          <input 
            key={index}
            type="text"
            value={area}
            onChange={(e) => {
              const updatedAreas = [...interestAreas];
              updatedAreas[index] = e.target.value;
              setInterestAreas(updatedAreas);
            }}
            placeholder={`Area of Interest ${index + 1}`}
          />
        ))}
      </div>
      <div className="form-group">
        <label>University Project:</label>
        <input 
          type="text" 
          value={project} 
          onChange={(e) => setProject(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Internship Company:</label>
        <input 
          type="text" 
          value={internshipCompany} 
          onChange={(e) => setInternshipCompany(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Project Rank:</label>
        <input 
          type="text" 
          value={projectRank} 
          onChange={(e) => setProjectRank(e.target.value)} 
        />
      </div>
      <button onClick={handleGenerate}>Generate Cover Letter</button>
      {generatedLetter && (
        <div className="generated-letter">
          <h3>Your Cover Letter</h3>
          <pre>{generatedLetter}</pre>
          <button onClick={handleDownloadPDF}>Download as PDF</button>
        </div>
      )}
    </div>
  );
};

export default CoverLetterGenerator;
