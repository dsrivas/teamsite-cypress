### Introduction
#### This project is a functional automated suite for Teamsite

[![Node.js CI](https://github.com/dsrivas/teamsite-cypress/actions/workflows/node.js.yml/badge.svg)](https://github.com/dsrivas/teamsite-cypress/actions/workflows/node.js.yml)

### Prerequisite
#### The host machine must have:
    1. 'npm' package manager
    2. Install the chrome browser

## How to setup the project ?

### 1. Clone the repo
    git clone https://github.com/dsrivas/cypress-poc.git

### 2. Run this command. This command should install all project dependecies listed in 'Package.json'
    npm install package.json

## How to execute the tests ?

### Execute tests in chrome browser
    npm run chrome:test

### Execute tests in headless mode
    npm run cy:ci

### Execute tests in docker

#### Make an docker image
    docker build -t chrome-teamsite-cypress .

#### Run container using the above image
    docker-compose run -e CYPRESS_USERNAME -e CYPRESS_PASSWORD e2e-chrome

### Report location
    Path: cypress/reports/mochareports/report.html
