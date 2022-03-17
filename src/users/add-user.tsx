import { useState } from "react"
import { useAddUser } from "./hooks"

export const AddUser = () => {
    const [name, setName] = useState('')
    const addUser = useAddUser()

    return <div>
        <input value={name} onChange={(event) => setName(event.target.value)}/>
        <button onClick={() => addUser({name})}>
            Click
        </button>
    </div>

}