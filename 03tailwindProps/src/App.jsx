import './App.css'
import Cards from './components/Card'

function App() {

  let obj = {
    Rollno: 1,
    class: "Second"
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>BOSSSSSSSSSSS is BACK</h1>
      <Cards un="Queen" bt="Try it"  />
      <Cards un="Heroien" bt="Go it" />
    </>
  )
}

export default App
