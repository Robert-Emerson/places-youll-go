import error from "./Error.module.css"

export const Error = () => {
    return (
        <div className={error.error}>
            <img src={import.meta.env.VITE_STATIC_CONTENT_URL + "error.png"} />
            <h2>Sad Day</h2>
            <p>Our hamsters are all tuckered out and can't find your trip :(</p>
        </div>
    )
}