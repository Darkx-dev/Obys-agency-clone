import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
function App() {

  return (
    <>
      <Loader />
      <main className="bg-mainBlack smooth-scroll min-h-screen w-full" id="main">
        <Navbar />
        <Sections/>
      </main>
    </>
  );
}

export default App;
