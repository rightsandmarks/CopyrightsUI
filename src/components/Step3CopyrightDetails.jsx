import React from "react";
import { useForm } from "react-hook-form";

const Step3CopyrightDetails = ({ formData, onChange, onNext, onPrev }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    onChange(data, "CopyrightApplication");
    onNext(data, "CopyrightApplication");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className='p-8 space-y-6'>
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
              {...register("user", {
                required: "Applicant is required",
              })}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
            <label className="block font-medium text-gray-700">Work</label>
            <select
              {...register("work", { required: "Work is required" })}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
            {...register("submissionDate")}
              type="text"
              value={new Date().toLocaleDateString("en-GB")} // dd/mm/yyyy
              readOnly
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
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
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block font-medium text-gray-700">Status</label>
            <select
              {...register("status", {
                required: "Status is required",
              })}
              defaultValue="Pending"
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
            {errors.copyrightStatus && (
              <p className="text-red-500 text-sm">
                {errors.copyrightStatus.message}
              </p>
            )}
          </div>

          {/* Comments */}
          <div className="sm:col-span-2">
            <label className="block font-medium text-gray-700">Comments</label>
            <textarea
              {...register("comments")}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* Renewal Status */}
          <div>
            <label className="block font-medium text-gray-700">
              Renewal Status
            </label>
            <select
              {...register("renewalStatus")}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select Renewal Status</option>
              <option value="Active">Active</option>
              <option value="Expired">Expired</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onPrev}
            className="py-2 px-6 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
          >
            Back
          </button>
          <button
            type="submit"
            className="py-2 px-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Step3CopyrightDetails;
