
import React, { Component } from "react";

class Credits extends Component {
  render() {
    return (
      <div>
      	<p className="credit-header">{this.props.type}</p>
      	{this.props.children}
      </div>
    );
  }
}
export default Credits;

		
