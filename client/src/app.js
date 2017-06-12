import React, { Component } from 'react';

//load components
import {CampaignList} from './components/CampaignList'
import {setDress, generateShortUrl} from './reducers/dressStore'

const App = (props) => (
  <div>
    <CampaignList data={props} />
  </div>
);

import { connect } from 'react-redux'

export default connect(
  (state) => ({ dresses: state.dressStore.dresses, dressSelected: state.dressStore.dressSelected }),
  (dispatch) => ({
    setDress: function(dress) {
      dispatch(setDress(dress))
    },
    generateShortUrl: function(designer, dressName ) {
      dispatch(generateShortUrl(designer, dressName ))
    }
  })
)(App)
