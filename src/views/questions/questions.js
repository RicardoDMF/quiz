import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Emoji from '../questions/components/emoji';
import Continent from '../questions/components/continent';



import './questions.css'

class Questions extends Component {
 
    buttonClicked = () => {   
      this.props.history.push("/registration");
    }

    getRandomQuestion() {
      // const randomNumber = Math.floor(Math.random() * 2) + 1
      const randomNumber = 1
      if(randomNumber === 1) {
        return (<Emoji></Emoji>)
      } else {
        return (<Continent></Continent>)
      }

    }

    render() {
      return(
          this.getRandomQuestion()
      )
  }
}

export default withRouter(Questions);