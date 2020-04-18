import React from 'react'
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa"

function Instructions () {
   return (
      <div>
         INSTRUCTIONS
      </div>
   )
}

export default class Battle extends React.Component {

   render() {
      return (
         <React.Fragment >
            <Instructions />
         </React.Fragment>
      )
   }
}