import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
const Step5CertificationDetails = ({
  formData,
  onChange,
  onSubmit,
  onPrev,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: formData,
  });

  useEffect(() => {
    reset(formData);
  }, [formData, reset]);
  const handleFormSubmit = (data) => {
    onChange(data, "Certification");
    onSubmit(data, "Certification"); // Final submission of the data
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
        className="p-8 space-y-6"
      >
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
              {...register("application", {
                required: "Application is required",
              })}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
              {...register("issuedDate")}
              type="text"
              value={new Date().toLocaleDateString("en-GB")} // dd/mm/yyyy
              readOnly
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Expiration Date */}
          <div>
            <label className="block font-medium text-gray-700">
              Expiration Date
            </label>
            <input
              {...register("expirationDate", {
                required: "Expiration Date is required",
              })}
              type="date"
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.certificationExpirationDate && (
              <p className="text-red-500 text-sm">
                {errors.certificationExpirationDate.message}
              </p>
            )}
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
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select Certification Type</option>
              <option value="Certificate of Registration">
                Certificate of Registration
              </option>
              <option value="Ownership Transfer Certificate">
                Ownership Transfer Certificate
              </option>
              <option value="Other">Other</option>
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
              {...register("certificationFile", {
                required: "Certification File is required",
                validate: (value) => value.length > 0 || "Please upload a file",
              })}
              type="file"
              accept=".pdf,.doc,.docx"
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.certificationFile && (
              <p className="text-red-500 text-sm">
                {errors.certificationFile.message}
              </p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block font-medium text-gray-700">Status</label>
            <select
              {...register("certificationStatus", {
                required: "Status is required",
              })}
              defaultValue="Active"
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="Active">Active</option>
              <option value="Expired">Expired</option>
              <option value="Revoked">Revoked</option>
            </select>
            {errors.certificationStatus && (
              <p className="text-red-500 text-sm">
                {errors.certificationStatus.message}
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
            className="py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Step5CertificationDetails;
