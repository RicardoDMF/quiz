import React, { Component } from 'react';
import { withRouter } from 'react-router';

import localStorageService from '../../services/localstorageservice'
import './registration.css';

class registration extends Component {
 
    goToQuestions = () => {
        this.goToPath('questions')
    }  


    goToPath = (path) => {
        this.props.history.push(path);
    }

    buttonQuestionStart = (event) => {
        event.preventDefault();
        localStorageService.setInformation('player', event.target.elements[0].value)
        this.goToQuestions()
    }

    render(){
        return(
            <div>
                <button
                    onClick={() => this.goToPath('home')}
                    className="buttonClass">
                        Back to Home
                </button>
                <div className="textToStart">To start the quiz, please enter your name down below.</div>
                    <form onSubmit={this.buttonQuestionStart}>
                        <input 
                            type="text"
                            className="field"
                            placeholder="Type Here...">
                        </input>
                        <input  
                            type="submit"
                            className="buttonClass"
                            value="Click here to start the quiz!"
                        />
                    </form>
            </div>
        )
    }
}

export default withRouter(registration);