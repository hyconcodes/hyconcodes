const Hero = () => {
    return (
        <div>
            <section className="right-slant-shape bg-primary pb-10 pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-12 position-relaive">
                            <div className="text-white-stable text-center position-relaive my-lg-8 my-6">
                                <span className="fw-medium fs-4">Hi there, my name is</span>
                                <h1 className="text-white-stable display-3 mt-3 mb-3">Olalekan Olamide</h1>
                                <p className="mb-0 pb-8 px-lg-7 text-opacity-75 lead">
                                    I'm a software engineer and lead developer at Allsers, passionate about building innovative tech solutions, mentoring developers, and driving impactful projects to success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-absolute z-1 w-100 text-center top-25 mt-n8">
                    <img src="images/hycon_assets/ava.jpg" alt="avatar" className="rounded-circle shadow-sm border border-white border-2" style={{width: '200px', height: '220px'}} />
                </div>
            </section>
        </div>

    )
}

export default Hero
