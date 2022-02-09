import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
	StyledModalOverlay,
	StyledModalBody,
	StyledModal,
	StyledModalHeader
} from './Styles';

const Modal = ({ show, onClose, children, title }) => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleCloseClick = (e) => {
		e.preventDefault();
		onClose();
	};

	const modalContent = show ? (
		<StyledModalOverlay>
			<StyledModal>
				<StyledModalHeader>
					<a href='#' onClick={handleCloseClick}>
						x
					</a>
				</StyledModalHeader>
				{title && <StyledModalTitle>{title}</StyledModalTitle>}
				<StyledModalBody>{children}</StyledModalBody>
			</StyledModal>
		</StyledModalOverlay>
	) : null;

	if (isBrowser) {
		return ReactDOM.createPortal(
			modalContent,
			document.getElementById('modal')
		);
	} else {
		return null;
	}
};

export default Modal;
