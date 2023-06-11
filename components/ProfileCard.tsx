import { useState, useEffect } from 'react'
import { Card, Button, Col , Row, Container} from "react-bootstrap"
// import svg from "../src/assets/react.svg"
import { getProfiles } from '../src/Api'
import { Profile } from '../src/models/Profile'
import  { Link } from "react-router-dom"

const ProfileCard = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [profiles, setProfiles] = useState<Profile[]>([])

    useEffect(() => {
        getProfiles().then(data => {
            setProfiles(data)
            console.log(data)
            setIsLoading(false)
        })
    }, [])


  return (
    <Row>
        <h1 style={{ color: "blue", margin: "50px 0" }} >Profile Cards</h1>
        
        {
            isLoading ? 
                <Container>
                    <h2>Loading....</h2>
                </Container> :

                <>
                {
                    profiles.map((profile, index) => (
                        <Col key={index}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={profile.avatar} />
                            <Card.Body>
                                <Card.Title> {profile.first_name + " " + profile.last_name} </Card.Title>
                                <Card.Text>
                                    { profile.employment.title + " in " + profile.address.state  + ", "  + profile.address.country }.
                                </Card.Text>
                                <Link to={`/profile/${profile.id}`} state={profile}>
                                <Button variant="primary">View Profile</Button>
                                </Link>
                            </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
                <Col>
                    <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="https://drive.google.com/file/d/1TxzKsce8wKAQLkLs3fIVcfHBO4QY17UE/preview" /> */}
                    <iframe src="https://drive.google.com/file/d/1TxzKsce8wKAQLkLs3fIVcfHBO4QY17UE/preview" allow="autoplay"></iframe>
                    <Card.Body>
                        <Card.Title>Oputa Olivia</Card.Title>
                        <Card.Text>
                        Software Engineer in Missouri, United States.
                        </Card.Text>
                        <Card.Text>
                        Birthday: 12th September.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                </>
        }

    </Row>
  )
}

export default ProfileCard