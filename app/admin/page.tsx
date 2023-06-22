import Actions from "@/components/Actions";
import AdminPanel from "@/components/AdminPanel";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import React from "react";
const Footer = dynamic(() => import("@/components/Footer"));

const Admin: React.FC = () => {
  return (
    <div id="admin" className="flex flex-col justify-center items-center">
      <Navbar />
      <AdminPanel>
        <Actions title="Sve Akcije prijavljene od korisnika" actionType="actions" type="admin" />
      </AdminPanel>
      <Footer />
    </div>
  );
};
export default Admin;
