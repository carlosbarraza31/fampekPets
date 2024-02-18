export default function DownIndicators(props) {
    let handleClick = props.handleClick;
    return (
        <>
            <img className="scroll_down" src="img/scroll_down.svg" alt="scroll down" data-js-scroll-to="1" onClick={handleClick}></img>
        </>
    );
}