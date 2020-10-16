import React, {useState} from "react";
import {ManType} from "./destructuring.test";

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model:string}
}

function useDimichState(m: string) {
    return[m, function () {

    }]
}
function useDimichState2(m: string) {
    return ({
        message:m,
    setMessage: function () {
    }
})

export const ManComponent: React.FC<PropsType> = ({title, man, ...rest}) => {

const [message, setMessage] = useState<string>("hello");

    return <div>

       <h1>{title}</h1>
        <hr/>
        <div>
            {rest.car.model}
        </div>
    </div>
}