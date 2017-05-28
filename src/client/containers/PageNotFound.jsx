import React from 'react';

const PageNotFound = ({ location }) => (
  <div className="page-not-found">
    <h3>{`We didn\'t find the page (${location.pathname}) you were looking for.`}</h3>
  </div>
);

export default PageNotFound;
