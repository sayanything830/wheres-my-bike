// if card values match
export const matchedCards = (cardAId, cardBId) => ({
  type: 'MATCHED_CARDS',
  payload: { cardAId: cardAId, cardBId: cardBId },
});

// if a card is selected
export const isSelected = cardId => ({
  type: 'IS_SELECTED',
  payload: cardId,
});

// if 2 cards do not match values
export const flipDown = (cardAId, cardBId) => ({
  type: 'FLIP_DOWN',
  payload: { cardAId: cardAId, cardBId: cardBId },
});

// if 2 cards are selected, compare values
export const checkForMatch = () => ({
  type: 'CHECK_FOR_MATCH',
});

export const replay = () => ({
  type: 'REPLAY',
});
