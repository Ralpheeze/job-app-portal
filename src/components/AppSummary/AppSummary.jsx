import React from 'react'; // Import React so we can use JSX and React features

// Define the AppSummary component and receive props from the parent component
const AppSummary = ({ formData, role, goBack, confirmSubmit, loading }) => {
  // Destructure the formData object to get individual fields
  const { name, email, coverLetter, resume } = formData;

  return (
    <div>
      <h3>Review Your Application</h3> {/* Section heading */}

      {/* Display the selected role */}
      <p><strong>Role:</strong> {role}</p>

      {/* Display the name entered in the form */}
      <p><strong>Name:</strong> {name}</p>

      {/* Display the email entered in the form */}
      <p><strong>Email:</strong> {email}</p>

      {/* Display the cover letter content */}
      <p><strong>Cover Letter:</strong> {coverLetter}</p>

      {/* Display the resume link */}
      <p><strong>Resume:</strong> {resume}</p>

      {/* Button to go back to edit the form; calls the goBack function */}
      <button onClick={goBack}>Back to Edit</button>

      {/* Button to confirm and submit the application */}
      {/* It shows "Submitting..." while loading is true */}
      <button onClick={confirmSubmit} type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Confirm & Submit"}
      </button>
    </div>
  );
};

export default AppSummary; // Export the component so it can be used in other files
