import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;

    try {
      const formData = new FormData(form);
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      form.reset();
      window.alert("Submit Successful");
    } catch (error) {
      console.error("Form submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="relative isolate px-4 sm:px-6 md:px-10 lg:px-16 py-20 sm:py-28"
    >
      {/* Background blob */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[30rem] sm:w-[40rem] md:w-[50rem] max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#22d3ee] to-[#3b82f6] opacity-20"
        />
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#31A3F2]">
          Contact Me
        </h2>
        <p className="mt-3 text-sm sm:text-base md:text-lg text-[#869FBA] px-2">
          Let's discuss your next project and build something impactful
          together.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-12 sm:mt-16 max-w-xl rounded-2xl border border-cyan-300/20 bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-[0_16px_35px_rgba(2,6,23,0.35)]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-100">
              First name
            </label>
            <input
              name="name"
              type="text"
              required
              className="mt-2 w-full border border-cyan-300/25 rounded-md bg-slate-950/70 px-3 py-2 text-gray-100 focus:outline-cyan-400"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-100">
              Last name
            </label>
            <input
              name="last-name"
              type="text"
              className="mt-2 w-full border border-cyan-300/25 rounded-md bg-slate-950/70 px-3 py-2 text-gray-100 focus:outline-cyan-400"
            />
          </div>

          {/* Company */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-100">
              Company
            </label>
            <input
              name="company"
              type="text"
              className="mt-2 w-full border border-cyan-300/25 rounded-md bg-slate-950/70 px-3 py-2 text-gray-100 focus:outline-cyan-400"
            />
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-100">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full border border-cyan-300/25 rounded-md bg-slate-950/70 px-3 py-2 text-gray-100 focus:outline-cyan-400"
            />
          </div>

          {/* Phone */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-100">
              Phone number
            </label>

            <div className="mt-2 flex flex-col sm:flex-row gap-2">
              <div className="relative sm:w-28">
                <select className="w-full border border-cyan-300/25 bg-slate-950/70 text-gray-100 rounded-md px-3 py-2">
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon className="absolute right-2 top-2.5 w-5 h-5 text-gray-300" />
              </div>

              <input
                name="phone-number"
                type="text"
                placeholder="123-456-7890"
                className="w-full border border-cyan-300/25 bg-slate-950/70 text-gray-100 rounded-md px-3 py-2"
              />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-100">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-2 w-full border border-cyan-300/25 rounded-md bg-slate-950/70 px-3 py-2 text-gray-100 focus:outline-cyan-400"
            />
          </div>
        </div>

       
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-8 w-full rounded-lg border border-cyan-300/45 bg-cyan-500/10 py-3 text-sm font-semibold text-gray-100 hover:bg-cyan-500/20 transition"
        >
          {isSubmitting ? "Submitting..." : "Let's talk"}
        </button>
      </form>
    </div>
  );
}