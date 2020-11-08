import React from 'react';
import PropTypes from 'prop-types';

import Placeholder from '../placeholder/placeholder';

const Card = ({ onSelect, id, thumbnail, name, age }) => {
  return (
    <article className="card" onClick={() => onSelect(id)}>
      <div className="card__header">
        <Placeholder />
        <img className="card__image" src={thumbnail} />
      </div>
      <div className="card__content">
        <small className="card__detail">Id: {id}</small>
        <p className="card__name">{name}</p>
        <small className="card__detail">Age: {age}</small>
      </div>
    </article>
  );
};

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default Card;