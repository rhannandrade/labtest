import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  TextInput,
  PasswordInput,
  OutlineButton,
  Button,
  Icon,
  Checkbox,
  Toggle,
  Tooltip
} from "@labcodes/confetti-ds";

import { fetchWelcomeMessage } from "./actions";

export class Welcome extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    fetchWelcomeMessage: PropTypes.func
  };

  static defaultProps = {
    message: null,
    fetchWelcomeMessage: () => {}
  };

  componentDidMount() {
    const { fetchWelcomeMessage } = this.props;
    fetchWelcomeMessage();
  }

  render() {
    const { message } = this.props;

    return (
      <main className="welcome">
        <div className='columns is-variable is-4 is-centered'>
          <div className='column is-three-quarters'>
            <div className='columns'>
              <div className='column'>
                <p>
                  Before you start doing your thing, we need to get you registered. 
                  Please fill the following information (all fields are required).
                </p>
              </div>  
              <div className='column'>
                <p>
                  <Link to="/sample-nested-page/"> Login</Link>
                  if you have already registered.
                </p>
              </div> 
            </div>
            <div className='columns'>
              <div className='column is-half'>
                <h2>Let's go!<br/>
                  It is all about you</h2>
              </div> 
            </div>
            <div className='columns'>
              <div className='column'>
                <div className= "lab-test-form">
                  <TextInput id='name' label="What's your first and last name?" required />
                  <TextInput id='username' label="Choose an username" required />
                </div>
              </div>
              <div className='column'>
                <TextInput id='email' label="Your email" required />
              </div>
            </div>
            <div className='column is-half'>
              <h4><Icon type="key" color="black-75" /> SECURE YOUR ACCOUNT</h4>
            </div> 
            <div className='columns'>
              <div className='column'>
              <PasswordInput id='password' label="Set a password" helpMessage="At least 8 characters, containing letters and numbers" required />
              </div> 
              <div className='column is-half'>
              <PasswordInput id='repeat-password' label="Confirm password" required />
              </div> 
            </div>
            <div className='columns'>
              <div className='column is-half'>
                <h3>Now select the task(s) you will perform</h3>
                <fieldset className="lab-test__checkbox">
                  <Checkbox id="1" name="blogpost" label="Write blogposts" />
                  <Checkbox id="2" name="manage" label="Manage the system" />
                  <Checkbox id="3" name="review" label="Review texts" /> 
                </fieldset>
              </div> 
              <div className='column is-half'>
                <div className="columns">
                  <div className="column is-four-fifths" >
                    <h3>Set some personal preferences</h3>
                    <div className="lab-test__toggle">
                      <p>Display my e-mail to readers</p>
                      <Tooltip id="tooltip-top" 
                        text="Your email will be shown in the posts
                        you have written and your personal 
                        author page." 
                        placement="top-end">
                        <Toggle id="toggle-4" name="toggle-preferences" color="purple"/>
                      </Tooltip>
                    </div>
                    <div className="lab-test__toggle">
                      <p>Receive notifications on my e-mail</p>
                      <Toggle id="toggle-5" name="toggle-notifications" color="purple"/>
                    </div>
                    <div className="lab-test__toggle">
                      <p>Call me by my username</p>
                      <Toggle id="toggle-6" name="toggle-username" color="purple"/>
                    </div>
                    <div className="lab-test__buttons">
                      <OutlineButton text="Clear and cancel" />
                      <Button text="Register" icon="check"/>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = ({ welcome }) => ({ message: welcome.message });

const mapDispatchToProps = dispatch => ({
  fetchWelcomeMessage: () => dispatch(fetchWelcomeMessage())
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
