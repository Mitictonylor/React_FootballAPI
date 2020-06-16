import React, {Component, Fragment} from "react";
import TeamSelect from '../components/TeamSelect.js'

class TeamContainer extends Component{
constructor(props){
  super(props)
    this.state = {
      teams:[],
      selectedTeam: ""

    }
  }

  componentDidMount(){
    const token = "9b41bcd09c2e4c94baad09aedc40bfc4";
    const url = 'http://api.football-data.org/v2/teams';
    fetch(url, { headers: {'X-Auth-Token': token} })
  .then(response => response.json())
  .then(data => this.setState({teams: data.teams}))
  .catch(err => console.error(err));
  }



render(){
  return(
    <TeamSelect teams={this.state.teams}></TeamSelect>
  )
}
}
export default TeamContainer
