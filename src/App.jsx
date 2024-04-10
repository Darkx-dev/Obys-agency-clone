import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
function App() {
  return (
    <>
      <Loader />
      <main className="bg-mainBlack min-h-screen" id="main">
        <Navbar />
        <Section1 />
      </main>
    </>
  );
}

export default App;
