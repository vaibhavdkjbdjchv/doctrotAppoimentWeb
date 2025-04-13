import { useState } from "react";

function RegisterForm() {
  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
  });

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/doctors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctor),
    });

    const data = await res.json();
    console.log("Saved Doctor:", data);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Add Doctor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Doctor's Name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default RegisterForm;

