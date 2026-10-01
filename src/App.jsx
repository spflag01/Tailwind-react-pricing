
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/Daisynav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/Pricingoption/PricingOptions'
import Resultchart from './components/resultsChart/Resultchart'
import axios from 'axios'
import marksChart from './components/mergechart/marksChart'

const PricingPromise=fetch('pricingData.json').then(res=>res.json());

const marksPromise=axios.get('marksData.json')
function App() {


  return (
    <>
    <header>
      <Navbar></Navbar>
     {/* <DaisyNav></DaisyNav> */}
     </header>   
     <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
      </Suspense>
      
         <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <marksChart marksPromise={marksPromise}></marksChart>
          </Suspense>   
    
      <Resultchart></Resultchart>
        </main> 
       
      

     
    </>
  )
}

export default App
