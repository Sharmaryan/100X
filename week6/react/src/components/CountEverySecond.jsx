import { useRef } from "react";

export const CountEverySecond = () => {
    const timeRef = useRef(null);
    const hasStopClicked = useRef({
        buttonState: false,
        innerText: 'start'
    });
    let id;
    return (
        <div>
            <p ref={timeRef}>{0}</p>
            <button
                ref={hasStopClicked}
                onClick={() => {
                    if (hasStopClicked.current.buttonState) {
                        hasStopClicked.current.buttonState = false;
                        hasStopClicked.current.innerText = 'start'
                        clearInterval(id)
                    } else {
                        hasStopClicked.current.buttonState = true;
                        hasStopClicked.current.innerText = 'stop'
                        id = setInterval(() => {
                            timeRef.current.innerText++;
                        }, 1000);
                    }

                }}
            >
                {hasStopClicked.current.innerText}
            </button>
        </div>
    );
};
