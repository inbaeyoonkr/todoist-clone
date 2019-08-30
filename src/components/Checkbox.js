import React from 'react';
import { firebase } from '../firebase';

export const Checkbox = ({ taskId }) => {
  const archiveTask = () => {
    firebase
      .firestore()
      .collection('tasks')
      .doc(taskId)
      .update({
        archived: true
      });
  };

  return (
    <div
      className='checkbox-holder'
      data-testid='checkbox'
      onClick={() => archiveTask()}
    >
      <span className='checkbox' />
    </div>
  );
};
