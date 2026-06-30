const Loading = () => {
    return (
        <>
            <div className="text-center my-load" style={{width: "5rem" , height: "5rem"}}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Loading