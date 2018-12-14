import * as actions from './actions';

describe('actions', () => {
  describe('changeSearchTerm', () => {
    it('returns expected object', () => {
      const expected = { type: 'changeSearchTerm', searchTerm: 'foo' };
      const actual = actions.changeSearchTerm('foo');
      
      expect(actual).toEqual(expected);
    })
  });
});