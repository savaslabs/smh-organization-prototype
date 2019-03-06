import React, { Component } from 'react';

import Tile from '../../../Tile';
import Diagnoses from './Diagnoses';
import Prescriptions from './Prescriptions';
import records from '../../../../data/records';

const ActiveRecord = ({ record, back }) => {
  const getActiveRecord = () => {
    switch (record.name) {
      case 'Diagnoses':
        return <Diagnoses />;
      case 'Prescriptions':
        return <Prescriptions />;
      default:
        return <p>Record not found</p>;
    }
  };

  const activeRecord = getActiveRecord();
  return (
    <div>
      <div className="record-heading-wrapper d-flex justify-content-between align-items-center pt-5 pb-2 mb-3">
        <h2 className="m-0">{record.name}</h2>
        <button onClick={back} className='button--reset'>
          <img src="/images/icons/arrow-back.png" alt="" className="mr-2"/>
          Go back to records
        </button>
      </div>
      {activeRecord}
    </div>
  );
};

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRecord: null
    };

    this.onClick = this.onClick.bind(this);
    this.back = this.back.bind(this);
  }

  onClick(record) {
    this.setState({ activeRecord: record });
  }

  back() {
    this.setState({ activeRecord: null });
  }

  render() {
    const { activeRecord } = this.state;
    if (activeRecord) {
      return (
        <ActiveRecord record={activeRecord} back={this.back}/>
      )
    }

    return (
      <div className="records__list">
        {records.map((record, key) =>
          <Tile
            key={key}
            className={'records__list__item' + (record.disabled ? ' disabled' : '')}
            onClick={() => this.onClick(record)}
          >
            <img src={'/images/icons/' + record.icon + '.png'} alt='' />
            <p>
              {record.name}
              {record.number && <span> ({record.number})</span>}
            </p>
          </Tile>
        )}
      </div>
    );
  }
}

export default Records;
