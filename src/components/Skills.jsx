import React from 'react'

const Skills = () => {
    return (
        <div>
            <section className="my-xl-10 my-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-8 col-12">
                            <div className="mb-6 mb-lg-0">
                                <small className="text-uppercase fw-bold ls-md text-body-tertiary">MY SKILLS</small>
                                <h2 className="my-3">
                                    My areas of
                                    <span className="text-primary"> expertise</span>
                                </h2>
                                <p className="mb-5">I specializes in full-stack development, creating efficient web solutions, building robust backends, and mentoring aspiring developers for success.</p>
                                <a href="#!" className="btn btn-primary d-none">View More Details</a>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1 col-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card bg-danger bg-opacity-10 border-0 mb-5">
                                        <div className="card-body">
                                            <div className="mb-4">
                                                <img className='w-25' src="/images/hycon_assets/laravel-framework.png" alt="laravel" />
                                            </div>
                                            <div className="mb-4">
                                                <h3>Laravel</h3>
                                                <p className="mb-0">I uses Laravel for building scalable backends, managing APIs, and developing dynamic web applications efficiently.
                                                </p>
                                            </div>
                                            <a href="#!" className="icon-link icon-link-hover link-danger">
                                                
                                                <svg xmlns="" width={14} height={14} fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card bg-warning bg-opacity-10 border-0 mb-5 mb-lg-0">
                                        <div className="card-body">
                                            <div className="mb-4">
                                                <img className='w-25' src="/images/hycon_assets/react-native.png" alt="native" />
                                            </div>
                                            <div className="mb-4">
                                                <h3>React Native</h3>
                                                <p className="mb-0">React Native for building cross-platform mobile applications, ensuring fast development and smooth user experiences on both iOS and Android.
                                                </p>
                                            </div>
                                            <a href="#!" className="icon-link icon-link-hover link-warning">
                                                
                                                <svg xmlns="" width={14} height={14} fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-md-5">
                                    <div className="card bg-info bg-opacity-10 border-0 mb-5">
                                        <div className="card-body">
                                            <div className="mb-4">
                                                <img className='w-25' src="/images/hycon_assets/react.png" alt="html" />
                                            </div>
                                            <div className="mb-4">
                                                <h3>React</h3>
                                                <p className="mb-0">I uses React for building interactive, responsive user interfaces and creating seamless, dynamic web applications.
                                                </p>
                                            </div>
                                            <a href="#!" className="icon-link icon-link-hover link-info">
                                                
                                                <svg xmlns="" width={14} height={14} fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card bg-success bg-opacity-10 border-0 mb-5 mb-lg-0">
                                        <div className="card-body">
                                            <div className="mb-4">
                                                <img className='w-25' src="/images/hycon_assets/nodejs.png" alt="node" />
                                            </div>
                                            <div className="mb-4">
                                                <h3>Node</h3>
                                                <p className="mb-0">Node.js as a runtime to execute JavaScript code on the server, enabling scalable and efficient backend applications.
                                                </p>
                                            </div>
                                            <a href="#!" className="icon-link icon-link-hover link-warning">
                                                
                                                <svg xmlns="" width={14} height={14} fill="currentColor" className="bi bi-arrow-right text-success" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
