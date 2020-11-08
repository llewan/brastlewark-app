import React from 'react';
import PropTypes from 'prop-types';

import Placeholder from '../placeholder/placeholder';

const Card = (props) => {
  return (
    <article className="card" onClick={() => props.onSelect(props.id)}>
      <div className="card__header">
        <Placeholder />
        <img className="card__image" src={props.thumbnail} />
      </div>
      <div className="card__content">
        <small className="card__detail">Id: {props.id}</small>
        <p className="card__name">{props.name}</p>
        <small className="card__detail">Age: {props.age}</small>
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