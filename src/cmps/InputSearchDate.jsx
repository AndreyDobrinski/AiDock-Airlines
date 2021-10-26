import { useState } from "react"

export const InputSearchDate = ({doLoadAirlines}) => {

    const [inputValue, setInputValue] = useState("")
    
    const [filterBy] = useState('')

    const handleInput = ({ target }) => {
        setInputValue(target.value)
        const filter = { ...filterBy, "date": target.value }
        console.log(filter);
        doLoadAirlines(filter)
    }

    return (
        <div className="input-search-origin p-10">
            <div className="input-holder flex auto-center">
                <input type="date" name="date" value={inputValue.date} onChange={handleInput} min="01-10-2021" max="31-10-2021" />
            </div>
        </div>
    )
}