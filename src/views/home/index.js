import React, { Component } from 'react';
import { withRouter } from 'react-router';
import gql from 'graphql-tag';
import clientQuery from '../../services/clientquery'

import localStorageService from '../../services/localstorageservice'
import './index.css';




 
const COUNTRY_QUERY = gql 
  ` 
    query queryApp {
        countries {
          continent {
            code
            name
          }
          name
          code
          emoji
        }
      }
      `

class Home extends Component {

  componentDidMount() {
    this.fetchCountryInformation()
  }

  fetchCountryInformation () {
    clientQuery.query({ query:COUNTRY_QUERY})
    .then(resp => {
      localStorageService.setInformation("countries", resp.data.countries);
    })
    .catch(err => {
      console.warn(err)
    })
  }

  buttonClicked = () => {

    this.props.history.push("/registration");
  }   


  render() {
    return(
        <div className="general">
            <div>Welcome to country quiz!</div>
              <p className="Information"> 
                On this page you will be able to do a quiz to test out your knowledge of the countries on Earth. 
              </p>
            <button
              className="ButtonRegistration"
              onClick={this.buttonClicked}>
                Click to go to registration.
            </button>


            
        </div>
    )
  }
}

export default withRouter(Home);

