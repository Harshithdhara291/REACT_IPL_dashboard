import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, id, teamImageUrl} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="item-container">
        <img className="item-image" src={teamImageUrl} alt={name} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
