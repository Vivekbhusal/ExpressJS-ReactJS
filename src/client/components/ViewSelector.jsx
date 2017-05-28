import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

const ViewSelector = ({ displayType, handleChange }) => {
  const gridClass = ClassNames('grid', { active: displayType === 'grid' });
  const listClass = ClassNames('list', { active: displayType === 'list' });

  return (
    <div className="row">
      <div className="view-selector">
        <span className={gridClass} onClick={() => handleChange('grid')} />
        <span className={listClass} onClick={() => handleChange('list')} />
      </div>
    </div>
  );
};

ViewSelector.propTypes = {
  displayType: PropTypes.string,
  handleChange: PropTypes.func,
};

ViewSelector.defaultProps = {
  displayType: 'grid',
  handleChange: () => {},
};

export default ViewSelector;
