import { useState } from "react";
import axios from "axios";

const AddDoctor = () => {
  const [doctor, setDoctor] = useState({
    name: "",
    email: "",
    password: "",
    specialization: "",
    education: "",
    experience: "",
    fees: "",
    address: "",
    about: "",
    profilePhoto: null,
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePhoto") {
      setDoctor({ ...doctor, profilePhoto: files[0] });
    } else {
      setDoctor({ ...doctor, [name]: value });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!doctor.name.trim()) newErrors.name = "Name is required";
    if (!doctor.email.trim()) newErrors.email = "Email is required";
    if (!doctor.password.trim()) newErrors.password = "Password is required";
    if (!doctor.specialization.trim())
      newErrors.specialization = "Specialization is required";
    if (!doctor.education.trim()) newErrors.education = "Education is required";
    if (!doctor.experience.trim())
      newErrors.experience = "Experience is required";
    if (!doctor.fees.trim()) newErrors.fees = "Fees are required";
    if (!doctor.address.trim()) newErrors.address = "Address is required";
    if (!doctor.about.trim()) newErrors.about = "About section is required";
    if (!doctor.profilePhoto)
      newErrors.profilePhoto = "Profile photo is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    for (let key in doctor) {
      formData.append(key, doctor[key]);
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/doctors/add",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("✅ Doctor added successfully!");
      console.log(res.data);

      setDoctor({
        name: "",
        email: "",
        password: "",
        specialization: "",
        education: "",
        experience: "",
        fees: "",
        address: "",
        about: "",
        profilePhoto: null,
      });

      setErrors({});
      setServerError("");
    } catch (error) {
      console.error("Error adding doctor:", error);
      setServerError("❌ Something went wrong. Try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 shadow-md rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Doctor</h2>

      {serverError && (
        <p className="text-red-500 text-center mb-4">{serverError}</p>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Profile Upload */}
        <div className="col-span-2">
          <input
            type="file"
            name="profilePhoto"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.profilePhoto && (
            <p className="text-red-500 text-sm">{errors.profilePhoto}</p>
          )}
        </div>

        <input
          type="text"
          name="name"
          placeholder="Doctor Name"
          value={doctor.name}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="specialization"
          value={doctor.specialization}
          onChange={handleChange}
          placeholder="Specialization"
          className="p-2 border rounded"
        ></input>

        <input
          type="email"
          name="email"
          placeholder="Doctor Email"
          value={doctor.email}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="education"
          placeholder="Education"
          value={doctor.education}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Doctor Password"
          value={doctor.password}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="experience"
          value={doctor.experience}
          onChange={handleChange}
          placeholder="Experience"
          className="p-2 border rounded"
        ></input>

        <input
          type="number"
          name="fees"
          placeholder="Fees"
          value={doctor.fees}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={doctor.address}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <div className="col-span-2">
          <textarea
            name="about"
            placeholder="About Me"
            value={doctor.about}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded"
          />
          {errors.about && (
            <p className="text-red-500 text-sm">{errors.about}</p>
          )}
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
