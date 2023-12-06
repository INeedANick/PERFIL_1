import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import TableroColor from './Boton_Color';

const PopperExample = (props) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [visible, setVisible] = useState(false);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
  });

  const togglePopper = () => {
    setVisible(!visible)
  }
  
  const closePopper = () => {
    setVisible(false);
  };

  return (
    <div>
      <button ref={setReferenceElement} onClick={togglePopper}>
      </button>

      {visible && (
        <div
          ref={setPopperElement}
          style={{ ...styles.popper, backgroundColor: 'rgb(100, 100, 100)', padding: '10px', border: '1px solid #ddd' }}
          {...attributes.popper}
        >
          <div>{props.miComponente}</div>
          <button onClick={closePopper}></button>
        </div>
      )}
    </div>
  );
};

export default PopperExample;