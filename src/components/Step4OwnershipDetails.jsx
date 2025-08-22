import React from "react";
import { useForm } from "react-hook-form";

const Step4OwnershipDetails = ({ formData, onChange, onNext, onPrev }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    onChange(data, "Ownership");
    onNext(data, "Ownership");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="p-8 space-y-6"
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Ownership / Rights Holder Form
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              {...register("user", { required: "Owner is required" })}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select Rights Type</option>
              <option value="Reproduction">Reproduction</option>
              <option value="Distribution">Distribution</option>
              <option value="Performance">Performance</option>
              <option value="Other">Other</option>
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
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="Active">Active</option>
              <option value="Transferred">Transferred</option>
              <option value="Expired">Expired</option>
            </select>
            {errors.transferStatus && (
              <p className="text-red-500 text-sm">
                {errors.transferStatus.message}
              </p>
            )}
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

export default Step4OwnershipDetails;
