import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    age: "",
    address: "",
    state: "",
    skills: []
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle Skills Checkbox
  const handleSkills = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter(skill => skill !== value)
      });
    }
  };

  // Auto Age Calculation from DOB
  const handleDOB = (e) => {
    const dobValue = e.target.value;
    const birthDate = new Date(dobValue);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    setFormData({
      ...formData,
      dob: dobValue,
      age: age
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  // Cancel
  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      age: "",
      address: "",
      state: "",
      skills: []
    });
  };
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="container">
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <input type="text" name="firstName" placeholder="First Name"
          value={formData.firstName} onChange={handleChange} required />

        <input type="text" name="lastName" placeholder="Last Name"
          value={formData.lastName} onChange={handleChange} required />

        {/* Gender */}
        <div className="gender-group">
  <p className="section-title">Gender:</p>

  <label className="option-label">
    <input type="radio" name="gender" value="Male"
      checked={formData.gender === "Male"}
      onChange={handleChange}
    /> Male
  </label>

  <label className="option-label">
    <input type="radio" name="gender" value="Female"
      checked={formData.gender === "Female"}
      onChange={handleChange}
    /> Female
  </label>
</div>
        

        {/* DOB */}
        <input type="date" name="dob"
          value={formData.dob}
          onChange={handleDOB}
           max={today}
          required />

        {/* Age Auto */}
        <input type="number" placeholder="Age"
          value={formData.age}
          readOnly />

        {/* Skills */}
        <div className="skills-group">
  <p className="section-title">Skills:</p>

  <label className="option-label">
    <input type="checkbox" value="Java" onChange={handleSkills} /> Java
  </label>

  <label className="option-label">
    <input type="checkbox" value="Python" onChange={handleSkills} /> Python
  </label>

  <label className="option-label">
    <input type="checkbox" value="React" onChange={handleSkills} /> React
  </label>
</div>
        

        {/* Address */}
        <textarea name="address" placeholder="Address"
          value={formData.address}
          onChange={handleChange} required />

        {/* State */}
        <select name="state"
          value={formData.state}
          onChange={handleChange}
          required>
          <option value="">Select State</option>
          <option>Gujarat</option>
          <option>Maharashtra</option>
          <option>Rajasthan</option>
          <option>Delhi</option>
        </select>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>

      </form>
    </div>
  );
}

export default App;