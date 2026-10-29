import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaUniversity,
  FaCode,
  FaMale,
  FaFemale,
} from "react-icons/fa";

function UserName() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    college: "",
    branch: "",
    customBranch: "",
    experience: "",
    year: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = () => {
    if (
      !formData.name ||
      !formData.gender ||
      !formData.college ||
      !formData.branch ||
      !formData.experience
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const finalData = {
      ...formData,
      branch:
        formData.branch === "Other"
          ? formData.customBranch
          : formData.branch,
    };

    localStorage.setItem(
      "userInfo",
      JSON.stringify(finalData)
    );

    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h1 className="text-center text-4xl font-bold">
            Welcome Future Developer 
          </h1>

          <p className="mt-3 text-center text-gray-300">
            Tell us a little about yourself so we can personalize your
            interview preparation journey.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {/* Name */}
            <div>
              <label className="mb-2 block font-medium">
                Full Name
              </label>

              <div className="flex items-center rounded-xl border border-white/20 bg-white/10 px-4">
                <FaUserGraduate />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent p-4 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/20 bg-white/10 p-4 outline-none"
              />
            </div>

            {/* College */}
            <div>
              <label className="mb-2 block font-medium">
                College Name
              </label>

              <div className="flex items-center rounded-xl border border-white/20 bg-white/10 px-4">
                <FaUniversity />
                <input
                  type="text"
                  name="college"
                  placeholder="Enter college name"
                  value={formData.college}
                  onChange={handleChange}
                  className="w-full bg-transparent p-4 outline-none"
                />
              </div>
            </div>

            {/* Year */}
            <div>
              <label className="mb-2 block font-medium">
                Year
              </label>

              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/20 bg-slate-900 p-4 outline-none"
              >
                <option value="">Select Year</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>
            </div>

            {/* Branch */}
            <div>
              <label className="mb-2 block font-medium">
                Branch
              </label>

              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/20 bg-slate-900 p-4 outline-none"
              >
                <option value="">Select Branch</option>
                <option>CSE</option>
                <option>IT</option>
                <option>ECE</option>
                <option>EE</option>
                <option>ME</option>
                <option>CE</option>
                <option>Other</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="mb-2 block font-medium">
                Experience
              </label>

              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/20 bg-slate-900 p-4 outline-none"
              >
                <option value="">Select</option>
                <option>Fresher</option>
                <option>1-2 Years</option>
                <option>3+ Years</option>
              </select>
            </div>
          </div>

          {/* Other Branch */}
          {formData.branch === "Other" && (
            <div className="mt-6">
              <input
                type="text"
                name="customBranch"
                placeholder="Specify your branch"
                value={formData.customBranch}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/20 bg-white/10 p-4 outline-none"
              />
            </div>
          )}

          {/* Gender */}
          <div className="mt-8">
            <h3 className="mb-4 font-medium">
              Select Gender
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    gender: "Male",
                  })
                }
                className={`rounded-2xl border p-5 transition ${
                  formData.gender === "Male"
                    ? "border-cyan-400 bg-cyan-500/20"
                    : "border-white/20 bg-white/5"
                }`}
              >
                <FaMale className="mx-auto mb-2 text-3xl" />
                Male
              </button>

              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    gender: "Female",
                  })
                }
                className={`rounded-2xl border p-5 transition ${
                  formData.gender === "Female"
                    ? "border-pink-400 bg-pink-500/20"
                    : "border-white/20 bg-white/5"
                }`}
              >
                <FaFemale className="mx-auto mb-2 text-3xl" />
                Female
              </button>
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="mt-10 w-full rounded-2xl bg-cyan-500 py-4 text-lg font-semibold transition hover:scale-[1.02] hover:bg-cyan-400"
          >
            Continue 
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default UserName;