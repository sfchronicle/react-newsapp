
import React, { Component, Fragment } from "react";
import Link from 'next/link';

class Byline extends Component {
  render() {
    let prefix = " ";
    // Add necessary spacing and grammar
    if (this.props.index > 0){
      prefix = ", ";

      if (this.props.is_last){
        prefix = " and ";
      }
    }

    return (
      <Fragment>
      	{ (this.props.url) ? (
            <Fragment>
              <span>
                {prefix}
              </span>
          		<Link>
          			<a href={this.props.url} rel="author" target="_blank">
          				<span>{this.props.name}</span>
          			</a>
          		</Link>
            </Fragment>
        	) : (
        		<span>{prefix}{this.props.name}</span>
        	)
        }
      </Fragment>
    );
  }
}
export default Byline;

		
