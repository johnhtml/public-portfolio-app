import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Carrusel from './CarouselComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { actions } from 'react-redux-form';
import { postFeedback } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
  };
}

const mapDispatchToProps = (dispatch) => ({
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  postFeedback: (email, message) => (postFeedback(email, message))
});

class Main extends Component {

  componentDidMount() {//the route starts here and continues to mapDispatchToProps
  }

  render() {
    const HomePage = () => {
      return (
          <div className="container">
            <div>
              <Carrusel />
            </div>
          </div>
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
