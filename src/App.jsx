
import { Provider, useDispatch } from 'react-redux'
import './App.css'
import Router from './router'
import appStore from './utils/appStore'

function App() {
  console.log('app');

  return (
    <>
    <Provider store={appStore}>
      <Router/>
     </Provider>
    </>
  )
}

export default App
