import React from 'react';

// The AppForm component receives props from the parent (Job.jsx)
const AppForm = ({ role, formData, setFormData, handleSubmit, errors }) => {
  // Destructure values from formData state object
  const { name, email, coverLetter, resume } = formData;

  // This function handles input changes and updates the formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    //destructuring of the name and value from the event target. It is the process of extracting properties from an object and assigning them to variables. In this case, name and value are being extracted from the event target (e.target).
    // e.target is the element that triggered the event (e.g., input, textarea)
    // name is the name of the input field, and value is the current value of that field

    //const a = 5; //constructing of variable
    
    //loose equality: ==
    //strict equality: ===

    // Limit the cover letter to 500 characters
    if (name === 'coverLetter' && value.length > 200) return;

    // Update the form field based on the input name (e.g., name, email)
    setFormData((past) => ({
      ...past, // Spread the previous formData
      [name]: value, // Update the field that changed
    }));
  };
//... is called a spread operator. It is used to copy the properties of an object into another object. In this case, it copies all the properties of the previous formData object into the new object being created.


  //This is a more concise way to update the formData state. It uses the Object.assign method to create a new object by merging the previous formData with the updated field.
  // setFormData((past) => Object.assign({}, past, { [name]: value })); // This is another way to update the formData state. It creates a new object by merging the previous formData with the updated field.
  
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
        placeholder="Cover Letter (max 200 characters)"
        value={coverLetter}
        onChange={handleChange}
      />
      {/* Live character counter */}
      <p>{coverLetter.length}/200</p>

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
