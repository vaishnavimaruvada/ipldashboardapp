// Write your code here
// Write your code here
import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
    const mat = 'competing team ' + competingTeam
    return (
      <li className={`match-card ${matchStatus}`}>
        <img className="match-card-logo" src={competingTeamLogo} alt={mat} />
        <p className="match-card-name">{competingTeam}</p>
        <p className="match-card-result">{result}</p>
        <p className="match-status">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
