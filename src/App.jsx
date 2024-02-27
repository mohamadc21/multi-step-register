import blur from './assets/blur-radial.svg';
import Register from "./Register"

function App() {
  return (
    <div className="bg-[#121826] flex items-center justify-center min-h-screen text-white relative overflow-hidden flex-col p-4">

      <div className={`absolute -top-[170px] -left-48 w-[400px]`}>
        <img src={blur} className="w-full" />
      </div>

      <div className={`absolute -bottom-[170px] -right-48 w-[400px]`}>
        <img src={blur} className="w-full" />
      </div>

      <Register />

    </div>
  )
}

export default App