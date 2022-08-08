const PreLoader = () => {
    return (
        <>
            {/* <div id="preloader">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <div className="object" id="object_one"></div>
                        <div className="object" id="object_two"></div>
                        <div className="object" id="object_three"></div>
                    </div>
                </div>
            </div> */}
            <button className="scroll-top scroll-to-target" data-target="html">
                <i className="fas fa-angle-up"></i>
            </button>
        </>
    );
}

export default PreLoader;