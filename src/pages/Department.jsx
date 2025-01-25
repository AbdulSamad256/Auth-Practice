import React, { useState } from "react";

const Department = () => {
  const [token, setToken] = useState("");
  const [beneficiary, setBeneficiary] = useState(null);
  const [assistanceStatus, setAssistanceStatus] = useState("In Progress");
  const [remarks, setRemarks] = useState("");
  const [error, setError] = useState("");

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const fetchBeneficiaryDetails = async () => {
    if (!token) {
      setError("Please enter a valid token");
      return;
    }
    setError("");
    try {
      const response = await fetch(`http://localhost:4000/User/${token}`);
      const data = await response.json();
      if (response.ok) {
        setBeneficiary(data);
      } else {
        setError("No beneficiary found for this token");
      }
    } catch (error) {
      setError("Error fetching beneficiary details");
    }
  };

  const handleStatusChange = (e) => {
    setAssistanceStatus(e.target.value);
  };

  const handleRemarksChange = (e) => {
    setRemarks(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!remarks) {
      setError("Please add remarks or actions taken");
      return;
    }

    const updatedDetails = {
      assistanceStatus,
      remarks,
    };

    try {
      const response = await fetch(
        `http://localhost:4000/User/update/${beneficiary._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedDetails),
        }
      );

      if (response.ok) {
        alert("Assistance status updated successfully");
        setRemarks("");
        setBeneficiary(null);
        setToken("");
      } else {
        setError("Failed to update assistance status");
      }
    } catch (error) {
      setError("Error updating assistance status");
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        Department Assistance Portal
      </h1>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-md mb-6 text-center">
          {error}
        </div>
      )}

      {/* Token Input Section */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Token Presentation
        </h2>
        <label htmlFor="token" className="block text-sm font-medium mb-2">
          Scan or Enter Token
        </label>
        <div className="flex items-center gap-3">
          <input
            type="text"
            id="token"
            value={token}
            onChange={handleTokenChange}
            className="p-3 border border-gray-300 rounded-md w-full"
            placeholder="Enter Token"
          />
          <button
            type="button"
            onClick={fetchBeneficiaryDetails}
            className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Retrieve Details
          </button>
        </div>
      </div>

      {/* Beneficiary Details Section */}
      {beneficiary && (
        <div className="bg-white p-6 rounded-md shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Beneficiary Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong>Name:</strong> {beneficiary.username}
            </div>
            <div>
              <strong>CNIC:</strong> {beneficiary.cnic}
            </div>
            <div>
              <strong>Contact:</strong> {beneficiary.contact}
            </div>
            <div>
              <strong>Address:</strong> {beneficiary.address}
            </div>
            <div>
              <strong>Purpose:</strong> {beneficiary.purpose}
            </div>
            <div>
              <strong>Department:</strong> {beneficiary.department}
            </div>
            <div>
              <strong>Registration Date:</strong>{" "}
              {beneficiary.registrationDate}
            </div>
          </div>
        </div>
      )}

      {/* Assistance Update Form */}
      {beneficiary && (
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Assistance Update
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Assistance Status */}
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium mb-2"
              >
                Assistance Status
              </label>
              <select
                id="status"
                value={assistanceStatus}
                onChange={handleStatusChange}
                className="p-3 border border-gray-300 rounded-md w-full"
              >
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Remarks */}
            <div>
              <label
                htmlFor="remarks"
                className="block text-sm font-medium mb-2"
              >
                Remarks / Actions Taken
              </label>
              <textarea
                id="remarks"
                value={remarks}
                onChange={handleRemarksChange}
                className="p-3 border border-gray-300 rounded-md w-full"
                placeholder="Enter remarks or actions taken"
              ></textarea>
            </div>

            <button
              type="submit"
              className="p-3 bg-green-600 text-white rounded-md hover:bg-green-700 w-full"
            >
              Update Assistance Status
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Department;
