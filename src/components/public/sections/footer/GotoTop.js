import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

const GotoTop = () => {

    const { y: pageYOffset } = useWindowScroll();
    const [visiblity, setVisiblity] = useState(false);

    useEffect(() => {

        if (pageYOffset > 200) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }

    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    return (
        <>
            {
                visiblity
                    ? <div className="goto-top-container" onClick={scrollToTop}>
                        <i className="fa fa-chevron-up"></i>
                    </div>
                    : ''
            }
        </>
    );
}

export default GotoTop;