import { useState } from "react"

export const InputSearchOrigin = ({doLoadAirlines}) => {

    const [inputValue, setInputValue] = useState('')

    const [filterBy] = useState('')

    const handleInput = ({ target }) => {
        setInputValue(target.value)
        const filter = { ...filterBy, "origin": target.value }
        doLoadAirlines(filter)


    }

    return (
        <div className="input-search-origin p-10">
            <div className="input-holder flex auto-center">
                <input name="origin" value={inputValue} onChange={handleInput} placeholder="Search by origin" />
            </div>
        </div>
    )
}