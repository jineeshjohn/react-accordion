import React, { Component } from "react";
import PropTypes from "prop-types";
import map from "lodash/map";
import isArray from "lodash/isArray";

import AccordionSection from "./AccordionSection";

class Accordion extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired
  };

  constructor(props) {
    super(props);
    const openSections = {};
    this.state = { openSections };
  }

  onClick = index => {
    const { openSections } = this.state;
    const isOpen = !!openSections[index];
    this.setState({
      openSections: {
        [index]: !isOpen
      }
    });
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections }
    } = this;
    const AccordionItems = isArray(children) ? children : [children];
    return (
      <div>
        {map(AccordionItems, child => {
          return (
            <AccordionSection
              isOpen={!!openSections[child.props.index]}
              label={child.props.header}
              onClick={onClick}
              index={child.props.index}
            >
              {child.props.children}
            </AccordionSection>
          );
        })}
      </div>
    );
  }
}

export default Accordion;
