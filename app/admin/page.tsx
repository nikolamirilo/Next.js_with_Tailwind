import Actions from "@/components/Actions";
import AdminPanel from "@/components/AdminPanel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Admin: React.FC = () => {
  return (
    <div id="admin" className="flex flex-col justify-center items-center py-12">
      <Navbar />
      <AdminPanel>
        <Actions
          title="Akcije prijavljene od strane od strane korisnika"
          actionType="actions"
          type="admin"
        />
      </AdminPanel>
      <Footer />
    </div>
  );
};
export default Admin;
