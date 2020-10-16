import React, {ChangeEvent, MouseEvent} from "react";

const callback = () => {
    alert('hey')
}


//`window.setTimeout(callback, 1000)

export const User = () => {

    const search = (event: MouseEvent<HTMLButtonElement>) => {
         event.currentTarget.value
    }

    const onNameChanged = () => {

        console.log("name chnaged")
    }
    const onAgeChanged = (event:ChangeEvent<HTMLInputElement> ) => {

        console.log("age changed" + event.currentTarget.value)
    }
    const focusLost = () => {

        console.log("focus lost")
    }

    return (
        <div>
        <textarea
            onChange={onNameChanged}
            onBlur={focusLost}
        >Dimich</textarea>

            <input onChange={onAgeChanged} type={"number"}/>



            <button name="delete" onClick={search}>Search</button>
        </div>
    )
}
