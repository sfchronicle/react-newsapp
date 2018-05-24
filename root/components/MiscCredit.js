
import React, { Component } from "react";

class MiscCredit extends Component {
  render() {
    return (
      <p><a href={this.props.link } rel="noopener" target="_blank">{ this.props.text }</a></p>
    );
  }
}
export default MiscCredit;

		
