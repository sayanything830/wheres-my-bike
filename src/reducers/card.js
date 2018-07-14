// individual card functions called during game play, state is the array of cards
export default (state, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'MATCHED_CARDS':
    // 2 cards match, change their 'matched' property to true
    return state.map(card => {
      if(card.id === payload.cardAId || card.id === payload.cardBId) {
        card.matched = true;
        card.isSelected = false;
        card.className = 'removed';
      }
      return card;
    });

  case 'IS_SELECTED':
    // card is clicked on, change 'isSelected' property to true
    return state.map(card => {
      if(card.id === payload) {
        card.isSelected = true;
        card.className = 'front';
      }
      return card;
    });

  case 'FLIP_DOWN':
    // cards did not match, change both 'isSelected' property to false
    return state.map(card => {
      if(card.id === payload.cardAId || card.id === payload.cardBId) {
        card.isSelected = false;
        card.className = 'back';
      }
      return card;
    });

  case 'REPLAY':
    return state.map(card => {
      card.matched = false;
      card.isSelected = false;
      card.className = 'back';
      return card;
    });

  default: return state;
  }
};
