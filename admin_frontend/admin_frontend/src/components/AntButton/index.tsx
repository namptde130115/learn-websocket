import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import classnames from 'classnames';
import React, { FC, forwardRef, memo } from 'react';
import './ant-button.less';

/* interface IAntButton extends ButtonProps { */
/*     ref?: RefAttributes<HTMLElement>; */
/* } */

/* ref={ref?.ref} */

interface Props extends ButtonProps {}

const AntButton: FC<Props> = forwardRef(({ className, ...props }, ref) => {
    return (
        <Button
            ref={ref && undefined}
            className={classnames(`ant-button ${className}`)}
            {...props}
        />
    );
});

export default memo(AntButton);
