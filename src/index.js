import React from 'react'
import ClickOutside from 'react-click-outside'
import {css, cx, keyframes} from 'emotion'

const scaleIn = keyframes`
0% {
    opacity: 0;
    transform: scale(.5);
}

100% {
    opacity: 1;
    transform: scale(1);
}
`

export const Menu = ({className, children, align, onClose}) => (
    <ClickOutside
        onClickOutside={onClose}
        className={cx(
            css`
                background-color: rgb(255, 255, 255);
                box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px;
                margin-bottom: 8px;
                margin-top: 8px;
                padding-top: 4px;
                padding-bottom: 4px;
                position: absolute;
                width: 100%;
                z-index: 1;
                border-radius: 4px;
                background: #fff;
                min-width: 250px;
                                animation-duration: .15s;
    animation-name: ${scaleIn};
    animation-timing-function: cubic-bezier(.2,0,.13,1.5);
            `,
            align === 'left' ? css`
                position: absolute;
                left: 0;
            ` : null,
            align === 'right' ? css`
                position: absolute;
                right: 0;
            ` : null,
            className
        )}
    >
        {children}
    </ClickOutside>
)

export const MenuItem = ({onClick, className, title, icon}) => (
    <li
        className={cx(
            css`
                           padding: 8px 15px;
        cursor: pointer;
        align-items: center;
        display: flex;
        min-height: 34px;
        user-select: none;
        &:active {
            opacity: 0.75;
        }
        &:hover {
            background-color: #e6f1ff;
        }
            `
        )}
        onClick={onClick}
    >
        {icon ? icon({
            width: 18,
            className: css`
                margin-right: 4px;
            `
        }) : null}
        {title}
    </li>
)

export default MenuItem