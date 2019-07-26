import React from 'react';
import {Container, Row, Col} from 'shards-react';
import { Field } from './partial/Field';
import RecordBoard from './partial/RecordBoard';

class MatchRecord extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Container className="px-4 match-container">
                <Row>
                    <Col lg="8" md="7" sm="7" className="mb-4">
                        <Field />
                    </Col>
                    <Col lg="4" md="5" sm="5" className="mb-4">
                        <RecordBoard />
                    </Col>
                </Row>
            </Container>   
        )
    }
}

export default MatchRecord;