import React from 'react';
import Scrollbars, { ScrollbarProps } from 'react-custom-scrollbars';

export default ({ children, ...rest }: ScrollbarProps): JSX.Element => {
    return (
        <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={100} {...rest}>
            {children}
        </Scrollbars>
    );
};
