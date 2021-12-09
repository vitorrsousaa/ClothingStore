import Modal from 'react-modal'

import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

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
            
            <label className={styles.container}>
                <form className={styles.searchBox}>
                    <AiOutlineSearch />
                    <input type="text" placeholder='SEARCH ...'/>
                </form>
                <AiOutlineClose onClick={onRequestClose}/>
            </label>

        </Modal>
        
    
    )
}