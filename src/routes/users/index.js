import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { Users } from '../../components';

function User({ location }) {
  return (
      <div className={styles.normal}>
        <Users />
      </div>
  );
}

export default connect()(User);
