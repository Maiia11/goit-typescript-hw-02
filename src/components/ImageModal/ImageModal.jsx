
import Modal from 'react-modal';
Modal.setAppElement('#root');
import css from './ImageModal.module.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '1120px',
    height: '650px',
    
    
  },
};

const ImageModal = ({ isOpen, onClose, url }) => {

  return (
     <Modal
                
            isOpen={isOpen}
            ariaHideApp={false}
            onRequestClose={onClose}
      shouldCloseOnEsc={true}
      style={customStyles}
      >
          <img className={css.img}  src={url} alt='photo' />   
      </Modal>
      
  )
}


export default ImageModal