import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamData: {}, isLoading: true, team: ''}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    console.log(id)
    this.setState({teamData: formattedData, isLoading: false, team: id})
  }
  /* <LatestMatch latestMatchDetails={latestMatchDetails} />
        <MatchCard recentMatches={recentMatches} /> */

  renderTeamDetails = () => {
    const {teamData, team} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData
    return (
      <div className={`team-info-${team}`}>
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <div>
          <h1 className="team-head">Latest Matches</h1>
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
        <ul className="match-cards-cont">
          {recentMatches.map(each => (
            <MatchCard each={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading, team} = this.state

    return (
      <div className={`team-info-${team}`}>
        {isLoading ? (
          <div className="cont">
            <Loader type="Oval" color="#000000" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
