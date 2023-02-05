import Banner from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Servicio from "./components/service";


function App() {
  return (
    <div>
      <Navbar/>
      <Header />
      <Servicio />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
