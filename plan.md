# Plan

## Client

* Components
  * App
  * Login
  * Profile
* Routing
  * HashRouter
  * Home /
  * /profile
* Redux
  * store
  * reducer
  * action / action creator
    * payload
  * Provider
  * connect
    * mapStateToProps
    * mapDispatchToProps
* packages
  * axios
  * react-router-dom
  * redux, react-redux
* css
  * login/home
    * logo size
  * profile page
    * flex

## Server

* controllers
  * user controller
* index
  * routes
    * /api/profile
    * /auth/callback
    * /api/logout

* queries
  * create user
  * lookup user

* packages
  * body-parser
  * express
  * massive
  * express-session
  * dotenv

## Database

* tables
  * users
    * id
    * name
    * email
    * picture

## External

* .env
  * connection string
  * auth0 domain
  * auth0 client id
  * auth0 client secret
  * session secret