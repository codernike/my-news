import React, { Component } from 'react'

export default class form extends Component {
  render() {
    return (
      <>
      <center className=" p-5 pb-5">
      <div style={{marginTop:'150px',maxWidth:'350px',minWidth:'300px'}} className='w-25 border gap-3 p-4 text-center d-flex flex-column border-2 border-secondary'>
        <div p-2 className='mt-2 fs-2'>Registration</div>
        <input type="text" placeholder="Name " className="Form-control p-2"/>
        <input type="email" placeholder="Email" className="Form-control p-2"/>
        <input type="password" placeholder="Password " className="Form-control p-2"/>
        <input type="password" placeholder="Password " className="Form-control p-2"/>
         <center> <button type="submit" className="btn w-75 btn-primary">Submit</button></center>
      </div></center>
      </>
    )
  }
}
