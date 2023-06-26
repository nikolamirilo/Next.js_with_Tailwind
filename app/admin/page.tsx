import AdminPanel from "@/components/AdminPanel";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import React from "react";
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Actions = dynamic(() => import("@/components/Actions"), {
  loading: () => <Loader />,
});

const Admin: React.FC = () => {
  return (
    <div id="admin" className="flex flex-col justify-center items-center animate-fate">
      <Navbar />
      <AdminPanel>
        <Actions title="Sve Akcije prijavljene od korisnika" actionType="actions" type="admin" />
      </AdminPanel>
      <Footer />
    </div>
  );
};
export default Admin;
