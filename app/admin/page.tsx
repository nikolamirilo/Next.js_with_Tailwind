"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getData } from "@/lib/actions";
import React, { useState, useEffect } from "react";
import { RiAdminFill } from "react-icons/ri";
const Actions = React.lazy(() => import("@/components/Actions"));

const Admin: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const handleSubmit = async () => {
    const passCode = document?.getElementById("passCode") as HTMLInputElement;
    if (passCode && passCode.value == "2023?em#") {
      setIsAuthorized(true);
    }
  };
  return (
    <div id="admin" className="flex flex-col justify-center items-center">
      <Navbar />
      <main className="min-h-screen">
        {isAuthorized === true ? (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Actions
              title="Akcije prijavljene od strane od strane korisnika"
              actionType="actions"
              type="admin"
            />
          </React.Suspense>
        ) : (
          <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-green-600/30 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10">
                        <RiAdminFill size={30} />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                          className="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Da bi ste pristupili Admin Panelu uneste šifru:
                        </h3>
                        <div className="mt-2">
                          <input
                            type="password"
                            id="passCode"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 flex justify-center items-center">
                    <button
                      type="button"
                      className="w-36 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                      onClick={handleSubmit}
                    >
                      Potvrdi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
export default Admin;
