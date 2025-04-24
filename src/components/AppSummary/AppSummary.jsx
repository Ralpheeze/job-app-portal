import React from 'react';

const AppSummary = ({ formData, role, goBack, confirmSubmit, loading }) => {
  const { name, email, coverLetter, resume } = formData;

  return (
    <div>
      <h3>Review Your Application</h3>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Cover Letter:</strong> {coverLetter}</p>
      <p><strong>Resume:</strong> {resume}</p>

      <button onClick={goBack}>Back to Edit</button>
      <button onClick={confirmSubmit} type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Confirm & Submit"}
      </button>    </div>
  );
};

export default AppSummary;
