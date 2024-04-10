import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
function App() {
  return (
    <main className="bg-mainBlack min-h-screen" id="main">
      <Loader/>
      <Navbar/>
    </main>
  )
}

export default App