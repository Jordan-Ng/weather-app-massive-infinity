import Summary from './components/Summary'
import TriHourSummary from './components/TriHourSummary'
import {Route} from 'react-router-dom'
import {GetWeekForecast} from './helper.js'

function App() {
  let apiData = GetWeekForecast()
  let weekForecast = apiData[0]
  let triHourlyForecast = apiData[1]

  return (
    <>
      <Route exact path='/'>
        <Summary weekForecast={weekForecast} triHourlyForecast={triHourlyForecast}/>
      </Route>

      <Route exact path= '/summary/:seconds'>
        <TriHourSummary weekForecast={weekForecast} triHourlyForecast={triHourlyForecast}/>
      </Route>
    </>
  );
}

export default App;
