import React, { Component } from 'react'

class LandingPageFee extends Component {
    render(){
        return(
            <div id="content">
            <section className="section py-3 my-3 py-sm-5 my-sm-5">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                    <div className="bg-light shadow-sm rounded p-4 text-center"> <span className="d-block text-17 text-primary mt-2 mb-3"><i className="fas fa-user-circle"></i></span>
                      <h3 className="text-body text-4">My Account</h3>
                      <p className="mb-0"><a className="text-muted btn-link" href="">See articles<span className="text-1 ml-1"><i className="fas fa-chevron-right"></i></span></a></p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                    <div className="bg-light shadow-sm rounded p-4 text-center"> <span className="d-block text-17 text-primary mt-2 mb-3"><i className="fas fa-money-check-alt"></i></span>
                      <h3 className="text-body text-4">Payment</h3>
                      <p className="mb-0"><a className="text-muted btn-link" href="">See articles<span className="text-1 ml-1"><i className="fas fa-chevron-right"></i></span></a></p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4 mb-sm-0">
                    <div className="bg-light shadow-sm rounded p-4 text-center"> <span className="d-block text-17 text-primary mt-2 mb-3"><i className="fas fa-shield-alt"></i></span>
                      <h3 className="text-body text-4">Security</h3>
                      <p className="mb-0"><a className="text-muted btn-link" href="">See articles<span className="text-1 ml-1"><i className="fas fa-chevron-right"></i></span></a></p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="bg-light shadow-sm rounded p-4 text-center"> <span className="d-block text-17 text-primary mt-2 mb-3"><i className="fas fa-credit-card"></i></span>
                      <h3 className="text-body text-4">Payment Methods</h3>
                      <p className="mb-0"><a className="text-muted btn-link" href="">See articles<span className="text-1 ml-1"><i className="fas fa-chevron-right"></i></span></a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section bg-white">
              <div className="container">
                <h2 className="text-9 text-center">Popular Topics</h2>
                <p className="text-4 text-center mb-5">Lisque persius interesset his et, in quot quidam persequeris.</p>
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="accordion accordion-alternate" id="popularTopics">
                          <div className="card">
                            <div className="card-header" id="heading1">
                              <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">I forgot the password for my account.</a> </h5>
                            </div>
                            <div id="collapse1" className="collapse" aria-labelledby="heading1" data-parent="#popularTopics">
                              <div className="card-body"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="heading2">
                              <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">How do I withdraw funds from my account?</a> </h5>
                            </div>
                            <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#popularTopics">
                              <div className="card-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="heading3">
                              <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">How do I link bank account to my account?</a> </h5>
                            </div>
                            <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#popularTopics">
                              <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="heading4">
                              <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">How do I confirm the email address on my account?</a> </h5>
                            </div>
                            <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#popularTopics">
                              <div className="card-body"> Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="heading5">
                              <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">How do I receive payments?</a> </h5>
                            </div>
                            <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#popularTopics">
                              <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="accordion accordion-alternate" id="popularTopics2">
                          <div className="card">
                            <div className="card-header" id="heading6">
                              <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">How Can I View My Payments History?</a> </h5>
                            </div>
                            <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#popularTopics2">
                              <div className="card-body"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="heading7">
                              <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">Where is my refund?</a> </h5>
                            </div>
                            <div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#popularTopics2">
                              <div className="card-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="heading8">
                              <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">How do I request payments or send an invoice?</a> </h5>
                            </div>
                            <div id="collapse8" className="collapse" aria-labelledby="heading8" data-parent="#popularTopics2">
                              <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="heading9">
                              <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapse9">Forgot my password! What next?</a> </h5>
                            </div>
                            <div id="collapse9" className="collapse" aria-labelledby="heading9" data-parent="#popularTopics2">
                              <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="heading10">
                              <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse10" aria-expanded="false" aria-controls="collapse10">Closing Your Account</a> </h5>
                            </div>
                            <div id="collapse10" className="collapse" aria-labelledby="heading10" data-parent="#popularTopics2">
                              <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4"><a href="#" className="btn-link text-4">See more topics<i className="fas fa-chevron-right text-2 ml-2"></i></a></div>
              </div>
            </section>
            <section className="section py-4 my-4 py-sm-5 my-sm-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="bg-white shadow-sm rounded pl-4 pl-sm-0 pr-4 py-4">
                      <div className="row no-gutters">
                        <div className="col-12 col-sm-auto text-13 text-light d-flex align-items-center justify-content-center"> <span className="px-4 ml-3 mr-2 mb-4 mb-sm-0"><i className="far fa-envelope"></i></span> </div>
                        <div className="col text-center text-sm-left">
                          <div className="">
                            <h5 className="text-3 text-body">Can't find what you're looking for?</h5>
                            <p className="text-muted mb-0">We want to answer all of your queries. Get in touch and we'll get back to you as soon as we can. <a className="btn-link" href="">Contact us<span className="text-1 ml-1"><i className="fas fa-chevron-right"></i></span></a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-4 mt-lg-0">
                    <div className="bg-white shadow-sm rounded pl-4 pl-sm-0 pr-4 py-4">
                      <div className="row no-gutters">
                        <div className="col-12 col-sm-auto text-13 text-light d-flex align-items-center justify-content-center"> <span className="px-4 ml-3 mr-2 mb-4 mb-sm-0"><i className="far fa-comment-alt"></i></span> </div>
                        <div className="col text-center text-sm-left">
                          <div className="">
                            <h5 className="text-3 text-body">Technical questions</h5>
                            <p className="text-muted mb-0">Have some technical questions? Hit us up on live chat or whatever. <a className="btn-link" href="">Click here<span className="text-1 ml-1"><i className="fas fa-chevron-right"></i></span></a></p>
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
}

export default LandingPageFee