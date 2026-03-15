import { useParams } from 'react-router-dom'

function TrekDetails() {
  const { id } = useParams()

  return (
    <div>
      <h1>Trek Details</h1>
      <p>Trek ID: {id}</p>
    </div>
  )
}

export default TrekDetails
