import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'


export default class App extends React.Component {
   render () {
      return (
         <div>
            <div>
               <Battle />
            </div>
         </div>
      )
   }
}

ReactDOM.render(
   <App />,
   document.getElementById('app')
)