import './index.css'

const MatchCard = props => {
  const {each} = props
  const formattedData = {
    competingTeam: each.competing_team,
    result: each.result,
    competingTeamLogo: each.competing_team_logo,
    matchStatus: each.match_status,
  }

  return (
    <li className="match-card">
      <img
        src={formattedData.competingTeamLogo}
        alt={`competing team ${formattedData.competingTeam}`}
        className="card-logo"
      />
      <p className="head">{formattedData.competingTeam}</p>
      <p className="head">{formattedData.result}</p>
      <p className="head">{formattedData.matchStatus}</p>
    </li>
  )
}

export default MatchCard
