import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  if (!props.citizen) return null;

  const { name,
    id,
    age,
    weight,
    height,
    hair_color,
    professions } = props.citizen;

  return (
    <div className="modal">
      <section className="modal__body">
        <button title="Close" className="modal__close" onClick={props.onClose}>Close</button>
        <h1>{name}</h1>
        <dl>
          <dt>Age</dt>
          <dd>{age}</dd>

          <dt>Professions</dt>
          <dd>{professions.map(p => p).join(', ')}</dd>

          <dt>Hair Color</dt>
          <dd>{hair_color}</dd>

          <dt>Weight</dt>
          <dd>{weight}</dd>

          <dt>Height</dt>
          <dd>{height}</dd>
        </dl>

      </section>
    </div>
  );
};

export default Modal;