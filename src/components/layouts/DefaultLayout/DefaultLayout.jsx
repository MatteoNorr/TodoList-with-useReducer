import Navbar from "@/components/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DefaultLayout;
