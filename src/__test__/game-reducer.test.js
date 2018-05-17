import * as actions from '../actions/game-action';
require('jest');

describe('game actions', function() {
  let cardId1 = 1;
  let cardId2 = 2;
  describe('MATCHED_CARDS', () => {
    it('should add action type to match cards', () => {
      let action = actions.matchedCards(cardId1, cardId2);
      expect(action.type).toEqual('MATCHED_CARDS');
    });
  });
  describe('IS_SELECTED', () => {
    it('should add action type for isSelected', () => {
      let action = actions.isSelected(cardId1);
      expect(action.type).toEqual('IS_SELECTED');
    });
  });
  describe('FLIP_DOWN', () => {
    it('should add action type to flip down cards', () => {
      let action = actions.flipDown(cardId1, cardId2);
      expect(action.type).toEqual('FLIP_DOWN');
    });
  });
  describe('CHECK_FOR_MATCH', () => {
    it('should add action type to check for matched cards', () => {
      let action = actions.checkForMatch();
      expect(action.type).toEqual('CHECK_FOR_MATCH');
    });
  });
});
