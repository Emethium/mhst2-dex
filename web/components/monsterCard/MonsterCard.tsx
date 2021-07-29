import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Media, Row } from 'reactstrap'
import { Monster } from '../../domain'

export default function MonsterCard(props: Monster) {
  return (
      <Card id={props.name} key={props.id}>
        <CardBody>
          <Row>
            <Col>
              <Media left href="#">
                <Media src={props.eggURL} alt={`${props.name} egg design image`} />
              </Media>
            </Col>
            <Col>
              <Row>
                <Media left href="#">
                  <Media src={props.portraitURL} alt={`${props.name} portrait image`}/>
                </Media>
                <CardTitle tag="h5">{props.name}</CardTitle>
              </Row>
              <Row>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.type}</CardSubtitle>
                <CardText>Found in {props.regionFound} region</CardText>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
  )
}
