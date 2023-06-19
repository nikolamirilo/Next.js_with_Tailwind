"use client";
import Modal from "@/components/Modal";
import React, { useState } from "react";

const AdminPanel: React.FC = ({ children }: { children: React.ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const handleSubmit = async () => {
    const passCode = document?.getElementById("passCode") as HTMLInputElement;
    if (passCode && passCode.value == "2023?em#") {
      setIsAuthorized(true);
    }
  };
  return (
    <main className="min-h-screen">
      {isAuthorized === true ? children : <Modal handleSubmit={handleSubmit} />}
    </main>
  );
};
export default AdminPanel;