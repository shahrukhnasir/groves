import Footer from "../layout/footer/Footer";
import Navbar from "../layout/headerPrimary/Navbar";

const MainLayout = ({ children }) => {

  return (
    <> <Navbar />
          <main>{children}</main>
        
          <Footer />
       
    
    </>
  );
};
export default MainLayout;
