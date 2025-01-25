import React, { useState } from 'react';

const Reception = () => {
  const [formData, setFormData] = useState({
    cnic: '',
    name: '',
    contact: '',
    address: '',
    purpose: '',
    department: '',
    registrationDate: '',
  });
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTokenAssignment = () => {
    if (!formData.purpose || !formData.department) {
      setError('Please select both Purpose and Department');
      return;
    }
    setError('');
    const newToken = `${formData.purpose.substring(0, 3).toUpperCase()}-${formData.department.substring(0, 3).toUpperCase()}-${Math.floor(Math.random() * 1000)}`;
    setToken(newToken);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { cnic, name, contact, address, purpose, department, registrationDate } = formData;
    if (!cnic || !name || !contact || !address || !purpose || !department || !registrationDate) {
      setError('Please fill all fields');
      return;
    }
    setError('');
    // Here you would handle the form submission (e.g., save to a database)
    alert('Beneficiary Registered Successfully');
    // Clear the form after submission
    setFormData({
      cnic: '',
      name: '',
      contact: '',
      address: '',
      purpose: '',
      department: '',
      registrationDate: '',
    });
    setToken('');
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Beneficiary Registration</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleFormSubmit} className="space-y-4">
        {/* CNIC */}
        <div>
          <label htmlFor="cnic" className="block text-sm font-semibold">CNIC</label>
          <input
            type="text"
            name="cnic"
            id="cnic"
            value={formData.cnic}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter CNIC"
          />
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Name"
          />
        </div>

        {/* Contact Details */}
        <div>
          <label htmlFor="contact" className="block text-sm font-semibold">Contact Details</label>
          <input
            type="text"
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Contact Details"
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-semibold">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Address"
          />
        </div>

        {/* Purpose */}
        <div>
          <label htmlFor="purpose" className="block text-sm font-semibold">Purpose</label>
          <select
            name="purpose"
            id="purpose"
            value={formData.purpose}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Purpose</option>
            <option value="Inquiry">Inquiry</option>
            <option value="Complaint">Complaint</option>
            <option value="Request">Request</option>
          </select>
        </div>

        {/* Department */}
        <div>
          <label htmlFor="department" className="block text-sm font-semibold">Department</label>
          <select
            name="department"
            id="department"
            value={formData.department}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Support">Support</option>
          </select>
        </div>

        {/* Registration Date */}
        <div>
          <label htmlFor="registrationDate" className="block text-sm font-semibold">Date of Registration</label>
          <input
            type="date"
            name="registrationDate"
            id="registrationDate"
            value={formData.registrationDate}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Token Assignment */}
        <button
          type="button"
          onClick={handleTokenAssignment}
          className="mt-4 p-2 bg-blue-500 text-white rounded-md"
        >
          Generate Token
        </button>

        {token && (
          <div className="mt-2">
            <strong>Assigned Token: </strong>
            <span>{token}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 p-2 bg-green-500 text-white rounded-md"
        >
          Register Beneficiary
        </button>
      </form>
    </div>
  );
};

export default Reception;
