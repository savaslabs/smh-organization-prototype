import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import records from '../../../../data/records';

const Records = () => (
  <ul className="records__list">
    {records.map((record, key) =>
      <li key={key} className="records__list__item">
        <FontAwesomeIcon icon={record.icon} size="4x" />
        <p>{record.name}</p>
      </li>
    )}
  </ul>
);

export default Records;
