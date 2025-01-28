import { CreditCard, Heart } from "lucide-react";

const SectionEnrollment = () => {
  return (
    <div className="bg-gray-100 py-24 sm:py-32 text-gray-800 text-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-5xl font-semibold text-gray-800">How to Join</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Enroll in the program by making a payment or contributing through a donation. Your support helps build a
          thriving AI learning community.
        </p>

        {/* Payment Options */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8">
          {/* Pay Now Card */}
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex justify-center">
              <CreditCard className="w-12 h-12 text-indigo-500" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">Enrollment Payment</h3>
            <p className="mt-2 text-gray-600">
              Secure your spot in the program and start building AI-powered applications.
            </p>
            <button className="mt-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transition">
              Pay Now
            </button>
          </div>

          {/* Donate Card */}
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex justify-center">
              <Heart className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">Support the Mission</h3>
            <p className="mt-2 text-gray-600">
              Help others get access to AI education by making a donation.
            </p>
            <button className="mt-6 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg transition">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEnrollment;
