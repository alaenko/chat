import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';

function MessageHistory({list}) {
  const messages = list.map(o => (
    <li key={o.id}>
      {o.type === 'message' && <Message from={o.from} message={o} />}
      {o.type === 'response' && <Response from={o.from} message={o}/>}
      {o.type === 'typing' && <Typing from={o.from} message={o}/>}
    </li>
    ))

  return (
    <ul>
      {list && messages}
    </ul>
  )
}

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MessageHistory

