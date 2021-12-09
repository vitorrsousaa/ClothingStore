import Modal from 'react-modal'

import styles from './styles.module.scss';

interface SearchModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const SearchModal = ({isOpen, onRequestClose}: SearchModalProps) => {
    return(
        
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={styles.overlay}
            className={styles.modal} 
        >
            
            <div>Search Modal</div>

        </Modal>
        
    
    )
}