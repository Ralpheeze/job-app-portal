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

    // Function to move from AppForm to AppSummary (preview step)
  const handleSubmit = () => {
    setShowSummary(true); // Show the summary page
  };

  // Function to validate inputs and perform the final submission
  const confirmSubmit = (e) => {
    e.preventDefault(); // Prevent default form reload

    const { name, email } = formData;

    // Object to store any form errors
    const newErrors = {};

    // Check for empty name and email fields
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";

    // If there are errors, set them and stop the submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Start loading and clear previous errors
    setLoading(true);
    setErrors({});

    // Simulate API call or backend processing with a delay
    setTimeout(() => {
      console.log('Final Submission:', { role, ...formData }); // Print data to console
      setIsSubmitted(true); // Set submission state to true to show success message
    }, 3000);
  };

  // Function to reset the form and allow user to apply again
  const resetForm = () => {
    setRole(''); // Reset selected role
    setFormData({ name: '', email: '', coverLetter: '', resume: '' }); // Clear form fields
    setIsSubmitted(false); // Reset submission status
    setShowSummary(false); // Hide summary view
  };

  return (
    <div className="form-container">
      <h1>Job Application Portal</h1>
      {/* CONDITIONAL RENDERING: Based on the state, show different components */}
      {isSubmitted ? (
        <div>
          <h2>Thank you for applying!</h2>
          <button onClick={resetForm}>Apply for another role</button>
        </div>
      ) : !role ? ( //if the role has not being selected, then display the Role Selector component
        <RoleSelector setRole={setRole}/> //setRole is props
      ) : !showSummary ? ( //if the form data has not being filled, then display the AppForm component
        <AppForm
          role={role} // Pass selected role
          formData={formData} // Pass form data state
          setFormData={setFormData} // Function to update form data
          handleSubmit={handleSubmit} // Function to move to summary
          errors={errors} // Pass any validation errors
        />
      ) : ( // If form has been filled and summary should be shown, show AppSummary
        <AppSummary
          formData={formData} // Pass current form values
          role={role} // Pass selected role
          goBack={() => setShowSummary(false)} // Allow user to go back and edit
          confirmSubmit={confirmSubmit} // Function to finalize submission
          loading={loading} // Show loading state
        />
      )}
    </div>
  );
};

export default Job;
