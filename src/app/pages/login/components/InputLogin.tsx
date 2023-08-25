import React from "react"

interface IInputLoginProps {
    label : string,
    value: string,
    type?: string,
    onChange: (newValue: string) => void,
    onPressEnter?: () => void
};

export const InputLogin =  React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {

    return (
        <label>
        <span>{props.label}</span>
        <input
            ref={ref}
            type={props.type}
            value={props.value}
            onChange={e => props.onChange(e.target.value)} 
            //? props.onPressEnter && props.onPressEnter() serve para verificar se onPressEnter é diferente de undefined 
            onKeyDown={e => e.key === "Enter" ? props.onPressEnter && props.onPressEnter(): undefined}/ >
    </label>
    );

});