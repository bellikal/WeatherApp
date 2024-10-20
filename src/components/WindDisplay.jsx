function WindDisplay({ speed, direction }) {
    return (
        <div>
            <h3>Wind</h3>
            <p>Speed: {speed} m/s</p>
            <p>Direction: {direction}°</p>
        </div>
    )
}

export default WindDisplay;