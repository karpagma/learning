/* eslint-env mocha */
import Chai from 'chai'
import React from 'react'
import {shallow, mount} from 'enzyme'
import Search from '../js/Search'
import ShowCard from '../js/ShowCard'
import {rootReducer} from '../js/Store'
const {shows} = require('../public/data')

const expect = Chai.expect

xdescribe('<Search />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true
  })

  it('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter correctly given new state', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})

describe('Store', () => {
  it('should bootstrap', () => {
    const state = rootReducer(undefined, {type: '@@redux/INIT'})
    expect(state).to.deep.equal({searchTerm: ''})
  })

  it('should handle setSearchTerm actions', () => {
    const state = rootReducer({searchTerm: 'some'}, {type: 'setSearchTerm', value: 'orange'})
    expect(state).to.deep.equal({searchTerm: 'orange'})
  })
})
