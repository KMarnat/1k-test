import Banner from "./components/Banner/Banner";
import Comment from "./components/Comment/Comment";
import Footer from "./components/Footer/Footer";
import Packets from "./components/Packets/Packets";

const App = () => {
  return (
    <>
      <main>
        <Banner />
        <Packets />
        <Comment />
      </main>
      <Footer />
    </>
  );
};

export default App;
