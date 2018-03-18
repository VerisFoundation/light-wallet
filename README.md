<h1 align="center">VRS Light Wallet</h1>

<p align="center">
  Electron wallet for the <b>VRS</b> blockchain.
</p>

## Overview

### What does it currently do

* Create a wallet
* Encrypt a Private Key
* Login with Private Key, Encrypted Private Key or a stored account.
* Import/Export wallet accounts (NEP6 Standard)
* View balance
* Send VRS and VRC
* Claim VRC
* Send to multiple recipients
* Address book

## Installation

A standalone app will be available soon. For now, you will need to build the wallet manually.

### Required Tools and Dependencies

* Node (This project uses the current LTS node version, which is `v6.11.0`)
* Yarn (https://yarnpkg.com/lang/en/docs/install/)

### Developing and Running

Execute these commands in the project's root directory:

Setup:

* `yarn install` - Installing node dependencies
  * If you get any errors related to the node-hid package, please check installation instructions here: https://github.com/node-hid/node-hid#compiling-from-source. On Linux you may need to run `sudo apt install libusb-1.0-0 libusb-1.0-0-dev`, for example.
* `./node_modules/.bin/electron -v` confirm electron is version 1.7.9

Developing:

* `yarn dev` - Live reload

Running (for production):

* `yarn assets`
* `yarn start`

Testing:

* `yarn test` or `yarn run test-watch` for live testing.

### Support

A gentle reminder, github issues is meant to be used by developers for maintaining and improving the codebase, and is not the proper location for support issues.
