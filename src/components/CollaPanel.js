import React, {Component} from 'react';
import {Button, Panel, Row, Col} from 'react-bootstrap';

class CollaPanel extends Component {
    state = {
        open: false
    };

    render() {
        const {word} = this.props;
        return (
            <Row>
                <Col className="col-lg-12 col-xs-12 col-md-12">
                    <Button
                        id="word-button"
                        className="btn btn-block"
                        bsSize="large"
                        onClick={ ()=> this.setState({ open: !this.state.open })}
                    >
                        {word.word}
                    </Button>
                    <Panel collapsible expanded={this.state.open}>
                        <h1>{word.word}</h1>
                        <p><strong>Translation: </strong>{word.trans}</p>
                        <p><strong>Language: </strong>{word.lang}</p>
                        <p><strong>Comments: </strong>{word.comments}</p>
                    </Panel>
                </Col>
            </Row>
        );
    }
}

export default CollaPanel;