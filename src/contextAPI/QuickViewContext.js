import React, { createContext, useState } from 'react';

export const QuickViewContext = createContext();

export const QuickViewContextProvider = (props) => {

    const [quickViewItem, setQuickViewItem] = useState({});
    const [inVisibleItem, setInVisibleItem] = useState(false);

    return (
        <QuickViewContext.Provider value={[quickViewItem, setQuickViewItem, inVisibleItem, setInVisibleItem]}>
            {props.children}
        </QuickViewContext.Provider>
    );
}