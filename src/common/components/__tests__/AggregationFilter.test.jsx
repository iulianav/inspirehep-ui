import React from 'react';
import { fromJS } from 'immutable';
import { shallow } from 'enzyme';

import AggregationFilter from '../AggregationFilter';

describe('AggregationFilter', () => {
  it('renders RangeAggregation if range prop is true', () => {
    const buckets = fromJS([
      {
        key: 'bucket1',
        doc_count: 1,
      },
      {
        key: 'bucket2',
        doc_count: 2,
      },
    ]);
    const wrapper = shallow(<AggregationFilter
      onChange={jest.fn()}
      buckets={buckets}
      name="Test"
      selections={['bucket1']}
      range
    />);
    expect(wrapper).toMatchSnapshot();
    // TODO: maybe add explicit check for RangeAggregation?
  });

  it('renders CheckboxAggregation if range prop is not set', () => {
    const buckets = fromJS([
      {
        key: 'bucket1',
        doc_count: 1,
      },
      {
        key: 'bucket2',
        doc_count: 2,
      },
    ]);
    const wrapper = shallow(<AggregationFilter
      onChange={jest.fn()}
      buckets={buckets}
      name="Test"
      selections={['bucket1']}
    />);
    expect(wrapper).toMatchSnapshot();
    // TODO: maybe add explicit check for CheckboxAggregation?
  });
});
