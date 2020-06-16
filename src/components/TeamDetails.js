import React from 'react'

const TeamDetails = (props) => {
if(!props.team) return null

  return(
    <div>
<h2>Name: {props.team.name}</h2>
<p>Venue: {props.team.venue}</p>
<p>Club Colors: {props.team.clubColors}</p>
<p>Founded: {props.team.founded}</p>


    </div>

  )
}
export default TeamDetails
