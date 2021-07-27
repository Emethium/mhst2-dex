import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Media, Row } from 'reactstrap'
import { Monster } from '../../domain/Monster'

export default function MonsterCard(props: Monster) {
  return (
    <div>
      <Card>
        <CardImg top width="auto" src={props.portraitURL} alt={`${props.name} portrait image`} />
        <CardBody>
          <Row>
            <Col>
              <Media left href="#">
                <Media src={props.eggURL} alt={`${props.name} egg design image`} />
              </Media>
            </Col>
            <Col>
              <CardTitle tag="h5">{props.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{props.type}</CardSubtitle>
              <CardText>Found in {props.regionFound} region</CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  )
}
