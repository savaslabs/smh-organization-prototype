import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

// @todo: May need to use link elements for buttons, or possibly add onClick
// functions.
const PageHeading = (props) => {
  return (
    <div className="page-heading">
      <div className="container">
        <h1>{props.title}</h1>
        {props.subtitle &&
          <p className="page-heading__subtitle">{props.subtitle}</p>
        }
        {props.ctaText &&
          <Button variant="light" className="page-heading__cta" onClick={() => props.onSelect(props.ctaActiveTab)}>{props.ctaText}</Button>
        }
      </div>
    </div>
  );
};

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  ctaText: PropTypes.string,
  ctaActiveTab: PropTypes.string,
  onSelect: PropTypes.func
};

export default PageHeading;
