import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import SimpleApp from './SimpleApp'
import Home from './pages/home';
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact-us';
import Dashboard from './pages/dashboard';
import Fees from './pages/fees';
import Help from './pages/help';
import Login from './pages/login';
import Profile from './pages/profile';
import Signup from './pages/signup';
import Transactions from './pages/transactions';
import LiveRates from './pages/live-rates'
import DepositMoney from './pages/deposit-money';
import DepositMoneyConfirm from './pages/deposit-money-confirm';
import DepositMoneySuccess from './pages/deposit-money-success';
import DepositMoneyFailure from './pages/deposit-money-failure';

import LandingPageReceive from './pages/landing-page-receive';
import LandingPageSend from './pages/landing-page-send';

import RequestMoney from './pages/request-money';
import RequestMoneyConfirm from './pages/request-money-confirm';
import RequestMoneySuccess from './pages/request-money-success';

import SendMoney from './pages/send-money';
import SendMoneyConfirm from './pages/send-money-confirm';
import SendMoneySuccess from './pages/send-money-success';
import SendMoneyFailure from './pages/send-money-failure';

import ExchangeMoney from './pages/exchange-money';
import ExchangeMoneyConfirm from './pages/exchange-money-confirm';
import ExchangeMoneySuccess from './pages/exchange-money-success';
import ExchangeMoneyFailure from './pages/exchange-money-failure';

import WithdrawMoney from './pages/withdraw-money';
import WithdrawMoneyConfirm from './pages/withdraw-money-confirm';
import WalletMoney from './pages/wallet-money';
import WithdrawMoneySuccess from './pages/withdraw-money-success';
import WithdrawMoneyFailure from './pages/withdraw-money-failure';
import AccountBankInfo from './pages/profile-cards-bank';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

const Routes = () => (
  <Switch>
    <AppRoute exact path="/" layout={App} component={Home} />
    <AppRoute exact path="/about-us" layout={App} component={AboutUs} />
    <AppRoute exact path="/contact-us" layout={App} component={ContactUs} />
    <AppRoute exact path="/help" layout={App} component={Help} />
    <AppRoute exact path="/fees" layout={App} component={Fees} />
    <AppRoute exact path="/dashboard" layout={App} component={Dashboard} />
    <AppRoute exact path="/profile" layout={App} component={Profile} />
    <AppRoute exact path="/transactions" layout={App} component={Transactions} />
    <AppRoute exact path="/live-rates" layout={App} component={LiveRates} />

    <AppRoute exact path="/landing-page-receive" layout={App} component={LandingPageReceive} />
    <AppRoute exact path="/landing-page-send" layout={App} component={LandingPageSend} />

    <AppRoute exact path="/deposit-money" layout={App} component={DepositMoney} />
    <AppRoute exact path="/deposit-money-success" layout={App} component={DepositMoneySuccess} />
    <AppRoute exact path="/deposit-money-failure" layout={App} component={DepositMoneyFailure} />
    <AppRoute exact path="/deposit-money-confirm" layout={App} component={DepositMoneyConfirm} />

    <AppRoute exact path="/send-money" layout={App} component={SendMoney} />
    <AppRoute exact path="/send-money-success" layout={App} component={SendMoneySuccess} />
    <AppRoute exact path="/send-money-confirm" layout={App} component={SendMoneyConfirm} />
    <AppRoute exact path="/send-money-failure" layout={App} component={SendMoneyFailure} />

    <AppRoute exact path="/withdraw-money" layout={App} component={WithdrawMoney} />
    <AppRoute exact path="/withdraw-money-confirm" layout={App} component={WithdrawMoneyConfirm} />
    <AppRoute exact path="/withdraw-money-success" layout={App} component={WithdrawMoneySuccess} />
    <AppRoute exact path="/withdraw-money-failure" layout={App} component={WithdrawMoneyFailure} />

    <AppRoute exact path="/wallet-money" layout={App} component={WalletMoney} />

    <AppRoute exact path="/request-money" layout={App} component={RequestMoney} />
    <AppRoute exact path="/request-money-confirm" layout={App} component={RequestMoneyConfirm} />
    <AppRoute exact path="/request-money-success" layout={App} component={RequestMoneySuccess} />

    <AppRoute exact path="/exchange-money" layout={App} component={ExchangeMoney} />
    <AppRoute exact path="/exchange-money-confirm" layout={App} component={ExchangeMoneyConfirm} />
    <AppRoute exact path="/exchange-money-success" layout={App} component={ExchangeMoneySuccess} />
    <AppRoute exact path="/exchange-money-failure" layout={App} component={ExchangeMoneyFailure} />

    <AppRoute exact path="/login" layout={SimpleApp} component={Login} />
    <AppRoute exact path="/signup" layout={SimpleApp} component={Signup} />
    <AppRoute exact path="/account_bank" layout={SimpleApp} component={AccountBankInfo} />
  </Switch>
)

export default Routes