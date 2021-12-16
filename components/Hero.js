import { useState, useEffect } from "react";

const Hero = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset;
            setScrollPosition(currentPosition);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (     
        <div className="parallax-container">
            <div 
                style ={ 
                    { 
                        backgroundColor: `#291d2b`, 
                    } 
                }
            />
            <div 
                className="bg7"
                style ={ 
                    { 
                        transform: `translate(0px, -${scrollPosition * 1/8}px)` 
                    } 
                }
            />
            <div 
                className="bg6"
                style ={ 
                    { 
                        transform: `translate(0px, -${scrollPosition * 2/8}px)` 
                    } 
                }
            />
            <div 
                className="bg5"
                style ={ 
                    { 
                        transform: `translate(0px, -${scrollPosition* 3/8}px)` 
                    } 
                }
            />
            <div 
                className="bg4"
                style ={ 
                    { 
                        transform: `translate(0px, -${scrollPosition* 4/8}px)` 
                    } 
                }
            />
            <div 
                className="bg-text"
                style ={ 
                    { 
                        transform: `translate(0px, -${scrollPosition* 5/8}px)` 
                    } 
                }
            />
            <div 
                className="bg3"
                style ={ 
                    { 
                        transform: `translate(0px, -${scrollPosition* 6/8}px)` 
                    } 
                }
            />
            <div 
                className="bg2"
                style ={ 
                    { 
                        transform: `translate(0px, -${scrollPosition* 7/8}px)` 
                    } 
                }
            />
            <div 
                className="bg1"
                style ={ 
                    { 
                        transform: `translate(0px, -${scrollPosition * 8/8}px)` 
                    } 
                }
            />
        </div>
    )
}

export default Hero
