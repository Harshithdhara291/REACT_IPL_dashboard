import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsData: []}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsData: formattedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state

    console.log(teamsData)

    return (
      <div className="Home-container">
        <div className="ipl-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-head">IPL DASHBOARD</h1>
        </div>
        <div className="cont">
          {isLoading ? (
            <div>
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamsData.map(item => <TeamCard teamData={item} key={item.id} />)
          )}
        </div>
      </div>
    )
  }
}

export default Home
