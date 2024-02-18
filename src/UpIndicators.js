export default function UpIndicators(props) {
    let hasExpanded = props.isExpanded;
    let isGridVisible = props.isGridVisible;
    let handleClick = props.handleClick;

    return (
        <div className={`up_indicators ${hasExpanded || !isGridVisible ? '' : 'm-active'}`} data-js-scroll-to="0" onClick={handleClick}>
            <img className="scroll_up" src="img/scroll_down.svg" alt="scroll down"></img>
            <div className="back_text">
                Go back
            </div>
        </div>
    );
}