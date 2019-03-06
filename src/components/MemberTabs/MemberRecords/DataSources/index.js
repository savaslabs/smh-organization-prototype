import React from 'react';

import Tile from '../../../Tile';

const DataSources = () => (
  <div className="data-sources">
    <div className="mt-5">
      <h2>Current Data Sources</h2>
      <div className="tile-flex">
        <Tile className="tile-flex__item">
          <img src="/images/icons/hixny.png" alt="" />
          <p>Hixny</p>
        </Tile>
      </div>
    </div>
    <div className="mt-5 pt-5">
      <h2>Available Data Sources</h2>
      <div className="tile-flex">
        {[...Array(8)].map((e, key) =>
          <Tile className="tile-flex__item tile-flex__item--add" key={key}>
            <img src="/images/icons/add.png" alt="" />
            <p>Data Source {key + 1}</p>
          </Tile>
        )}
      </div>
    </div>
  </div>
);

export default DataSources;
