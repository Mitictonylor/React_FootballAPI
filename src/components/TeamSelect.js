import React from 'react'

const TeamSelect = (props) =>{
  const teamOptions = props.teams.map((team, index)=>{
    return <option value={team.name} key = {index}>{team.name}</option>
  })

function handleSelection(event){
  props.onSelect(event.target.value)
}

return(
<select id="team-select" onChange ={handleSelection}>
<option>Choose a team...</option>
    {teamOptions}
</select>

)
}
export default TeamSelect
