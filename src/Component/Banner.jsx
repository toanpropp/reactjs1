import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    return (
      <div className='container my-5 bg-light'>
        <div className='text-center p-5'>
            <h1 className='py-2 fw-bold'>A warm welcome!</h1>
            <p className='px-5 mb-3 fs-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
            <button className='btn btn-primary my-4 fs-5'>Call to action</button>
        </div>
      </div>
    )
  }
}
