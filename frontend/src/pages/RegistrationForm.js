import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [preferredJob, setPreferredJob] = useState('');
  const [formerExperience, setFormerExperience] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      country,
      preferredJob,
      formerExperience: formerExperience.split(',').map((exp) => exp.trim()),
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/results');
  };

  return (
    <div className="registration-page">
      <div className="registration-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
          alt="RefuLink chat bubbles logo"
          className="registration-logo"
        />
        <header>
          <h1 className="registration-heading">Register with RefuLink</h1>
          <p className="registration-subheading">
            Refugee Registration & Job Matching Portal
          </p>
        </header>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country of Origin:</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              autoComplete="country-name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="preferredJob">Preferred Job:</label>
            <input
              type="text"
              id="preferredJob"
              value={preferredJob}
              onChange={(e) => setPreferredJob(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formerExperience">
              Former Experience (comma-separated):
            </label>
            <textarea
              id="formerExperience"
              value={formerExperience}
              onChange={(e) => setFormerExperience(e.target.value)}
              required
              placeholder="e.g. Tailoring, Construction, Teaching"
            />
          </div>
          <button type="submit" className="registration-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
