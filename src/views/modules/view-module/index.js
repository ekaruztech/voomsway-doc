import React from 'react';

const ViewModule = ({ title, ...props }) => (
  <>
    <h3>{ title }</h3>
    <p>{`Module id: ${props.match.params.id}`}</p>
  </>
);

export default ViewModule;
