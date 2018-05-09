
import React, { Component } from "react";

class CreditLine extends Component {
  render() {
    return (
      <p>{this.props.name} • <a href={`mailto:${ this.props.email } `}>{ this.props.email }</a> • <a target="_blank" rel="noopener" href={`https://twitter.com/${ this.props.twitter } `}>@{ this.props.twitter }</a></p>
    );
  }
}
export default CreditLine;

		
