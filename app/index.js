import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'


export default class App extends React.Component {
   render () {
      const name = 'Stephen'
      return (
         <div>
            <h1>Hello {name}!</h1>
            <div>
               <Popular />
            </div>
         </div>
      )
   }
}

ReactDOM.render(
   <App />,
   document.getElementById('app')
)

