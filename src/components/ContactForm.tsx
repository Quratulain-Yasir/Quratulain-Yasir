import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // you can send this to backend / email service
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl"
    >
      {/* Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full border border-gray-300 p-2 rounded-md"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full border border-gray-300 p-2 rounded-md"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Message */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          className="w-full border border-gray-300 p-2 rounded-md"
          rows="4"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Send
      </button>
    </form>
  );
}
