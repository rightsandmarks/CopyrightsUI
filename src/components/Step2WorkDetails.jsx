import React from 'react'
import { useForm } from "react-hook-form";

const Step2WorkDetails = ({ formData, onChange, onNext, onPrev }) => {
      const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: formData,
      });
    
      const onSubmit = (data) => {
        onChange(data, "work");
        onNext(data, "work");
      };
    
      return (
        <>
       
        <form onSubmit={handleSubmit(onSubmit)} noValidate className='p-8 space-y-6'>
        <h2 className="text-lg font-semibold text-gray-700 mb-4 ">Work Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {/* Title */}
            <div>
              <label className="block font-medium text-gray-700">Title</label>
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="The Great Symphony"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>
  
            {/* Description */}
            <div>
              <label className="block font-medium text-gray-700">Description</label>
              <textarea
                {...register("description")}
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Brief description of the work..."
                rows="3"
              ></textarea>
            </div>
  
            {/* Type */}
            <div>
              <label className="block font-medium text-gray-700">Type</label>
              <select
                {...register("type", { required: "Type is required" })}
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select Type</option>
                <option value="Literary">Literary</option>
                <option value="Musical">Musical</option>
                <option value="Visual">Visual</option>
                <option value="Other">Other</option>
              </select>
              {errors.type && (
                <p className="text-red-500 text-sm">{errors.type.message}</p>
              )}
            </div>
  
            {/* Date Created */}
            <div>
              <label className="block font-medium text-gray-700">Date Created</label>
              <input
                {...register("dateCreated")}
                type="date"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
  
            {/* Date Published */}
            <div>
              <label className="block font-medium text-gray-700">Date Published</label>
              <input
                {...register("datePublished")}
                type="date"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
  
            {/* Medium */}
            <div>
              <label className="block font-medium text-gray-700">Medium</label>
              <select
                {...register("medium", { required: "Medium is required" })}
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select Medium</option>
                <option value="Digital">Digital</option>
                <option value="Physical">Physical</option>
              </select>
              {errors.medium && (
                <p className="text-red-500 text-sm">{errors.medium.message}</p>
              )}
            </div>
  
            {/* URL Link */}
            <div>
              <label className="block font-medium text-gray-700">URL Link</label>
              <input
                {...register("urlLink", {
                  pattern: {
                    value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                    message: "Enter a valid URL",
                  },
                })}
                type="url"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="https://example.com/work"
              />
              {errors.urlLink && (
                <p className="text-red-500 text-sm">{errors.urlLink.message}</p>
              )}
            </div>
  
            {/* Language */}
            <div>
              <label className="block font-medium text-gray-700">Language</label>
              <select
                {...register("language")}
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Tamil">Tamil</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
  
            {/* Country of First Publication */}
            <div>
              <label className="block font-medium text-gray-700">Country of First Publication</label>
              <select
                {...register("countryOfFirstPublication")}
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
  
            {/* Status */}
            <div>
              <label className="block font-medium text-gray-700">Status</label>
              <select
                {...register("status", { required: "Status is required" })}
                defaultValue="Pending"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="Pending">Pending</option>
                <option value="Registered">Registered</option>
                <option value="Rejected">Rejected</option>
              </select>
              {errors.workStatus && (
                <p className="text-red-500 text-sm">{errors.workStatus.message}</p>
              )}
            </div>
  
            {/* Submitted By */}
            <div>
              <label className="block font-medium text-gray-700">Submitted By</label>
              <input
                type="text"
                value="Current User Name" // Replace with actual user context if available
                readOnly
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
              />
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
    

export default Step2WorkDetails