import React from 'react'

const Portfolio = () => {
  return (
    <div>
  <section className="my-xl-10 py-xl-9 py-10">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 offset-xl-3 col-md-12">
          <div className="text-center mb-lg-7 mb-5">
            <small className="text-uppercase ls-md fw-semibold text-body-tertiary">Portfolio</small>
            <h2 className="mt-5 px-lg-10 px-6">
              A curated collection of work from
              <span className="text-primary"> my portfolio.</span>
            </h2>
            <p className="mb-0">
              Here are a handful of items from my portfolio
              <span className="text-dark"></span>
            </p>
          </div>
        </div>
      </div>
      <div className="table-responsive-xl pb-5">
        <div className="row flex-nowrap">
          <div className="col-lg-4 col-md-6">
            <a href="https://allser.com" target='_blank'>
              <div className="card card-lift">
                <div className="card-body pb-0">
                  <div className="mb-6">
                    <h3 className="h4 mb-4">Allsers: Find and hire artisans, service providers.</h3>
                    <span className="badge bg-light-subtle border border-light-subtle text-light-emphasis rounded-2">Web development</span>
                    <span className="badge bg-light-subtle border border-light-subtle text-light-emphasis rounded-2">PHP</span>
                    <span className="badge bg-light-subtle border border-light-subtle text-light-emphasis rounded-2">Mysql</span>
                    <span className="badge bg-light-subtle border border-light-subtle text-light-emphasis rounded-2">PostgreSQL</span>
                  </div>
                  <img src="/images/hycon_assets/allser.png" alt="portfolio" className="img-fluid rounded-top shadow-sm" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="https://fingerbite-buvhrrm4i-hycons-projects.vercel.app/" target='_blank'>
              <div className="card card-lift">
                <div className="card-body pb-0">
                  <div className="mb-6">
                    <h3 className="h4 mb-4">Fingerbite: Quick, easy, and secure food ordering platform.</h3>
                    <span className="badge bg-light-subtle border border-light-subtle text-light-emphasis rounded-2">Frontend Development</span>
                    <span className="badge bg-light-subtle border border-light-subtle text-light-emphasis rounded-2"></span>
                  </div>
                  <img src="/images/hycon_assets/fingerbite.png" alt="portfolio" className="img-fluid rounded-top shadow-sm" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="https://github.com/hyconcodes/gym_system.git" target='_blank'>
              <div className="card card-lift">
                <div className="card-body pb-0">
                  <div className="mb-6">
                    <h3 className="h4 mb-4">FitNezz: Quick, easy, and secure food ordering platform.</h3>
                    <span className="badge bg-light-subtle border border-light-subtle text-light-emphasis rounded-2">Laravel</span>
                    <span className="badge bg-light-subtle border border-light-subtle text-light-emphasis rounded-2">Mysql</span>
                  </div>
                  <img src="/images/hycon_assets/fitnezz.png" alt="portfolio" className="img-fluid rounded-top shadow-sm" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="https://reactaskfy.vercel.app/" target='_blank'>
              <div className="card card-lift">
                <div className="card-body pb-0">
                  <div className="mb-6">
                    <h3 className="h4 mb-4">Tasfy: Simplify task management, stay organized, boost productivity</h3>
                    <span className="badge bg-light-subtle border border-light-subtle text-light-emphasis rounded-2">ReactJS
                      </span>
                    <span className="badge bg-light-subtle border border-light-subtle text-light-emphasis rounded-2">PostgreSQL</span>
                  </div>
                  <img src="/images/hycon_assets/taskfy.png" alt="portfolio" className="img-fluid rounded-top shadow-sm" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Portfolio
