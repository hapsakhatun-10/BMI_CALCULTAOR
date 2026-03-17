
import './App.css'

function App() {

  return (
    <>

      <div className='app'>
        <div className="container">
          <h2>BMI Calculator</h2>

          <label>Weight (lbs)</label>
          <input type="number" placeholder="Enter Weight value" />

          <label>Height (in)</label>
          <input type="number" placeholder="Enter height value" />

          <button className="btn submit-btn">
            Submit
          </button>

          <button className="btn reload-btn">
            Reload
          </button>

          <div className="result">
            Your BMI is:

            <p>{ }</p>
          </div>
        </div>
      </div>
    </>
  )

}


export default App
