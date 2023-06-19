"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const Modal = dynamic(() => import("@/components/Modal"), { ssr: false });
interface AdminPanelProps {
  children: React.ReactNode;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const handleSubmit = async () => {
    const passCode = document?.getElementById("passCode") as HTMLInputElement;
    if (passCode && passCode.value == "#fazon2023") {
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
