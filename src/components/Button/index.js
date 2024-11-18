import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)
function Button ({to, 
    href, 
    primary = false, 
    outline = false, 
    small = false,
    large = false, 
    text = false,
    disable = false,
    rounded = false,
    children, 
    leftIcon,
    rightIcon,
    onClick, 
    className,
    ...passProps}) {
    let Comp = 'button';
    const props={
        onClick,
        ...passProps
    }
    if (disable)
    {
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
            }
        })
    }
    if (to){
        props.to = to
        Comp = Link
    }
    else if (href) {
        props.href=href
    }
    const classes = cx('wrapper',
        {
            primary,
            outline,
            small,
            large,
            text,
            disable,
            rounded,
            [className]: className,
            
        }
    )
    return (
        <Comp className= {classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
export default Button;