/**
 * Created by MLmediapps on 21/06/2016.
 */
import React from "react";

export default class Image extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.image} width="120"/>
      </div>
    );
  }
}
