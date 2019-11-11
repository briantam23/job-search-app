[![Build Status](https://travis-ci.com/briantam23/mckinsey-coding-challenge.svg?token=qfoyGnbzJbjd9K4Z3Dnz&branch=master)](https://travis-ci.com/briantam23/mckinsey-coding-challenge)


# 💻 McKinsey Front End coding challenge

## Table of contents
* [Live Demo](#live-demo)
* [Dependencies](#dependencies)
* [Requirements](#requirements)
* [Installation](#installation)
* [Running Locally](#running-locally)
* [Deploying to Heroku](#deploying-to-heroku)
* [Tests](#tests)

## Live Demo

Currently deployed to [Heroku](https://mckinsey-coding-challenge.herokuapp.com/)!

## Dependencies

* [React](https://reactjs.org)
* [Express](https://expressjs.com)

## Requirements

* [Node.js (v10.16.0)](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)

## Installation

Step 1: Clone Repo
```sh
git clone https://github.com/briantam23/mckinsey-coding-challenge.git` # or clone your own fork
```

Step 2: Install `node_modules`
```sh
npm install # or yarn install
```

## Running Locally

```sh
npm run start:dev
```

The `npm run start:dev` command will run 2 processes:
* the `webpack` process (in watch mode) to build your client-side Javascript files
* the Node process for your server with `nodemon`

Your app should now be running on [localhost:3000](http://localhost:3000).

## Deploying to Heroku

Make sure you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed.

```
heroku create
git push heroku master
heroku open
```

Alternatively, you can deploy your own copy of the app using the web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Tests

Created Tests for React Components, Routes, and Functions:

> To run without "watch mode": 
```sh
npm test
``` 

> To run with "watch mode":
```sh
npm run test:dev
```
