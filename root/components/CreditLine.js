
import React, { Component } from "react";

class CreditLine extends Component {
  render() {
    return (
      <p>{this.props.name}
      {this.props.email &&
      	<span>&nbsp;• <a href={`mailto:${ this.props.email } `}>{ this.props.email }</a> </span>
      }
      {this.props.twitter &&
      	<span>&nbsp;• <a target="_blank" rel="noopener" href={`https://twitter.com/${ this.props.twitter } `}>@{ this.props.twitter }</a></span>
      }
      </p>
    );
  }
}
export default CreditLine;
