import cardReducer from '../reducers/card';
require('jest');

describe('Card Reducer', () => {
  describe('Case IS_SELECTED', () => {
    it('should change the card property to true', () => {
      let action = {
        type: 'IS_SELECTED',
        payload: 1,
      };
      let state = [
        {id: 1, isSelected: false},
        {id: 2, isSelected: false},
      ];
      cardReducer(state, action);
      expect(state[0].isSelected).toBe(true);
      expect(state[1].isSelected).toBe(false);
    });
  });
  describe('Case MATCHED_CARD', () => {
    it('should change matched property to true', () => {
      let action = {
        type: 'MATCHED_CARDS',
        payload: {cardAId: 1, cardBId: 2},
      };
      let state = [
        {id: 1, matched: false},
        {id: 2, matched: false},
      ];
      cardReducer(state, action);
      expect(state[0].matched).toBe(true);
      expect(state[1].matched).toBe(true);
    });
  });
  describe('Case FLIP_DOWN', () => {
    it('should change isSelected back to false', () => {
      let action = {
        type: 'FLIP_DOWN',
        payload: {cardAId: 1, cardBId: 2},
      };
      let state = [
        {id: 1, isSelected: true},
        {id: 2, isSelected: true},
      ];
      cardReducer(state, action);
      expect(state[0].isSelected).toBe(false);
      expect(state[1].isSelected).toBe(false);
    });
  });
  describe('default', () => {
    it('should return default state if action type case not found', () => {
      let action = {
        type: 'TEST',
        payload: 1,
      };
      let state = [
        {id: 1, isSelected: true},
        {id: 2, isSelected: true},
      ];
      cardReducer(state, action);
      expect(state[0].id).toEqual(1);
      expect(state[0].isSelected).toBe(true);
    });
  });
});
