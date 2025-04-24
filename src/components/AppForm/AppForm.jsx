import React from 'react';

const AppForm = ({ role, formData, setFormData, handleSubmit, errors }) => {
  const { name, email, coverLetter, resume } = formData;
  // const [loading, setLoading] = useState(false);
  //   const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'coverLetter' && value.length > 500) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!name || !email || !coverLetter || !resume) {
          alert('All fields are required');
          return;
        }

        if (!email.includes('@')) {
          alert('Invalid email address');
          return;
        }

        if (!resume.endsWith('.pdf') && !resume.endsWith('.docx')) {
          alert('Resume must be a .pdf or .docx file link');
          return;
        }

        handleSubmit();
      }}
    >
      <h3>Applying for: {role}</h3>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}
      
      <textarea
        name="coverLetter"
        placeholder="Cover Letter (max 500 characters)"
        value={coverLetter}
        onChange={handleChange}
      />
      <p>{coverLetter.length}/500</p>
      <input
        type="text"
        name="resume"
        placeholder="Paste resume link (.pdf/.docx)"
        value={resume}
        onChange={handleChange}
      />
      <button type="submit">Review Application</button>
    </form>
  );
};

export default AppForm;
