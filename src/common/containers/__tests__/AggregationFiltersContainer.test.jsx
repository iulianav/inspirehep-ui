import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { fromJS } from 'immutable';

import { getStore, getStoreWithState } from '../../../fixtures/store';
import { SEARCHING } from '../../../actions/actionTypes';
import AggregationFiltersContainer, { dispatchToProps } from '../AggregationFiltersContainer';

describe('AggregationFiltersContainer', () => {
  it('renders initial state with initial url query q param', () => {
    const store = getStoreWithState({
      router: { location: { query: { agg1: 'agg1-selected' } } },
      search: fromJS({
        aggregations: {
          agg1: {
            buckets: [],
          },
          agg2: {
            buckets: [],
          },
        },
      }),
    });
    const wrapper = mount((
      <Provider store={store}>
        <AggregationFiltersContainer />
      </Provider>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('dispatches search onAggregationChange', () => {
    const store = getStore();
    const props = dispatchToProps(store.dispatch);
    props.onAggregationChange('agg1', ['selected']);
    const actions = store.getActions();
    expect(actions.some(action => action.type === SEARCHING)).toBe(true);
  });
});