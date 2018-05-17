import cardReducer from './card';
import { matchedCards, checkForMatch, flipDown, isSelected } from '../actions/game-action';

// hard coded cards, could be dynamically generated with helper function
let cards = [
  {id:'card1', value: 'a', matched: false, isSelected: false, className: 'back'},
  {id:'card2', value: 'c', matched: false, isSelected: false, className: 'back'},
  {id:'card3', value: 'd', matched: false, isSelected: false, className: 'back'},
  {id:'card4', value: 'f', matched: false, isSelected: false, className: 'back'},
  {id:'card5', value: 'c', matched: false, isSelected: false, className: 'back'},
  {id:'card6', value: 'h', matched: false, isSelected: false, className: 'back'},
  {id:'card7', value: 'f', matched: false, isSelected: false, className: 'back'},
  {id:'card8', value: 'd', matched: false, isSelected: false, className: 'back'},
  {id:'card9', value: 'g', matched: false, isSelected: false, className: 'back'},
  {id:'card10', value: 'h', matched: false, isSelected: false, className: 'back'},
  {id:'card11', value: 'g', matched: false, isSelected: false, className: 'back'},
  {id:'card12', value: 'b', matched: false, isSelected: false, className: 'back'},
  {id:'card13', value: 'a', matched: false, isSelected: false, className: 'back'},
  {id:'card14', value: 'e', matched: false, isSelected: false, className: 'back'},
  {id:'card15', value: 'e', matched: false, isSelected: false, className: 'back'},
  {id:'card16', value: 'b', matched: false, isSelected: false, className: 'back'},
];

// game object with properties to track and manage during game play
let initialState = {
  cardAId: undefined,
  cardBId: undefined,
  clicks: 0,
  totalMatches: 0,
  cards: cards,
};

const memoryReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
  //--------------------------------
  // when two cards are flipped over
  case 'CHECK_FOR_MATCH':
    // if the cards match
    if(state.clicks === 2 && _matchingValues(state.cardAId, state.cardBId, state.cards)) {
      // - clone state
      const match = {...state};
      // - increase total matches
      match.totalMatches ++;
      // - return click count to 0
      match.clicks = 0;
      // - update cards
      match.cards = cardReducer(state.cards, matchedCards(state.cardAId, state.cardBId));
      // - return cloned state with updated properties
      return match;
      // else if they did not match
    } else if(state.clicks === 2) {
      // - clone state
      const noMatch = {...state};
      // - return click count to 0
      noMatch.clicks = 0;
      // - flip cards back over
      noMatch.cards = cardReducer(state.cards, flipDown(state.cardAId, state.cardBId));
      // - return cloned state with updated properties
      return noMatch;
    }
    // else return state (clicks do not equal 2)
    return state;
  //------------------------------
  // when a single card is flipped
  case 'IS_SELECTED':
  // - if there is another flipped card, check if they match
    if(state.clicks === 2) {
      let newState = memoryReducer(state, checkForMatch());
      return memoryReducer(newState, isSelected(payload));
    }
    // - if the card was already flipped over or had a match, return state
    let card = _getCard(payload, state.cards);
    if(card.isSelected || card.matched) return state;

    // - assign values to cardA and cardB
    let cardA = state.cardAId;
    let cardB = state.cardBId;
    // - if first click, assign to cardA
    if(state.clicks === 0) {
      cardA = payload;
      // - if second click, assign to cardB
    } else {
      cardB = payload;
    }
    const flipped = {...state};
    // - update cardAId and cardBId values
    flipped.cardAId = cardA;
    flipped.cardBId = cardB;
    // - increment clicks
    flipped.clicks ++;
    // - update cards
    flipped.cards = cardReducer(state.cards, isSelected(payload));
    // - return updated state
    return flipped;
  default: return state;
  }
};

export default memoryReducer;

// --- Helper Functions --- //
// boolean checking if card values match
const _matchingValues = (cardAId, cardBId, cards) => {
  if(_getValue(cardAId, cards) === _getValue(cardBId, cards)) return true;
  return false;
};

// gets value of card based on id
const _getValue = (cardId, cards) => {
  for(let i in cards) {
    if(cards[i].id === cardId) return cards[i].value;
  }
};

// gets whole card object based on id
const _getCard = (cardId, cards) => {
  for(let i in cards) {
    if(cards[i].id === cardId) return cards[i];
  }
};
