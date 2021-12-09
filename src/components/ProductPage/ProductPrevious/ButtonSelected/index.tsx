
import { cloneElement, ReactElement } from "react";

interface ButtonSelectedProps {
    children: ReactElement;
    selected: string;
    elementCurrent: string;
 
}

export function ButtonSelected( { children, selected, elementCurrent }:ButtonSelectedProps) {

    const style = {
        color: 'white',
        background: 'black'
    }

    if(selected === elementCurrent){
        return(
            <>
                {cloneElement(children, {style})}
            </>
        )
        
    } else {
        return(
            <>
                {cloneElement(children)}
            </>
        )
    }  
}