import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Registration = () => {
  const [step, setStep] = useState(1); // Track the current form step
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  // Watch fields for dynamic behavior if needed
  const watchRole = watch("role", "");

  const nextStep = (data) => {
    console.log("Validation Success:", data);
    setStep((prev) => prev + 1);
  };
  const prevStep = () => setStep((prev) => prev - 1);

  const formatDate =() => {
    const now = new Date();
    const datePart = new Date().toISOString().split("T")[0]; // dd-MM-yyyy
    const timePart = now.toLocaleTimeString('en-GB', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    return `${datePart}T${timePart}`;
  }

  const formatDateToDDMMYYYY = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  const onSubmit = (data) => {
    // Construct payload
    const payload = {
      user: {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber || "",
        billAddress: data.billAddress || "",
        contAddress: data.contAddress || "",
        nationality: data.nationality,
        dateOfBirth: data.dateOfBirth,
        identificationDocument: data.identificationDocument,
        role: data.role,
        registrationDate: formatDate() // dd/mm/yyyy
      },
      work: {
        title: data.title,
        description: data.description || "",
        type: data.type,
        dateCreated: data.dateCreated || "",
        datePublished: data.datePublished || "",
        medium: data.medium,
        urlLink: data.urlLink || "",
        language: data.language || "",
        countryOfFirstPublication: data.countryOfFirstPublication || "",
        status: data.workStatus || "Pending",
        submittedBy: "Current User Name", // Replace with actual user context
      },
      application: {
        user: data.copyrightUser,
        work: data.copyrightWork,
        submissionDate: formatDate(), // yyyy-mm-dd
        approvalDate: `${data.approvalDate}T00:00:00` || "",
        status: data.copyrightStatus || "Pending",
        comments: data.comments || "",
        expirationDate: data.expirationDate || "",
        renewalStatus: data.renewalStatus || "Active",
      },
      ownership: {
        user: data.ownershipUser,
        work: data.ownershipWork,
        ownershipPercentage: data.ownershipPercentage,
        dateAcquired: data.dateAcquired,
        validTill: data.validTill || "",
        rightsType: data.rightsType,
        transferStatus: data.transferStatus || "Active",
      },
      certification: {
        application: data.certificationApplication,
        issuedDate: formatDate(), // dd/mm/yyyy
        expirationDate: data.certificationExpirationDate || "",
        certificationType: data.certificationType,
        certificationFile: data.certificationFile?.[0]?.name || "",
        status: data.certificationStatus || "Active",
      },
      payment: {
        application: data.paymentApplication,
        user: data.paymentUser,
        amount: data.paymentAmount || 1000,
        date: formatDate(), // yyyy-mm-dd
        paymentMethod: data.paymentMethod || "BANK_TRANSFER",
        status: data.paymentStatus || "PENDING",
        invoiceDocument: data.invoiceDocument || "",
      },
    };

    console.log("Constructed Payload:", payload);

    // Send payload to API
    axios
      .post("/api/copyright/registration", payload)
      .then((response) => {
        alert("Form submitted successfully!");
        console.log("API Response:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Failed to submit the form.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Progress Bar */}
        <div className="flex justify-between items-center bg-indigo-600 text-white p-4">
          <h1 className="text-lg font-bold">
            {step === 1 && "User Details"}
            {step === 2 && "Work Details"}
            {step === 3 && "Copyright Application"}
            {step === 4 && "Ownership / Rights Holder"}
            {step === 5 && "Certification / License"}
          </h1>
          <span>Step {step} of 5</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
          {/* Step 1: User Details */}
          {step === 1 && (
            <>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                User Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  {/* <label className="block font-medium text-gray-700">
                    Full Name
                  </label> */}
                  <label className="block font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    {...register("name", { required: "Full Name is required" })}
                    type="text"
                    className="mt-1 w-full p-2 rounded-md  border-gray-300  bg-gray-50 shadow-sm"
                    placeholder="John Doe"
                  />
                  {/* <input
                    {...register("name", { required: "Full Name is required" })}
                    type="text"
                    className="mt-1 w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="John Doe"
                  /> */}
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    type="email"
                    className="mt-1 w-full p-2 rounded-md  border-gray-300  bg-gray-50 shadow-sm"
                    placeholder="john.doe@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    {...register("phoneNumber")}
                    type="tel"
                    className="mt-1 w-full p-2 rounded-md  border-gray-300  bg-gray-50 shadow-sm"
                    placeholder="+1 234 567 8901"
                  />
                </div>

                {/* Bill Address */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Billing Address
                  </label>
                  <textarea
                    {...register("billAddress")}
                    className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                    placeholder="123 Main St, City, Country"
                    rows="3"
                  ></textarea>
                </div>
                {/* Cont Address */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Contact Address
                  </label>
                  <textarea
                    {...register("contAddress")}
                    className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                    placeholder="123 Main St, City, Country"
                    rows="3"
                  ></textarea>
                </div>

                {/* Nationality */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Nationality
                  </label>
                  <select
                    {...register("nationality", {
                      required: "Nationality is required",
                    })}
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="">Select your nationality</option>
                    <option value="Indian">Indian</option>
                    <option value="American">American</option>
                    <option value="British">British</option>
                    <option value="Canadian">Canadian</option>
                    <option value="Australian">Australian</option>
                    {/* Add more countries as needed */}
                  </select>
                  {errors.nationality && (
                    <p className="text-red-500 text-sm">
                      {errors.nationality.message}
                    </p>
                  )}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    {...register("dateOfBirth", {
                      required: "Date of Birth is required",
                    })}
                    type="date"
                    className="mt-1 w-full p-3 rounded-md border border-gray-300 bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500 text-gray-700 shadow-sm"
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-sm">
                      {errors.dateOfBirth.message}
                    </p>
                  )}
                </div>

                {/* Identification Document */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Identification Document
                  </label>
                  <select
                    {...register("identificationDocument", {
                      required: "Identification Document is required",
                    })}
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="">Select document type</option>
                    <option value="ID">ID</option>
                    <option value="Passport">Passport</option>
                    <option value="Driver's License">Driver's License</option>
                  </select>
                  {errors.identificationDocument && (
                    <p className="text-red-500 text-sm">
                      {errors.identificationDocument.message}
                    </p>
                  )}
                </div>

                {/* Role */}
                <div className="sm:col-span-2">
                  <label className="block font-medium text-gray-700">
                    Role
                  </label>
                  <div className="flex space-x-4 mt-2">
                    <label className="flex items-center space-x-2">
                      <input
                        {...register("role", { required: "Role is required" })}
                        type="radio"
                        value="INDIVIDUAL"
                        className="focus:ring-indigo-500 text-indigo-600 border-gray-300"
                      />
                      <span>Individual</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        {...register("role")}
                        type="radio"
                        value="ORGANIZATION"
                        className="focus:ring-indigo-500 text-indigo-600 border-gray-300"
                      />
                      <span>Organization</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        {...register("role")}
                        type="radio"
                        value="AUTHORIZED_AGENT"
                        className="focus:ring-indigo-500 text-indigo-600 border-gray-300"
                      />
                      <span>Authorized Agent</span>
                    </label>
                  </div>
                  {errors.role && (
                    <p className="text-red-500 text-sm">
                      {errors.role.message}
                    </p>
                  )}
                </div>

                {/* Registration Date */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Registration Date
                  </label>
                  <input
                    type="text"
                    value={new Date().toLocaleDateString("en-GB")} // dd/mm/yyyy
                    readOnly
                    className="mt-1 w-full p-2 rounded-md  border-gray-300  bg-gray-50 shadow-sm cursor-not-allowed"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSubmit(nextStep)}
                  className="py-2 px-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* Step 2: Work Details */}
          {step === 2 && (
            <>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Work Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Title */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    {...register("title", { required: "Title is required" })}
                    type="text"
                    className="mt-1 w-full p-2 rounded-md border border-gray-300  bg-gray-50 shadow-sm"
                    placeholder="The Great Symphony"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    {...register("description")}
                    className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                    placeholder="Brief description of the work..."
                    rows="3"
                  ></textarea>
                </div>

                {/* Type */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Type
                  </label>
                  <select
                    {...register("type", { required: "Type is required" })}
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="">Select Type</option>
                    <option value="LITERARY">Literary</option>
                    <option value="MUSICAL">Musical</option>
                    <option value="VISUAL">Visual</option>
                    <option value="OTHER">Other</option>
                  </select>
                  {errors.type && (
                    <p className="text-red-500 text-sm">
                      {errors.type.message}
                    </p>
                  )}
                </div>

                {/* Date Created */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Date Created
                  </label>
                  <input
                    {...register("dateCreated")}
                    type="date"
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  />
                </div>

                {/* Date Published */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Date Published
                  </label>
                  <input
                    {...register("datePublished")}
                    type="date"
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  />
                </div>

                {/* Medium */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Medium
                  </label>
                  <select
                    {...register("medium", { required: "Medium is required" })}
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="">Select Medium</option>
                    <option value="DIGITAL">Digital</option>
                    <option value="PHYSICAL">Physical</option>
                  </select>
                  {errors.medium && (
                    <p className="text-red-500 text-sm">
                      {errors.medium.message}
                    </p>
                  )}
                </div>

                {/* URL Link */}
                <div>
                  <label className="block font-medium text-gray-700">
                    URL Link
                  </label>
                  <input
                    {...register("urlLink")}
                    type="url"
                    className="mt-1 w-full p-1 rounded-md border border-gray-300  bg-gray-50 shadow-sm"
                    placeholder="https://example.com/work"
                  />
                </div>

                {/* Language */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Language
                  </label>
                  <select
                    {...register("language")}
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="">Select Language</option>
                    <option value="English">English</option>
                    <option value="Tamil">Tamil</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                    {/* Add more languages as needed */}
                  </select>
                </div>

                {/* Country of First Publication */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Country of First Publication
                  </label>
                  <select
                    {...register("countryOfFirstPublication")}
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    {/* Add more countries as needed */}
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    {...register("workStatus", {
                      required: "Status is required",
                    })}
                    defaultValue="PENDING"
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="PENDING">Pending</option>
                    <option value="REGISTERED">Registered</option>
                    <option value="REJECTED">Rejected</option>
                  </select>
                  {errors.workStatus && (
                    <p className="text-red-500 text-sm">
                      {errors.workStatus.message}
                    </p>
                  )}
                </div>

                {/* Submitted By */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Submitted By
                  </label>
                  <input
                    type="text"
                    value="Current User Name" // Replace with actual user context if available
                    readOnly
                    className="mt-1 w-full p-1 rounded-md border border-gray-300  bg-gray-50 shadow-sm cursor-not-allowed"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="py-2 px-6 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit(nextStep)}
                  className="py-2 px-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* Step 3: Copyright Application */}
          {step === 3 && (
            <>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Copyright Application Form
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Applicant (User) */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Applicant (User)
                  </label>
                  <select
                    {...register("copyrightUser", {
                      required: "Applicant is required",
                    })}
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="">Select User</option>
                    <option value="User1">User1</option>
                    <option value="User2">User2</option>
                    <option value="User3">User3</option>
                    {/* Replace with dynamic users */}
                  </select>
                  {errors.copyrightUser && (
                    <p className="text-red-500 text-sm">
                      {errors.copyrightUser.message}
                    </p>
                  )}
                </div>

                {/* Work */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Work
                  </label>
                  <select
                    {...register("copyrightWork", {
                      required: "Work is required",
                    })}
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="">Select Work</option>
                    <option value="Work1">Work1</option>
                    <option value="Work2">Work2</option>
                    <option value="Work3">Work3</option>
                    {/* Replace with dynamic works */}
                  </select>
                  {errors.copyrightWork && (
                    <p className="text-red-500 text-sm">
                      {errors.copyrightWork.message}
                    </p>
                  )}
                </div>

                {/* Submission Date */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Submission Date
                  </label>
                  <input
                    type="text"
                    value={new Date().toLocaleDateString("en-GB")} // dd/mm/yyyy
                    readOnly
                    className="mt-1 w-full p-1 rounded-md border border-gray-300  bg-gray-50 shadow-sm"
                  />
                </div>

                {/* Approval Date */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Approval Date
                  </label>
                  <input
                    {...register("approvalDate")}
                    type="date"
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    {...register("copyrightStatus", {
                      required: "Status is required",
                    })}
                    defaultValue="PENDING"
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    REJECTED
                    <option value="PENDING">Pending</option>
                    <option value="APPROVED">Approved</option>
                    <option value="REJECTED">Rejected</option>
                  </select>
                  {errors.copyrightStatus && (
                    <p className="text-red-500 text-sm">
                      {errors.copyrightStatus.message}
                    </p>
                  )}
                </div>

                {/* Comments */}
                <div className="sm:col-span-2">
                  <label className="block font-medium text-gray-700">
                    Comments
                  </label>
                  <textarea
                    {...register("comments")}
                    className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                    placeholder="Enter any additional comments here..."
                    rows="3"
                  ></textarea>
                </div>

                {/* Expiration Date */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Expiration Date
                  </label>
                  <input
                    {...register("expirationDate")}
                    type="date"
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  />
                </div>

                {/* Renewal Status */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Renewal Status
                  </label>
                  <select
                    {...register("renewalStatus")}
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="">Select Renewal Status</option>
                    <option value="ACTIVE">Active</option>
                    <option value="EXPIRED">Expired</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="py-2 px-6 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit(nextStep)}
                  className="py-2 px-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* Step 4: Ownership / Rights Holder */}
          {step === 4 && (
            <>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Ownership / Rights Holder Form
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Work */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Work
                  </label>
                  <select
                    {...register("ownershipWork", {
                      required: "Work is required",
                    })}
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="">Select Work</option>
                    <option value="Work1">Work1</option>
                    <option value="Work2">Work2</option>
                    <option value="Work3">Work3</option>
                    {/* Replace with dynamic works */}
                  </select>
                  {errors.ownershipWork && (
                    <p className="text-red-500 text-sm">
                      {errors.ownershipWork.message}
                    </p>
                  )}
                </div>

                {/* Owner (User) */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Owner (User)
                  </label>
                  <select
                    {...register("ownershipUser", {
                      required: "Owner is required",
                    })}
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="">Select User</option>
                    <option value="User1">User1</option>
                    <option value="User2">User2</option>
                    <option value="User3">User3</option>
                    {/* Replace with dynamic users */}
                  </select>
                  {errors.ownershipUser && (
                    <p className="text-red-500 text-sm">
                      {errors.ownershipUser.message}
                    </p>
                  )}
                </div>

                {/* Ownership Percentage */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Ownership Percentage
                  </label>
                  <input
                    {...register("ownershipPercentage", {
                      required: "Ownership Percentage is required",
                      validate: (value) =>
                        (value > 0 && value <= 100) ||
                        "Percentage must be between 0 and 100",
                    })}
                    type="number"
                    step="0.01"
                    className="mt-1 w-full p-1 rounded-md border border-gray-300  bg-gray-50 shadow-sm"
                    placeholder="50"
                  />
                  {errors.ownershipPercentage && (
                    <p className="text-red-500 text-sm">
                      {errors.ownershipPercentage.message}
                    </p>
                  )}
                </div>

                {/* Date Acquired */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Date Acquired
                  </label>
                  <input
                    {...register("dateAcquired", {
                      required: "Date Acquired is required",
                    })}
                    type="date"
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  />
                  {errors.dateAcquired && (
                    <p className="text-red-500 text-sm">
                      {errors.dateAcquired.message}
                    </p>
                  )}
                </div>

                {/* Valid Till */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Valid Till
                  </label>
                  <input
                    {...register("validTill")}
                    type="date"
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  />
                </div>

                {/* Rights Type */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Rights Type
                  </label>
                  <select
                    {...register("rightsType", {
                      required: "Rights Type is required",
                    })}
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="">Select Rights Type</option>
                    <option value="REPRODUCTION">Reproduction</option>
                    <option value="DISTRIBUTION">Distribution</option>
                    <option value="PERFORMANCE">Performance</option>
                    <option value="OTHER">Other</option>
                  </select>
                  {errors.rightsType && (
                    <p className="text-red-500 text-sm">
                      {errors.rightsType.message}
                    </p>
                  )}
                </div>

                {/* Transfer Status */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Transfer Status
                  </label>
                  <select
                    {...register("transferStatus", {
                      required: "Transfer Status is required",
                    })}
                    defaultValue="Active"
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="ACTIVE">Active</option>
                    <option value="TRANSFERRED">Transferred</option>
                    <option value="EXPIRED">Expired</option>
                  </select>
                  {errors.transferStatus && (
                    <p className="text-red-500 text-sm">
                      {errors.transferStatus.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="py-2 px-6 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit(nextStep)}
                  className="py-2 px-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* Step 5: Certification / License */}
          {step === 5 && (
            <>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Certification / License Form
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Application */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Application
                  </label>
                  <select
                    {...register("certificationApplication", {
                      required: "Application is required",
                    })}
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="">Select Application</option>
                    <option value="Application1">Application1</option>
                    <option value="Application2">Application2</option>
                    <option value="Application3">Application3</option>
                    {/* Replace with dynamic applications */}
                  </select>
                  {errors.certificationApplication && (
                    <p className="text-red-500 text-sm">
                      {errors.certificationApplication.message}
                    </p>
                  )}
                </div>

                {/* Issued Date */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Issued Date
                  </label>
                  <input
                    type="text"
                    value={new Date().toLocaleDateString("en-GB")} // dd/mm/yyyy
                    readOnly
                    className="mt-1 w-full p-1 rounded-md border border-gray-300  bg-gray-50 shadow-sm cursor-not-allowed"
                  />
                </div>

                {/* Expiration Date */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Expiration Date
                  </label>
                  <input
                    {...register("certificationExpirationDate")}
                    type="date"
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  />
                </div>

                {/* Certification Type */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Certification Type
                  </label>
                  <select
                    {...register("certificationType", {
                      required: "Certification Type is required",
                    })}
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="">Select Certification Type</option>
                    <option value="CERTIFICATE_OF_REGISTRATION">
                      Certificate of Registration
                    </option>
                    <option value="OWNERSHIP_TRANSFER_CERTIFICATE">
                      Ownership Transfer Certificate
                    </option>
                    <option value="OTHER">Other</option>
                  </select>
                  {errors.certificationType && (
                    <p className="text-red-500 text-sm">
                      {errors.certificationType.message}
                    </p>
                  )}
                </div>

                {/* Certification File */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Certification File
                  </label>
                  <input
                    {...register("certificationFile")}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="mt-1 w-full p-1 rounded-md border border-gray-300  bg-gray-50 shadow-sm"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    {...register("certificationStatus", {
                      required: "Status is required",
                    })}
                    defaultValue="Active"
                    className="mt-1 w-full p-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 shadow-sm"
                  >
                    <option value="ACTIVE">Active</option>
                    <option value="EXPIRED">Expired</option>
                    <option value="REVOKED">Revoked</option>
                  </select>
                  {errors.certificationStatus && (
                    <p className="text-red-500 text-sm">
                      {errors.certificationStatus.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="py-2 px-6 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Registration;
