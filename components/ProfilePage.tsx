import { useEffect, useState } from 'react'
import { useLocation, Link } from "react-router-dom"
import { Profile } from '../src/models/Profile'
import { Card, ListGroup  } from "react-bootstrap"

const ProfilePage = () => {

    const location = useLocation()
    const [profile, setProfile] = useState<Profile>()

    useEffect(() => {
        setProfile(location.state)
    }, [])

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ profile ? profile.avatar : undefined} />
      <Card.Body>
        <Card.Title>
        { profile ? profile.first_name + " " + profile.last_name : null}
        </Card.Title>
        <Card.Text>
        { profile ?
        profile.employment.title + " in " + profile.address.state  + ", "  + profile.address.country : null
         }.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Username: { profile ? profile.username : null}</ListGroup.Item>
        <ListGroup.Item>Date of Birth: { profile ? profile.date_of_birth : null}</ListGroup.Item>
        <ListGroup.Item>Email: { profile ? profile.email : null}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link to="/">Home</Link>
      </Card.Body>
    </Card>
  )
}

export default ProfilePage