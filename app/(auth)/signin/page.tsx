"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const [parcelNo, setParcelNo] = useState("");

  const handleSignIn = (event: any) => {
    event.preventDefault();
    if (parcelNo === "K4_6507/18") {
      router.push("/Home");
    } else {
      alert("Invalid Parcel No");
    }
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form onSubmit={handleSignIn}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="parcelNo"
                  >
                    Parcel No
                  </label>
                  <input
                    id="parcelNo"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="No. K4_689"
                    value={parcelNo}
                    onChange={(e) => setParcelNo(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    type="submit"
                    className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
