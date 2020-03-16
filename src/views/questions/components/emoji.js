import React, { Component } from 'react'
// import localStorageService from '../../../services/localstorageservice';
import ReactCountryFlag from 'react-country-flag';


class Emoji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      questionNumber: 1,
      countryName: "AE",
      answer1: "PT",
      answer2: null,
      answer3: null,
      answer4: null
    };
  }


  // state = {
  //   localstorage.getItem(getInformation, emoji)
  // }

  componentDidMount() {
    this.getQuestion()
  }

  getQuestion() {
    
  }

  render() {
    return (
      <div>
        <div>Question Number: {this.state.questionNumber}</div>
        {this.state.countryName && <div>What is the flag of <ReactCountryFlag 
          countryCode={this.state.answer1}
          svg
          style={{
              width: '2em',
              height: '2em',
          }}
          
        />?</div>}
        
      </div>
    )
  }
}
export default Emoji;