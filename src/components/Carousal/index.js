import React, { useEffect, useState } from 'react';
import './carousal.css';
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';

const Carousel = ({ children, showCount }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children?.length);

    useEffect(() => {
        setLength(children?.length);
    }, [children]);

    const handleNext = () => {
        if (currentIndex < (length - showCount)) {
            if (currentIndex + (showCount * 2) >= length) {
                setCurrentIndex(() => length - showCount);
            } else {
                setCurrentIndex(prevState => prevState + showCount);
            }
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            if (currentIndex < showCount) {
                setCurrentIndex(() => 0);
            } else {
                setCurrentIndex(prevState => prevState - showCount);
            }
        }
    };

    return (
        <div className="mainContainer">
            <div className="wrapper">
                {children?.length > showCount
                    && (
                        <button onClick={handlePrevious} className={`leftArrow ${currentIndex <= 0 ? 'disabled' : ''}`}>
                            <CaretIcon width="20" height="20" />
                        </button>
                    )
                }
                <div className="contentWrapper">
                    <div
                        className="content"
                        style={{ transform: `translateX(-${currentIndex * (100 / showCount)}%)` }}
                    >
                        {children}
                    </div>
                </div>
                {children?.length > showCount
                    && (
                        <button onClick={handleNext} className={`rightArrow ${currentIndex >= (length - showCount) ? 'disabled' : ''}`}>
                            <CaretIcon width="20" height="20" />
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default Carousel;
