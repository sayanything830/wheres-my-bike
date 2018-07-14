# Where's My Bike

[![Build Status](https://travis-ci.org/sayanything830/wheres-my-bike.svg?branch=master)](https://travis-ci.org/sayanything830/wheres-my-bike)

A memory card game created with ReactJS and Redux.

For deployed site, [click here](https://wheres-my-bike.herokuapp.com/).


## Installing and Getting Started

To install this app, copy the HTTPS address of this repository and in your terminal, type `git clone <paste http address here>`. Navigate into the repository and enter `npm i` to install all dependencies.

__*NOTE*__: You will need to add a `.env` in the root directory containing:
```
NODE_ENV=dev
```

Once all dependencies are installed, type `npm run watch` this will trigger the development build for webpack, then from your browser, go to `localhost:8080` to play the game.

## Problem Domain (taken from challenge README)

Create a single-player "Memory game" in which the user has to clear a board by flipping and matching cards. The user will flip two cards at a time; if they match they are removed, if they do not match they are flipped back over.

Render a 4 rows by 4 columns board with cards 'face down' on them. Each card should have 3 states: back, front, and removed.

When the user clicks on a square, the card should turn over. Then they click on a second square. If they match, both cards are removed. Otherwise they turn back over.

The user repeats this until there are no more cards.
