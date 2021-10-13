import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({src, alt, onClose}) {
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    }
  })
  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeydown);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeydown);
  // }
  const handleKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
 
    // const { src, alt } = this.props;
    return createPortal(
      <div onClick={handleBackdrop} className="Overlay">
        <div className="Modal">
          <img src={src} alt={alt} />
        </div>
      </div>,
      modalRoot,
    );
  
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
