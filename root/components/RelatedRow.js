
import React, { Component } from "react";
import RelatedLink from './RelatedLink';

class RelatedRow extends Component {
  render() {
    const links = this.props.links;
    const linkWidth = 100/links.length;

    return (
      <div className="related-links">
        { links.map((link) => {
          return <RelatedLink url={link.url} image={link.image} title={link.title} width={linkWidth} />
        })}
      </div>
    );
  }
}
export default RelatedRow;

    
