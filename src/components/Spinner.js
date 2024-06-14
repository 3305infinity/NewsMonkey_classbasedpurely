import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Loading from './loading.gif'
export class Spinner extends Component {
//   static propTypes = {

//   }

  render() {
    return (
      <div className="my-3" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <img src={Loading} alt="loading" style={{margin:'auto'}} />
      </div>
    )
  }
}

export default Spinner
