export default function Overlay(props) {
    let isContactExpanded = props.isContactExpanded;
    let handleClickOverlay = props.handleClickOverlay;

    return (
        <div className={`overlay ${isContactExpanded ? 'm-active' : ''}`} onClick={handleClickOverlay}>
        </div>
    );
}