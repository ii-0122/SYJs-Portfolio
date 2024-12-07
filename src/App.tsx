import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import ContentPage from "./pages/ContentPage";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <ContentPage />
      <Footer />
    </>
  );
}

export default App;
