import React from 'react'

const Friend = props => {
  return (
    <div style={{ borderBottom: '1px solid #98c0e4' }}>
      <p
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '15px'
        }}
      >
        <b>{props.friend.name}</b>
        <span>
          <b>Age: </b> {props.friend.age}
        </span>
        <span>
          <b>Email: </b> {props.friend.email}
        </span>
      </p>
    </div>
  )
}

export default Friend
