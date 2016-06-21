import React from 'react';
import * as actions from '../store/actions'
export class HideousHomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      marqueeText: 'Chimpanzees with their tongues out are cool. I wonder if they are equally enamored by our antics.'
    };
  }

  componentDidMount() {
    this.props.dispatch(actions.incrementVisitorCount());
  }

  render() {
    return (
      <div className="home-page">
        <div>
          Welcome to my Web Site! My name is Aaron Greenwald.
        </div>
        <div>Visitor count: {this.props.visitorCount}</div>
        <div>
          <a href="#/monkeys">Check out some cool pictures!!</a>
        </div>
        <div>
          <input placeholder="Update marquee text..." onChange={(event) => {
            this.setState({marqueeText: event.target.value});
          }}/>
        </div>
        <marquee>{this.state.marqueeText}</marquee>
      </div>
    );
  }
}
