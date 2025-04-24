import React from 'react';

// The AppForm component receives props from the parent (Job.jsx)
const AppForm = ({ role, formData, setFormData, handleSubmit, errors }) => {
  // Destructure values from formData state object
  const { name, email, coverLetter, resume } = formData;

  // This function handles input changes and updates the formData state
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limit the cover letter to 500 characters
    if (name === 'coverLetter' && value.length > 500) return;

    // Update the form field based on the input name (e.g., name, email)
    setFormData((prev) => ({
      ...prev, // Spread the previous formData
      [name]: value, // Update the field that changed
    }));
  };

  return (
    // The form handles submission when user clicks the submit button
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Prevent default page refresh on form submit

        // Basic validation checks to ensure all fields are filled
        if (!name || !email || !coverLetter || !resume) {
          alert('All fields are required'); // Alert the user
          return;
        }

        // Ensure the email includes an @ symbol
        if (!email.includes('@')) {
          alert('Invalid email address');
          return;
        }

        // Resume should be a link ending with .pdf or .docx
        if (!resume.endsWith('.pdf') && !resume.endsWith('.docx')) {
          alert('Resume must be a .pdf or .docx file link');
          return;
        }

        // If all validation passes, call the handleSubmit function
        handleSubmit();
      }}
    >
      {/* Shows the job role the user is applying for */}
      <h3>Applying for: {role}</h3>

      {/* Full Name input field */}
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={name}
        onChange={handleChange}
      />
      {/* Show validation error message if name is invalid */}
      {errors.name && <p className="error">{errors.name}</p>}

      {/* Email input field */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
      {/* Show validation error message if email is invalid */}
      {errors.email && <p className="error">{errors.email}</p>}

      {/* Cover letter textarea with a max length of 500 characters */}
      <textarea
        name="coverLetter"
        placeholder="Cover Letter (max 500 characters)"
        value={coverLetter}
        onChange={handleChange}
      />
      {/* Live character counter */}
      <p>{coverLetter.length}/500</p>

      {/* Resume input field (should be a link to a PDF or DOCX file) */}
      <input
        type="text"
        name="resume"
        placeholder="Paste resume link (.pdf/.docx)"
        value={resume}
        onChange={handleChange}
      />

      {/* Submit button to review the application */}
      <button type="submit">Review Application</button>
    </form>
  );
};

export default AppForm;

















// import React from 'react';

// const AppForm = ({ role, formData, setFormData, handleSubmit, errors }) => {
//   const { name, email, coverLetter, resume } = formData;
//   // const [loading, setLoading] = useState(false);
//   //   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === 'coverLetter' && value.length > 500) return;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         if (!name || !email || !coverLetter || !resume) {
//           alert('All fields are required');
//           return;
//         }

//         if (!email.includes('@')) {
//           alert('Invalid email address');
//           return;
//         }

//         if (!resume.endsWith('.pdf') && !resume.endsWith('.docx')) {
//           alert('Resume must be a .pdf or .docx file link');
//           return;
//         }

//         handleSubmit();
//       }}
//     >
//       <h3>Applying for: {role}</h3>
//       <input
//         type="text"
//         name="name"
//         placeholder="Full Name"
//         value={name}
//         onChange={handleChange}
//       />
//       {errors.name && <p className="error">{errors.name}</p>}

//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={email}
//         onChange={handleChange}
//       />
//       {errors.email && <p className="error">{errors.email}</p>}

//       <textarea
//         name="coverLetter"
//         placeholder="Cover Letter (max 500 characters)"
//         value={coverLetter}
//         onChange={handleChange}
//       />
//       <p>{coverLetter.length}/500</p>
//       <input
//         type="text"
//         name="resume"
//         placeholder="Paste resume link (.pdf/.docx)"
//         value={resume}
//         onChange={handleChange}
//       />
//       <button type="submit">Review Application</button>
//     </form>
//   );
// };

// export default AppForm;
