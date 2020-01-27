import React, { Component } from 'react'

class LandingPageReceive extends Component {
    render(){
        return(
            <div id="content">    
            {/* <section className="section bg-white">
              <div className="container">
                <div className="row no-gutters">
                  <div className="col-lg-6 order-2 order-lg-1">
                    <div className="row">
                      <div className="col-6 col-lg-7 ml-auto mb-lg-n5"> <img  src="images/greenbay-intro-image1.png"  alt="banner"/> </div>
                      <div className="col-6 col-lg-8 mt-lg-n5"> <img src="images/greenbay-intro-image2.png"  alt="banner"/> </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex order-1 order-lg-2">
                    <div className="my-auto px-0 px-lg-5">
                      <h2 className="text-9 mb-4">BUSINESS ENTREPRENEUR : MIKAEL BRAMSTEDT </h2>
                      <p className="tex-3" >Former Business Architect Swish C2B Nordea, Business Architect Payment transactions and multicurrency Swedbank.
                      </p>
                     </div>
                  </div>
                </div>
              </div>
            </section> */}
            <section className="section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 d-flex">
                    <div className="my-auto px-0 px-lg-5 mx-2">
                      <h2 className="text-9">Who we are</h2>
                      <p className="text-4">Greenbay Donation is a platform that brings transparency to global funding and payments through blockchain technology.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 my-auto text-center"> <img style={{backgroundColor:"transparent"}}  src="images/greenbay-intro-image1.png" alt=""/> </div>
                </div>
              </div>
            </section>
            <section className="section bg-white">
              <div className="container">
                <div className="row no-gutters">
                  <div className="col-lg-6 order-2 order-lg-1">
                    <div className="row">
                      <div className="col-6 col-lg-7 ml-auto mb-lg-n5"> <img  src="images/greenbay-intro-image1.png"  alt="banner"/> </div>
                      <div className="col-6 col-lg-8 mt-lg-n5"> <img src="images/greenbay-intro-image2.png"  alt="banner"/> </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex order-1 order-lg-2">
                    <div className="my-auto px-0 px-lg-5">
                      <h2 className="text-9 mb-4">Receiving</h2>
                      <p className="tex-3" >GreenBay P&DT Peer-to-peer (P2P) money transfer and payment service GreenBay IS NOT STORING your credit/debit card number
                      </p>
                      <p className="tex-3" >Originator Originating Financial Institution (OFI) Market Maker Digital Asset GreenBay Business Logic on IBM Blockchain World Wire Digital Asset Market Maker Receiving Financial Institution (RFI) recipient
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <section className="section">
              <div className="container">
                <h2 className="text-9 text-center">Leadership</h2>
                <p className="text-4 text-center mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="row">
                  <div className="col-sm-6 col-md-3 text-center mb-4 mb-md-0">
                    <div className="team rounded d-inline-block"> <img className="img-fluid rounded" alt="" src="images/team/leader.jpg"/>
                      <h3>Neil Patel</h3>
                      <p className="text-muted">CEO &amp; Founder</p>
                      <ul className="social-icons social-icons-sm d-inline-flex">
                        <li className="social-icons-facebook"><a data-toggle="tooltip" href="#" target="_blank" title="" data-original-title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="social-icons-twitter"><a data-toggle="tooltip" href="" target="_blank" title="" data-original-title="Twitter"><i className="fab fa-twitter"></i></a></li>
                        <li className="social-icons-google"><a data-toggle="tooltip" href="" target="_blank" title="" data-original-title="Google"><i className="fab fa-google"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 text-center mb-4 mb-md-0">
                    <div className="team rounded d-inline-block"> <img className="img-fluid rounded" alt="" src="images/team/leader-2.jpg"/>
                      <h3>James Maxwell</h3>
                      <p className="text-muted">Co-Founder</p>
                      <ul className="social-icons social-icons-sm d-inline-flex">
                        <li className="social-icons-facebook"><a data-toggle="tooltip" href="" target="_blank" title="" data-original-title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="social-icons-twitter"><a data-toggle="tooltip" href="" target="_blank" title="" data-original-title="Twitter"><i className="fab fa-twitter"></i></a></li>
                        <li className="social-icons-google"><a data-toggle="tooltip" href="" target="_blank" title="" data-original-title="Google"><i className="fab fa-google"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 text-center mb-4 mb-md-0">
                    <div className="team rounded d-inline-block"> <img className="img-fluid rounded" alt="" src="images/team/leader-3.jpg"/>
                      <h3>Ruby Clinton</h3>
                      <p className="text-muted">Chief Marketing Officer</p>
                      <ul className="social-icons social-icons-sm d-inline-flex">
                        <li className="social-icons-facebook"><a data-toggle="tooltip" href="" target="_blank" title="" data-original-title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="social-icons-twitter"><a data-toggle="tooltip" href="" target="_blank" title="" data-original-title="Twitter"><i className="fab fa-twitter"></i></a></li>
                        <li className="social-icons-google"><a data-toggle="tooltip" href="" target="_blank" title="" data-original-title="Google"><i className="fab fa-google"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 text-center mb-4 mb-md-0">
                    <div className="team rounded d-inline-block"> <img className="img-fluid rounded" alt="" src="images/team/leader-4.jpg"/>
                      <h3>Miky Sheth</h3>
                      <p className="text-muted">General Manager</p>
                      <ul className="social-icons social-icons-sm d-inline-flex">
                        <li className="social-icons-facebook"><a data-toggle="tooltip" href="" target="_blank" title="" data-original-title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="social-icons-twitter"><a data-toggle="tooltip" href="" target="_blank" title="" data-original-title="Twitter"><i className="fab fa-twitter"></i></a></li>
                        <li className="social-icons-google"><a data-toggle="tooltip" href="" target="_blank" title="" data-original-title="Google"><i className="fab fa-google"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section bg-white">
              <div className="container">
                <h2 className="text-9 text-center">Our Investors</h2>
                <p className="text-4 text-center mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="brands-grid separator-border">
                  <div className="row align-items-center">
                    <div className="col-6 col-sm-4 col-lg-2 text-center"><a href=""><img className="img-fluid" src="images/partner/partner-1.png" alt="Brands"/></a></div>
                    <div className="col-6 col-sm-4 col-lg-2 text-center"><a href=""><img className="img-fluid" src="images/partner/partner-2.png" alt="Brands"/></a></div>
                    <div className="col-6 col-sm-4 col-lg-2 text-center"><a href=""><img className="img-fluid" src="images/partner/partner-3.png" alt="Brands"/></a></div>
                    <div className="col-6 col-sm-4 col-lg-2 text-center"><a href=""><img className="img-fluid" src="images/partner/partner-4.png" alt="Brands"/></a></div>
                    <div className="col-6 col-sm-4 col-lg-2 text-center"><a href=""><img className="img-fluid" src="images/partner/partner-5.png" alt="Brands"/></a></div>
                    <div className="col-6 col-sm-4 col-lg-2 text-center"><a href=""><img className="img-fluid" src="images/partner/partner-6.png" alt="Brands"/></a></div>
                    <div className="col-6 col-sm-4 col-lg-2 text-center"><a href=""><img className="img-fluid" src="images/partner/partner-7.png" alt="Brands"/></a></div>
                    <div className="col-6 col-sm-4 col-lg-2 text-center"><a href=""><img className="img-fluid" src="images/partner/partner-8.png" alt="Brands"/></a></div>
                    <div className="col-6 col-sm-4 col-lg-2 text-center"><a href=""><img className="img-fluid" src="images/partner/partner-9.png" alt="Brands"/></a></div>
                    <div className="col-6 col-sm-4 col-lg-2 text-center"><a href=""><img className="img-fluid" src="images/partner/partner-10.png" alt="Brands"/></a></div>
                    <div className="col-6 col-sm-4 col-lg-2 text-center"><a href=""><img className="img-fluid" src="images/partner/partner-11.png" alt="Brands"/></a></div>
                    <div className="col-6 col-sm-4 col-lg-2 text-center"><a href=""><img className="img-fluid" src="images/partner/partner-1.png" alt="Brands"/></a></div>
                  </div>
                </div>
              </div>
            </section> */}
            <section className="section">
              <div className="container">
                <h2 className="text-9 text-center">What people are saying about Greenbay Transfer</h2>
                <p className="text-4 text-center mb-4">A payments experience people love to talk about</p>
                <div className="owl-carousel owl-theme" data-autoplay="true" data-nav="true" data-loop="true" data-margin="30" data-slideby="2" data-stagepadding="5" data-items-xs="1" data-items-sm="1" data-items-md="2" data-items-lg="2">
                  <div className="item">
                    <div className="testimonial rounded text-center p-4">
                      <p className="text-4">“Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.”</p>
                      <strong className="d-block font-weight-500">Jay Shah</strong> <span className="text-muted">Founder at Icomatic Pvt Ltd</span> </div>
                  </div>
                  <div className="item">
                    <div className="testimonial rounded text-center p-4">
                      <p className="text-4">“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.”</p>
                      <strong className="d-block font-weight-500">Patrick Cary</strong> <span className="text-muted">Freelancer from USA</span> </div>
                  </div>
                  <div className="item mh-100">
                    <div className="testimonial rounded text-center p-4">
                      <p className="text-4">“Fast easy to use transfers to a different currency. Much better value that the banks.”</p>
                      <strong className="d-block font-weight-500">De Mortel</strong> <span className="text-muted">Online Retail</span> </div>
                  </div>
                  <div className="item">
                    <div className="testimonial rounded text-center p-4">
                      <p className="text-4">“I have used them twice now. Good rates, very efficient service and it denies high street banks an undeserved windfall. Excellent.”</p>
                      <strong className="d-block font-weight-500">Chris Tom</strong> <span className="text-muted">User from UK</span> </div>
                  </div>
                  <div className="item">
                    <div className="testimonial rounded text-center p-4">
                      <p className="text-4">“It's a real good idea to manage your money by Greenbay Transfer. The rates are fair and you can carry out the transactions without worrying!”</p>
                      <strong className="d-block font-weight-500">Mauri Lindberg</strong> <span className="text-muted">Freelancer from Australia</span> </div>
                  </div>
                  <div className="item">
                    <div className="testimonial rounded text-center p-4">
                      <p className="text-4">“Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. I'm only using it for sending money to friends at the moment.”</p>
                      <strong className="d-block font-weight-500">Dennis Jacques</strong> <span className="text-muted">User from USA</span> </div>
                  </div>
                </div>
                <div className="text-center mt-4"><a href="#" className="btn-link text-4">See more people review<i className="fas fa-chevron-right text-2 ml-2"></i></a></div>
              </div>
            </section>
            <section className="section bg-primary py-5">
              <div className="container text-center">
                <div className="row">
                  <div className="col-sm-6 col-md-3">
                    <div className="featured-box text-center">
                      <div className="featured-box-icon text-light mb-2"> <i className="fas fa-globe"></i> </div>
                      <h4 className="text-12 text-white mb-0">180+</h4>
                      <p className="text-4 text-white mb-0">Countries</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="featured-box text-center">
                      <div className="featured-box-icon text-light mb-2"> <i className="fas fa-dollar-sign"></i> </div>
                      <h4 className="text-12 text-white mb-0">120</h4>
                      <p className="text-4 text-white mb-0">Currencies</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 mt-4 mt-md-0">
                    <div className="featured-box text-center">
                      <div className="featured-box-icon text-light mb-2"> <i className="fas fa-users"></i> </div>
                      <h4 className="text-12 text-white mb-0">2.5M</h4>
                      <p className="text-4 text-white mb-0">Users</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 mt-4 mt-md-0">
                    <div className="featured-box text-center">
                      <div className="featured-box-icon text-light mb-2"> <i className="far fa-life-ring"></i> </div>
                      <h4 className="text-12 text-white mb-0">24X7</h4>
                      <p className="text-4 text-white mb-0">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
    }
}

export default LandingPageReceive