import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContentBlock = (props) => (
  <div className='content-block'>
    <div className='content-block__title'>
      <FontAwesomeIcon icon={props.icon} size='2x'/>
      <h3>{props.title}</h3>
    </div>
    <div className='content-block__content'>
      {props.children}
      {props.link &&
        <Link to={props.link} className='content-block__link'>View All</Link>
      }
    </div>
  </div>
);

export default ContentBlock;
