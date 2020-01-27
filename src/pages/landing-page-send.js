import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import {
  withRouter
} from 'react-router-dom'


class LandingPageSend extends Component {
    constructor(props) {
      super(props)
    }
    render(){
        return(
            <div id="content">

    <section className="hero-wrap section shadow-md py-4">
      <div className="hero-mask opacity-7 bg-dark"></div>
      <div className="hero-bg" style={{backgroundImage:"url('images/bg/image-6.jpg')"}}></div>
      <div className="hero-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-7 my-auto text-center text-lg-left pb-4 pb-lg-0">
              <h2 className="text-17 text-white"><span className="font-weight-400 text-15">A better way to</span> <br/>
                Send Money</h2>
              <p className="text-4 text-white mb-4"> Send money with a better exchange rate and avoid excessive bank fees.</p>
              <a className="btn btn-outline-light video-btn" href="#" data-src="https://www.youtube.com/embed/7e90gBu4pas" data-toggle="modal" data-target="#videoModal"><span className="text-2 mr-3"><i className="fas fa-play"></i></span>See How it Works</a> </div>
            <div className="col-lg-6 col-xl-5 my-auto">
              <div className="bg-white rounded shadow-md p-4">
                <h3 className="text-5 text-center">Send Money</h3>
                <hr className="mb-4"/>
                <form id="form-send-money" method="post">
                  <div className="form-group">
                    <label for="youSend">You Send</label>
                    <div className="input-group">
                      <div className="input-group-prepend"> <span className="input-group-text">$</span> </div>
                      <input type="text" className="form-control" data-bv-field="youSend" id="youSend" value="1,000" placeholder=""/>
                      <div className="input-group-append"> <span className="input-group-text p-0">
                        <select id="youSendCurrency" data-style="custom-select bg-transparent border-0" data-container="body" data-live-search="true" className="selectpicker form-control bg-transparent" required="">
                          <optgroup label="Popular Currency">
                          <option data-icon="currency-flag currency-flag-usd mr-1" data-subtext="United States dollar" selected="selected" value="">USD</option>
                          <option data-icon="currency-flag currency-flag-aud mr-1" data-subtext="Australian dollar" value="">AUD</option>
                          <option data-icon="currency-flag currency-flag-inr mr-1" data-subtext="Indian rupee" value="">INR</option>
                          </optgroup>
                          <option data-divider="true"></option>
                          <optgroup label="Other Currency">
                          <option data-icon="currency-flag currency-flag-aed mr-1" data-subtext="United Arab Emirates dirham" value="">AED</option>
                          <option data-icon="currency-flag currency-flag-ars mr-1" data-subtext="Argentine peso" value="">ARS</option>
                          <option data-icon="currency-flag currency-flag-aud mr-1" data-subtext="Australian dollar" value="">AUD</option>
                          <option data-icon="currency-flag currency-flag-bdt mr-1" data-subtext="Bangladeshi taka" value="">BDT</option>
                          <option data-icon="currency-flag currency-flag-bgn mr-1" data-subtext="Bulgarian lev" value="">BGN</option>
                          <option data-icon="currency-flag currency-flag-brl mr-1" data-subtext="Brazilian real" value="">BRL</option>
                          <option data-icon="currency-flag currency-flag-cad mr-1" data-subtext="Canadian dollar" value="">CAD</option>
                          <option data-icon="currency-flag currency-flag-chf mr-1" data-subtext="Swiss franc" value="">CHF</option>
                          <option data-icon="currency-flag currency-flag-clp mr-1" data-subtext="Chilean peso" value="">CLP</option>
                          <option data-icon="currency-flag currency-flag-cny mr-1" data-subtext="Chinese yuan" value="">CNY</option>
                          <option data-icon="currency-flag currency-flag-czk mr-1" data-subtext="Czech koruna" value="">CZK</option>
                          <option data-icon="currency-flag currency-flag-dkk mr-1" data-subtext="Danish krone" value="">DKK</option>
                          <option data-icon="currency-flag currency-flag-egp mr-1" data-subtext="Egyptian pound" value="">EGP</option>
                          <option data-icon="currency-flag currency-flag-eur mr-1" data-subtext="Euro" value="">EUR</option>
                          <option data-icon="currency-flag currency-flag-gbp mr-1" data-subtext="British pound" value="">GBP</option>
                          <option data-icon="currency-flag currency-flag-gel mr-1" data-subtext="Georgian lari" value="">GEL</option>
                          <option data-icon="currency-flag currency-flag-ghs mr-1" data-subtext="Ghanaian cedi" value="">GHS</option>
                          <option data-icon="currency-flag currency-flag-hkd mr-1" data-subtext="Hong Kong dollar" value="">HKD</option>
                          <option data-icon="currency-flag currency-flag-hrk mr-1" data-subtext="Croatian kuna" value="">HRK</option>
                          <option data-icon="currency-flag currency-flag-huf mr-1" data-subtext="Hungarian forint" value="">HUF</option>
                          <option data-icon="currency-flag currency-flag-idr mr-1" data-subtext="Indonesian rupiah" value="">IDR</option>
                          <option data-icon="currency-flag currency-flag-ils mr-1" data-subtext="Israeli shekel" value="">ILS</option>
                          <option data-icon="currency-flag currency-flag-inr mr-1" data-subtext="Indian rupee" value="">INR</option>
                          <option data-icon="currency-flag currency-flag-jpy mr-1" data-subtext="Japanese yen" value="">JPY</option>
                          <option data-icon="currency-flag currency-flag-kes mr-1" data-subtext="Kenyan shilling" value="">KES</option>
                          <option data-icon="currency-flag currency-flag-krw mr-1" data-subtext="South Korean won" value="">KRW</option>
                          <option data-icon="currency-flag currency-flag-lkr mr-1" data-subtext="Sri Lankan rupee" value="">LKR</option>
                          <option data-icon="currency-flag currency-flag-mad mr-1" data-subtext="Moroccan dirham" value="">MAD</option>
                          <option data-icon="currency-flag currency-flag-mxn mr-1" data-subtext="Mexican peso" value="">MXN</option>
                          <option data-icon="currency-flag currency-flag-myr mr-1" data-subtext="Malaysian ringgit" value="">MYR</option>
                          <option data-icon="currency-flag currency-flag-ngn mr-1" data-subtext="Nigerian naira" value="">NGN</option>
                          <option data-icon="currency-flag currency-flag-nok mr-1" data-subtext="Norwegian krone" value="">NOK</option>
                          <option data-icon="currency-flag currency-flag-npr mr-1" data-subtext="Nepalese rupee" value="">NPR</option>
                          <option data-icon="currency-flag currency-flag-nzd mr-1" data-subtext="New Zealand dollar" value="">NZD</option>
                          <option data-icon="currency-flag currency-flag-pen mr-1" data-subtext="Peruvian nuevo sol" value="">PEN</option>
                          <option data-icon="currency-flag currency-flag-php mr-1" data-subtext="Philippine peso" value="">PHP</option>
                          <option data-icon="currency-flag currency-flag-pkr mr-1" data-subtext="Pakistani rupee" value="">PKR</option>
                          <option data-icon="currency-flag currency-flag-pln mr-1" data-subtext="Polish złoty" value="">PLN</option>
                          <option data-icon="currency-flag currency-flag-ron mr-1" data-subtext="Romanian leu" value="">RON</option>
                          <option data-icon="currency-flag currency-flag-rub mr-1" data-subtext="Russian rouble" value="">RUB</option>
                          <option data-icon="currency-flag currency-flag-sek mr-1" data-subtext="Swedish krona" value="">SEK</option>
                          <option data-icon="currency-flag currency-flag-sgd mr-1" data-subtext="Singapore dollar" value="">SGD</option>
                          <option data-icon="currency-flag currency-flag-thb mr-1" data-subtext="Thai baht" value="">THB</option>
                          <option data-icon="currency-flag currency-flag-try mr-1" data-subtext="Turkish lira" value="">TRY</option>
                          <option data-icon="currency-flag currency-flag-uah mr-1" data-subtext="Ukrainian hryvnia" value="">UAH</option>
                          <option data-icon="currency-flag currency-flag-ugx mr-1" data-subtext="Ugandan shilling" value="">UGX</option>
                          <option data-icon="currency-flag currency-flag-vnd mr-1" data-subtext="Vietnamese dong" value="">VND</option>
                          <option data-icon="currency-flag currency-flag-zar mr-1" data-subtext="South African rand" value="">ZAR</option>
                          </optgroup>
                        </select>
                        </span> </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="recipientGets">Recipient Gets</label>
                    <div className="input-group">
                      <div className="input-group-prepend"> <span className="input-group-text">$</span> </div>
                      <input type="text" className="form-control" data-bv-field="recipientGets" id="recipientGets" value="1,410.06" placeholder=""/>
                      <div className="input-group-append"> <span className="input-group-text p-0">
                        <select id="recipientCurrency" data-style="custom-select bg-transparent border-0" data-container="body" data-live-search="true" className="selectpicker form-control bg-transparent" required="">
                          <optgroup label="Popular Currency">
                          <option data-icon="currency-flag currency-flag-usd mr-1" data-subtext="United States dollar" value="">USD</option>
                          <option data-icon="currency-flag currency-flag-aud mr-1" data-subtext="Australian dollar" selected="selected"  value="">AUD</option>
                          <option data-icon="currency-flag currency-flag-inr mr-1" data-subtext="Indian rupee" value="">INR</option>
                          </optgroup>
                          <option data-divider="true"></option>
                          <optgroup label="Other Currency">
                          <option data-icon="currency-flag currency-flag-aed mr-1" data-subtext="United Arab Emirates dirham" value="">AED</option>
                          <option data-icon="currency-flag currency-flag-ars mr-1" data-subtext="Argentine peso" value="">ARS</option>
                          <option data-icon="currency-flag currency-flag-aud mr-1" data-subtext="Australian dollar" value="">AUD</option>
                          <option data-icon="currency-flag currency-flag-bdt mr-1" data-subtext="Bangladeshi taka" value="">BDT</option>
                          <option data-icon="currency-flag currency-flag-bgn mr-1" data-subtext="Bulgarian lev" value="">BGN</option>
                          <option data-icon="currency-flag currency-flag-brl mr-1" data-subtext="Brazilian real" value="">BRL</option>
                          <option data-icon="currency-flag currency-flag-cad mr-1" data-subtext="Canadian dollar" value="">CAD</option>
                          <option data-icon="currency-flag currency-flag-chf mr-1" data-subtext="Swiss franc" value="">CHF</option>
                          <option data-icon="currency-flag currency-flag-clp mr-1" data-subtext="Chilean peso" value="">CLP</option>
                          <option data-icon="currency-flag currency-flag-cny mr-1" data-subtext="Chinese yuan" value="">CNY</option>
                          <option data-icon="currency-flag currency-flag-czk mr-1" data-subtext="Czech koruna" value="">CZK</option>
                          <option data-icon="currency-flag currency-flag-dkk mr-1" data-subtext="Danish krone" value="">DKK</option>
                          <option data-icon="currency-flag currency-flag-egp mr-1" data-subtext="Egyptian pound" value="">EGP</option>
                          <option data-icon="currency-flag currency-flag-eur mr-1" data-subtext="Euro" value="">EUR</option>
                          <option data-icon="currency-flag currency-flag-gbp mr-1" data-subtext="British pound" value="">GBP</option>
                          <option data-icon="currency-flag currency-flag-gel mr-1" data-subtext="Georgian lari" value="">GEL</option>
                          <option data-icon="currency-flag currency-flag-ghs mr-1" data-subtext="Ghanaian cedi" value="">GHS</option>
                          <option data-icon="currency-flag currency-flag-hkd mr-1" data-subtext="Hong Kong dollar" value="">HKD</option>
                          <option data-icon="currency-flag currency-flag-hrk mr-1" data-subtext="Croatian kuna" value="">HRK</option>
                          <option data-icon="currency-flag currency-flag-huf mr-1" data-subtext="Hungarian forint" value="">HUF</option>
                          <option data-icon="currency-flag currency-flag-idr mr-1" data-subtext="Indonesian rupiah" value="">IDR</option>
                          <option data-icon="currency-flag currency-flag-ils mr-1" data-subtext="Israeli shekel" value="">ILS</option>
                          <option data-icon="currency-flag currency-flag-inr mr-1" data-subtext="Indian rupee" value="">INR</option>
                          <option data-icon="currency-flag currency-flag-jpy mr-1" data-subtext="Japanese yen" value="">JPY</option>
                          <option data-icon="currency-flag currency-flag-kes mr-1" data-subtext="Kenyan shilling" value="">KES</option>
                          <option data-icon="currency-flag currency-flag-krw mr-1" data-subtext="South Korean won" value="">KRW</option>
                          <option data-icon="currency-flag currency-flag-lkr mr-1" data-subtext="Sri Lankan rupee" value="">LKR</option>
                          <option data-icon="currency-flag currency-flag-mad mr-1" data-subtext="Moroccan dirham" value="">MAD</option>
                          <option data-icon="currency-flag currency-flag-mxn mr-1" data-subtext="Mexican peso" value="">MXN</option>
                          <option data-icon="currency-flag currency-flag-myr mr-1" data-subtext="Malaysian ringgit" value="">MYR</option>
                          <option data-icon="currency-flag currency-flag-ngn mr-1" data-subtext="Nigerian naira" value="">NGN</option>
                          <option data-icon="currency-flag currency-flag-nok mr-1" data-subtext="Norwegian krone" value="">NOK</option>
                          <option data-icon="currency-flag currency-flag-npr mr-1" data-subtext="Nepalese rupee" value="">NPR</option>
                          <option data-icon="currency-flag currency-flag-nzd mr-1" data-subtext="New Zealand dollar" value="">NZD</option>
                          <option data-icon="currency-flag currency-flag-pen mr-1" data-subtext="Peruvian nuevo sol" value="">PEN</option>
                          <option data-icon="currency-flag currency-flag-php mr-1" data-subtext="Philippine peso" value="">PHP</option>
                          <option data-icon="currency-flag currency-flag-pkr mr-1" data-subtext="Pakistani rupee" value="">PKR</option>
                          <option data-icon="currency-flag currency-flag-pln mr-1" data-subtext="Polish złoty" value="">PLN</option>
                          <option data-icon="currency-flag currency-flag-ron mr-1" data-subtext="Romanian leu" value="">RON</option>
                          <option data-icon="currency-flag currency-flag-rub mr-1" data-subtext="Russian rouble" value="">RUB</option>
                          <option data-icon="currency-flag currency-flag-sek mr-1" data-subtext="Swedish krona" value="">SEK</option>
                          <option data-icon="currency-flag currency-flag-sgd mr-1" data-subtext="Singapore dollar" value="">SGD</option>
                          <option data-icon="currency-flag currency-flag-thb mr-1" data-subtext="Thai baht" value="">THB</option>
                          <option data-icon="currency-flag currency-flag-try mr-1" data-subtext="Turkish lira" value="">TRY</option>
                          <option data-icon="currency-flag currency-flag-uah mr-1" data-subtext="Ukrainian hryvnia" value="">UAH</option>
                          <option data-icon="currency-flag currency-flag-ugx mr-1" data-subtext="Ugandan shilling" value="">UGX</option>
                          <option data-icon="currency-flag currency-flag-vnd mr-1" data-subtext="Vietnamese dong" value="">VND</option>
                          <option data-icon="currency-flag currency-flag-zar mr-1" data-subtext="South African rand" value="">ZAR</option>
                          </optgroup>
                        </select>
                        </span> </div>
                    </div>
                  </div>
                  <p className="text-muted mb-1">Total fees  - <span className="font-weight-500">7.21 USD</span></p>
                  <p className="text-muted">The current exchange rate is <span className="font-weight-500">1 USD = 1.42030 AUD</span></p>
                  <Button className="btn btn-primary btn-block"
                        onClick={()=>{console.log('butn-clicked==='); this.props.history.push('/send-money-confirm')}}
                  >Continue</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section bg-white">
      <div className="container">
        <h2 className="text-9 text-center"> The simple way to send money</h2>
        <p className="text-4 text-center mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="featured-box style-3">
              <div className="featured-box-icon text-light"><span className="w-100 text-20 font-weight-500">1</span></div>
              <h3>Sign Up Your Account</h3>
              <p className="text-3">Become a register user first, then log in to your account and enter your card or bank details that is required for you.</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="featured-box style-3">
              <div className="featured-box-icon text-light"><span className="w-100 text-20 font-weight-500">2</span></div>
              <h3>Select Your Recipient</h3>
              <p className="text-3">Enter your recipient's email address then add an amount with currency to send securely.</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4 mb-sm-0">
            <div className="featured-box style-3">
              <div className="featured-box-icon text-light"><span className="w-100 text-20 font-weight-500">3</span></div>
              <h3>Send Money</h3>
              <p className="text-3">After sending money, the recipient will be notified via an email when money has been transferred to their account.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-2"><a href="#" className="btn btn-outline-primary shadow-none text-uppercase">Sign up Now</a></div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h2 className="text-9 text-center">Why choose Greenbay Transfer?</h2>
        <p className="text-4 text-center mb-5">Here’s Top 4 reasons why using a Greenbay Transfer account for manage your money.</p>
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="hero-wrap section h-100 p-5 rounded">
              <div className="hero-mask rounded opacity-6 bg-dark"></div>
              <div className="hero-bg rounded" style={{backgroundImage:"url('./images/bg/image-6.jpg')"}}></div>
              <div className="hero-content">
                <h2 className="text-6 text-white mb-3">Why Greenbay Transfer?</h2>
                <p className="text-light mb-5">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.</p>
                <h2 className="text-6 text-white mb-3">Send Money with Greenbay Transfer</h2>
                <p className="text-light">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.</p>
                <p className="text-light mb-0">Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="featured-box style-1">
              <div className="featured-box-icon text-primary"> <i className="far fa-check-circle"></i> </div>
              <h3>Over 180 countries</h3>
              <p>Essent lisque persius interesset his et, in quot quidam.</p>
            </div>
            <div className="featured-box style-1">
              <div className="featured-box-icon text-primary"> <i className="far fa-check-circle"></i> </div>
              <h3>Lower Fees</h3>
              <p>Lisque persius interesset his et, in quot quidam persequeris.</p>
            </div>
            <div className="featured-box style-1">
              <div className="featured-box-icon text-primary"> <i className="far fa-check-circle"></i> </div>
              <h3>Easy to Use</h3>
              <p>Essent lisque persius interesset his et, in quot quidam.</p>
            </div>
            <div className="featured-box style-1">
              <div className="featured-box-icon text-primary"> <i className="far fa-check-circle"></i> </div>
              <h3>Faster Payments</h3>
              <p>Quidam lisque persius interesset his et, in quot quidam.</p>
            </div>
            <div className="featured-box style-1">
              <div className="featured-box-icon text-primary"> <i className="far fa-check-circle"></i> </div>
              <h3>100% secure</h3>
              <p>Essent lisque persius interesset his et, in quot quidam.</p>
            </div>
            <div className="featured-box style-1">
              <div className="featured-box-icon text-primary"> <i className="far fa-check-circle"></i> </div>
              <h3>24/7 customer service</h3>
              <p>Quidam lisque persius interesset his et, in quot quidam.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero-wrap section shadow-md">
      <div className="hero-mask opacity-9 bg-primary"></div>
      <div className="hero-bg" style={{backgroundImage:"url('images/bg/image-1.jpg')"}}></div>
      <div className="hero-content py-3 py-lg-5 my-3 my-lg-5">
        <div className="container text-center">
          <h2 className="text-9 text-white mb-4 mb-lg-5">How does send money work?</h2>
          <a className="video-btn d-inline-flex" href="#" data-src="https://www.youtube.com/embed/7e90gBu4pas" data-toggle="modal" data-target="#videoModal"> <span className="btn-video-play bg-white shadow-md rounded-circle m-auto"><i className="fas fa-play"></i></span> </a> </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h2 className="text-9 text-center">What people say about Greenbay Transfer</h2>
        <p className="text-4 text-center mb-4">A payments experience people love to talk about</p>
        <div className="row">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <div className="owl-carousel owl-theme" data-autoplay="true" data-nav="true" data-loop="true" data-margin="30" data-stagepadding="5" data-items-xs="1" data-items-sm="1" data-items-md="1" data-items-lg="1">
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
              <div className="item">
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
        </div>
      </div>
    </section>
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-9 text-center">Frequently Asked Questions</h2>
        <p className="text-4 text-center mb-4 mb-sm-5">Can't find it here? Check out our <a href="/help">Help center</a></p>
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <hr className="mb-0"/>
            <div className="accordion accordion-alternate arrow-right" id="popularTopics">
              <div className="card">
                <div className="card-header" id="heading1">
                  <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">What is Greenbay Transfer?</a> </h5>
                </div>
                <div id="collapse1" className="collapse" aria-labelledby="heading1" data-parent="#popularTopics">
                  <div className="card-body"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading2">
                  <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">How to send money online?</a> </h5>
                </div>
                <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#popularTopics">
                  <div className="card-body"> Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading3">
                  <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">Is my money safe with Greenbay Transfer?</a> </h5>
                </div>
                <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#popularTopics">
                  <div className="card-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading4">
                  <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">How much fees does Greenbay Transfer charge?</a> </h5>
                </div>
                <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#popularTopics">
                  <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading5">
                  <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">What is the fastest way to send money abroad?</a> </h5>
                </div>
                <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#popularTopics">
                  <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading6">
                  <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">Can I open an Greenbay Transfer account for business?</a> </h5>
                </div>
                <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#popularTopics">
                  <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. </div>
                </div>
              </div>
            </div>
            <hr className="mt-0"/>
          </div>
        </div>
        <div className="text-center mt-4"><a href="#" className="btn-link text-4">See more FAQ<i className="fas fa-chevron-right text-2 ml-2"></i></a></div>
      </div>
    </section>
    <section className="hero-wrap py-5">
      <div className="hero-mask opacity-8 bg-dark"></div>
      <div className="hero-bg" style={{backgroundImage:"url('images/bg/image-2.jpg')"}}></div>
      <div className="hero-content">
        <div className="container d-md-flex text-center text-md-left align-items-center justify-content-center">
          <h2 className="text-6 font-weight-400 text-white mb-3 mb-md-0">Sign up today and get your first transaction fee free!</h2>
          <a href="#" className="btn btn-outline-light text-nowrap ml-4">Sign up Now</a> </div>
      </div>
    </section>

            </div>
        )
    }
}

export default withRouter(LandingPageSend)