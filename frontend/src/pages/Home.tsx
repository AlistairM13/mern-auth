import { getUsers } from "../actions/user-actions"

export default function Home() {

    async function clickHandler() {
        try {
            const response = await getUsers()
            console.log("response", response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex h-full items-center justify-center">
            <button onClick={clickHandler} className="bg-black px-4 py-2 text-white">Get users</button>
        </div>
    )
}
