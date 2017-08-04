import React, {Component} from 'react';
import {FormControl, Button, FormGroup, ControlLabel} from 'react-bootstrap';
import axios from 'axios';

class AddTermForm extends Component {

    state = {
        word: '',
        trans: '',
        comments: '',
        lang: '',
        error: '',
    };

    submitForm = async (e) => {
        e.preventDefault();

        try {
            // Add term to database
            await axios.post('http://localhost:3090/terms', {
                word: this.state.word,
                trans: this.state.trans,
                comments: this.state.comments,
                lang: this.state.lang,
            });

            // Clear error message
            this.setState({error: ''});

        } catch (err) {
            this.setState({error: `Error submitting form ${err}`});
        }
    };

    renderAlert = () => (
        this.state.error ? <div>Error submitting {this.state.error}</div> : null
    );

// word, lang, trans, comment
    render(){
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <FormGroup bsSize="large">
                        <ControlLabel>Word:</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="word"
                            onChange={e => this.setState({word: e.target.value})}
                            value={this.state.word}
                        />
                    </FormGroup>
                        <ControlLabel>Translation:</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="translation"
                            onChange={e => this.setState({trans: e.target.value})}
                            value={this.state.trans}
                        />
                    <FormGroup bsSize="large">
                    </FormGroup>
                        <ControlLabel>Comments:</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="comments"
                            onChange={e => this.setState({comments: e.target.value})}
                            value={this.state.comments}
                        />
                    <FormGroup bsSize="large">
                    </FormGroup>
                    <FormGroup bsSize="large">
                        <ControlLabel>Language</ControlLabel>
                        <FormControl
                            componentClass="select"
                            placeholder="Select"
                            onChange={e => this.setState({lang: e.target.value})}
                        >
                            <option value="">Select</option>
                            <option value="ITALIAN">Italian</option>
                            <option value="GERMAN">German</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup bsSize="large">
                        <Button type="submit" className="btn btn-primary">
                            Submit
                        </Button>
                        {this.renderAlert()}
                    </FormGroup>
                </form>
                <Button
                    onClick={this.props.getTerms}
                    className="btn btn-primary"
                >Refresh Glossary</Button>
            </div>
        );
    }
}

export default AddTermForm;