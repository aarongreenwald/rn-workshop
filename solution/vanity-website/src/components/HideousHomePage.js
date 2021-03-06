import React from 'react';
import * as actions from '../store/actions';
import {VisitorCount} from './VisitorCount';

export class HideousHomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      marqueeText: 'Chimpanzees with their tongues out are cool. I wonder if they are equally enamored by our antics.'
    }
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
        <VisitorCount visitorCount={this.props.visitorCount}/>
        <div>
          <a href="#/monkeys">Check out some cool pictures!!</a>
        </div>
        <div>
          <input
            placeholder="Update marquee text..."
            onChange={e => this.setState({marqueeText: e.target.value})}/>
        </div>
        <marquee>{this.state.marqueeText}</marquee>
      </div>
    );
  }
}
