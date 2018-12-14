import middleware from './unicornify-middleware';

const setupMiddleware = () => {
  const store = {
    dispatch: jest.fn(),
    getState: jest.fn()
  };
  
  const next = jest.fn();
  
  const invoke = action => middleware(store)(next)(action);
  
  return { store, next, invoke };
}

describe('unicornify middleware', () => {
  describe('when action changeSearchTerm action dispatched', () => {
    describe('when searchTerm matches unicorn related word', () => {
      it('dispatches increaseUnicornCounter action', () => {
        const { store, next, invoke } = setupMiddleware();
        const action = { type: 'changeSearchTerm', searchTerm: 'unicorn' };
        
        invoke(action);
        
        expect(store.dispatch).toHaveBeenCalledWith({ type: 'increaseUnicornCounter' });
      });

      it('passes action to next', () => {
        const { store, next, invoke } = setupMiddleware();
        const action = { type: 'changeSearchTerm', searchTerm: 'unicorn' };
        
        invoke(action);
        
        expect(next).toHaveBeenCalledWith(action);
      });
    });

    describe('when searchTerm does not match unicorn related word', () => {
      it('does not dispatch increaseUnicornCounter action', () => {
        const { store, next, invoke } = setupMiddleware();
        const action = { type: 'changeSearchTerm', searchTerm: 'sloth' };
        
        invoke(action);
        
        expect(store.dispatch).not.toHaveBeenCalled();
      });

      it('passes action to next', () => {
        const { store, next, invoke } = setupMiddleware();
        const action = { type: 'changeSearchTerm', searchTerm: 'sloth' };
        
        invoke(action);
        
        expect(next).toHaveBeenCalledWith(action);
      });
    });
  });

  describe('when other action dispatched', () => {
    it('does not dispatch increaseUnicornCounter action', () => {
      const { store, next, invoke } = setupMiddleware();
      const action = { type: 'otherAction' };
      
      invoke(action);
      
      expect(store.dispatch).not.toHaveBeenCalled();
    });

    it('passes action to next', () => {
      const { store, next, invoke } = setupMiddleware();
      const action = { type: 'otherAction' };
      
      invoke(action);
      
      expect(next).toHaveBeenCalledWith(action);
    });
  });
});