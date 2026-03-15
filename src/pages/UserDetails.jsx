import { useParams } from 'react-router-dom'

function UserDetails() {
  const { username } = useParams()

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {username}</p>
    </div>
  )
}

export default UserDetails
