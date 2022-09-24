import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const formattedData = {
    competingTeam: latestMatchDetails.competing_team,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    result: latestMatchDetails.result,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    umpires: latestMatchDetails.umpires,
  }

  return (
    <div className="latest-cont">
      <div>
        <p className="para">{formattedData.competingTeam}</p>
        <p className="para">{formattedData.date}</p>
        <p className="para">{formattedData.venue}</p>
        <p className="para">{formattedData.result}</p>
      </div>
      <img
        src={formattedData.competingTeamLogo}
        alt={`latest match ${formattedData.competingTeam}`}
        className="logo"
      />
      <div>
        <p className="para">First Innings</p>
        <p className="para">{formattedData.firstInnings}</p>
        <p className="para">Second Innings</p>
        <p className="para">{formattedData.secondInnings}</p>
        <p className="para">Man Of The Match</p>
        <p className="para">{formattedData.manOfTheMatch}</p>
        <p className="para">Umpires</p>
        <p className="para">{formattedData.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
