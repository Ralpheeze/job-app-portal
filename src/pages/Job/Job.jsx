import React, { useState } from 'react';
import AppForm from '../../components/AppForm/AppForm';
import RoleSelector from '../../components/RoleSelector/RoleSelector';
import AppSummary from '../../components/AppSummary/AppSummary';

import './job.css';

const Job = () => {
    const [role, setRole] = useState(''); //stores the role that the user selects for the role selector
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        coverLetter: '',
        resume: '',
    }); //stores the form data the user types in for the AppForm component
    const [isSubmitted, setIsSubmitted] = useState(false); //tells us if the form has been submitted or not
    const [showSummary, setShowSummary] = useState(false); //shows the summary of the form data before submission
    // const [error, setError] = useState({});
    const [errors, setErrors] = useState({}); //stores the errors in the form and displays them to the user on the UI
    const [loading, setLoading] = useState(false); //shows the loading state when the form is being submitted

    const handleSubmit = () => {
        setShowSummary(true);        
    };

    const confirmSubmit = (e) => {
      e.preventDefault();
    
      const { name, email } = formData;
    
      const newErrors = {};
      if (!name.trim()) newErrors.name = "Name is required";
      if (!email.trim()) newErrors.email = "Email is required";
    
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    
      setLoading(true);
      setErrors({});
    
      setTimeout(() => {
        console.log('Final Submission:', { role, ...formData });
        setIsSubmitted(true);
      }, 3000);
    };
    

    const resetForm = () => {
        setRole('');
        setFormData({ name: '', email: '', coverLetter: '', resume: '' });
        setIsSubmitted(false);
        setShowSummary(false);
    };

  return (
    <div className="form-container">
      <h1>Job Application Portal</h1>
      {/* CONDITIONAL RENDERINg */}
      {isSubmitted ? (
        <div>
          <h2>Thank you for applying!</h2>
          <button onClick={resetForm}>Apply for another role</button>
        </div>
      ) : !role ? ( //if the role has not being selected, then display the Role Selector component
        <RoleSelector setRole={setRole}/> //setRole is props
      ) : !showSummary ? ( //if the form data has not being filled, then display the AppForm component
        <AppForm
          role={role}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      ) : (
        <AppSummary
          formData={formData}
          role={role}
          goBack={() => setShowSummary(false)}
          confirmSubmit={confirmSubmit}
          loading={loading}
        />
      )}
    </div>
  );
};

export default Job;
