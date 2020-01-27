import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
class ExchangeMoneySuccess extends Component {
  componentDidMount() {
    console.log("this.props.location.state", this.props.location.state)
  }
  render() {
    let { state = {} } = this.props.location
    let { result, user } = state

    if (!result || !result.txid) return null
    return (
      <div id="content" className="py-4">
        <div className="container">
          <h2 className="font-weight-400 text-center mt-3 mb-4">Exchage Money</h2>
          <div className="row">
            <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
              <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                <div className="text-center my-5">
                  <p className="text-center text-success text-20 line-height-07"><i className="fas fa-check-circle"></i></p>
                  <p className="text-center text-success text-8 line-height-07">Success!</p>
                  <p className="text-center text-4">Exchange Complete</p>
                </div>
                <p className="text-center text-3 mb-4">You've Succesfully exchaged <span className="text-4 font-weight-500">{result.amount.toFixed(2)} {result.fromCurrency}</span> to <span className="font-weight-500">{user.label}</span>, See transaction details under <a href="/transactions">Activity</a>.</p>
                <p className="text-center text-3 mb-4">Or you can check your exchage in <br /><a href={`http://bluebarricade-blockchain-explorer.s3-website.us-east-2.amazonaws.com
/#/transactions/${result.blockchainTxId}`} target='_blank'>Blockchain explorer</a></p>
                <Button className="btn btn-primary btn-block"
                  onClick={() => { console.log('butn-clicked==='); this.props.history.push('/send-money') }}
                >Exchage Money Again</Button>
                {/* <button className="btn btn-link btn-block"><i className="fas fa-print"></i> Print</button>  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ExchangeMoneySuccess