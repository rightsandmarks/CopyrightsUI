import React from "react";
import { useForm } from "react-hook-form";

const Step1UserDetails = ({ formData, onChange, onNext }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    onChange(data, "user");
    onNext(data, "user");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 space-y-6">
      {/* Full Name */}
      <div>
        <label className="block font-medium text-gray-700">Full Name</label>
        <input
          {...register("name", { required: "Full Name is required" })}
          type="text"
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block font-medium text-gray-700">Email Address</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: "Enter a valid email address",
            },
          })}
          type="email"
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="john.doe@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block font-medium text-gray-700">Phone Number</label>
        <input
          {...register("phoneNumber", {
            pattern: {
              value: /^[+]?[0-9]{1,4}?[ ]?([0-9]{10})$/,
              message: "Enter a valid phone number",
            },
          })}
          type="tel"
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="+1 234 567 8901"
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>

      {/* Address */}
      <div>
        <label className="block font-medium text-gray-700">Billing Address</label>
        <textarea
          {...register("billAddress", { required: "Address is required" })}
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="123 Main St, City, Country"
          rows="3"
        ></textarea>
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>
      {/* Address */}
      <div>
        <label className="block font-medium text-gray-700">Contact Address</label>
        <textarea
          {...register("contAddress", { required: "Contact Address is required" })}
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="123 Main St, City, Country"
          rows="3"
        ></textarea>
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>

      {/* Nationality */}
      <div>
        <label className="block font-medium text-gray-700">Nationality</label>
        <select
          {...register("nationality", { required: "Nationality is required" })}
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Select your nationality</option>
          <option value="Indian">Indian</option>
          <option value="American">American</option>
          <option value="British">British</option>
          <option value="Canadian">Canadian</option>
          <option value="Australian">Australian</option>
        </select>
        {errors.nationality && (
          <p className="text-red-500 text-sm">{errors.nationality.message}</p>
        )}
      </div>

      {/* Date of Birth */}
      <div>
        <label className="block font-medium text-gray-700">Date of Birth</label>
        <input
          {...register("dateOfBirth", { required: "Date of Birth is required" })}
          type="date"
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.dateOfBirth && (
          <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>
        )}
      </div>

      {/* Identification Document */}
      <div>
        <label className="block font-medium text-gray-700">Identification Document</label>
        <select
          {...register("identificationDocument", {
            required: "Identification Document is required",
          })}
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Select document type</option>
          <option value="ID">ID</option>
          <option value="Passport">Passport</option>
          <option value="Driver's License">Driver's License</option>
        </select>
        {errors.identificationDocument && (
          <p className="text-red-500 text-sm">{errors.identificationDocument.message}</p>
        )}
      </div>

      {/* Role */}
      <div className="sm:col-span-2">
        <label className="block font-medium text-gray-700">Role</label>
        <div className="flex space-x-4 mt-2">
          <label className="flex items-center space-x-2">
            <input
              {...register("role", { required: "Role is required" })}
              type="radio"
              value="Individual"
              className="focus:ring-indigo-500 text-indigo-600 border-gray-300"
            />
            <span>Individual</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              {...register("role", { required: "Role is required" })}
              type="radio"
              value="Organization"
              className="focus:ring-indigo-500 text-indigo-600 border-gray-300"
            />
            <span>Organization</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              {...register("role", { required: "Role is required" })}
              type="radio"
              value="Authorized Agent"
              className="focus:ring-indigo-500 text-indigo-600 border-gray-300"
            />
            <span>Authorized Agent</span>
          </label>
        </div>
        {errors.role && (
          <p className="text-red-500 text-sm">{errors.role.message}</p>
        )}
      </div>

      {/* Registration Date */}
      <div>
        <label className="block font-medium text-gray-700">Registration Date</label>
        <input
          type="text"
          value={new Date().toLocaleDateString("en-GB")} // dd/mm/yyyy
          readOnly
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
        />
      </div>

      {/* Submit Button */}
      <div className="sm:col-span-2 mt-4">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step1UserDetails;
