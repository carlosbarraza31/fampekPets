import React from 'react';
import GalleryImages from './GalleryImages.js';

export default function PetGallery(props) {
    let selectedPet = props.selectedPet;

    const modalRef = React.useRef(null);
    const dragIconRef = React.useRef(null);
    let touchStart;

    function handleCloseModal(event) {
        modalRef.current.close();
    }

    function modalMove(event, petGallery) {
        const currentY = event.touches[0].clientY;
        petGallery.style.maxHeight = (((window.innerHeight - currentY) / window.innerHeight) * 100) + 'vh';
    }

    function snapModal(touchStart, petGallery) {
        petGallery.style.transition = "all 0.4s ease-in-out";
        petGallery.style.maxHeight = (((window.innerHeight - touchStart) / window.innerHeight) * 100) + 'vh';
    }

    function handleTouchStart(event) {
        touchStart = event.touches[0].clientY;
        modalRef.current.style.transition = "none";
    }

    function handleTouchMove(event) {
        modalMove(event, modalRef.current);
    }

    function handleTouchEnd() {
        snapModal(touchStart, modalRef.current);
    }

    return (
        <dialog className="pet_gallery" ref={modalRef}>
            <svg className="drag_icon" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} ref={dragIconRef}>
                <g id="Interface / Drag_Horizontal">
                <g id="Vector">
                <path d="M18 14C17.4477 14 17 14.4477 17 15C17 15.5523 17.4477 16 18 16C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16C6.55228 16 7 15.5523 7 15C7 14.4477 6.55228 14 6 14Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 8C17.4477 8 17 8.44772 17 9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                </g>
            </svg>
            <svg className="close_icon" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleCloseModal}>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.96965 8.96967C9.26254 8.67678 9.73742 8.67678 10.0303 8.96967L12 10.9394L13.9696 8.96969C14.2625 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0303L13.0606 12L15.0303 13.9697C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73744 15.3232 9.26256 15.3232 8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697L10.9393 12L8.96965 10.0303C8.67676 9.73744 8.67676 9.26256 8.96965 8.96967Z" fill="#1C274C"/>
            </svg>
            <div className="gallery_title">
                {selectedPet}
            </div>
            <GalleryImages selectedPet={selectedPet}/>

            <button className="gallery_close" onClick={handleCloseModal}>Close</button>
        </dialog>
    );
}