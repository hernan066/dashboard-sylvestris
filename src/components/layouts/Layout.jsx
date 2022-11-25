import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="admin__dashboard">
      <Sidebar />
      <section className="home-section">
        <Navbar />
        {children}
      </section>
    </main>
  );
};

export default Layout;
