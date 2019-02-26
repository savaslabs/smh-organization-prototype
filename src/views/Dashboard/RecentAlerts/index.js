import React  from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContentBlock from '../../../components/ContentBlock';

const RecentAlerts = () => (
  <ContentBlock title='Notifications' icon='bell'>
    <Table>
      <tbody>
      <tr>
        <td>
          <FontAwesomeIcon icon='bell' />
          Housing Home left a note for <Link to='/member/5'>Dennis Arthur</Link>.
        </td>
        <td className='font-italic'>2 minutes ago</td>
      </tr>
      <tr>
        <td>
          <FontAwesomeIcon icon='bell' />
          <Link to='/member/2'>Stephanie McNab</Link> hasn't accepted your request.
        </td>
        <td className='font-italic'>Send Reminder</td>
      </tr>
      <tr>
        <td>
          <FontAwesomeIcon icon='bell' />
          <Link to='/member/3'>Weston Smith</Link> denied your request.
        </td>
        <td className='font-italic'>1 day ago</td>
      </tr>
      </tbody>
    </Table>
  </ContentBlock>
);

export default RecentAlerts;
