import React from 'react';
import PropTypes from 'prop-types';

function Response({from, message}) {
  return (
    < >
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">
        {message.text}
      </div>
    </>
  )
}

Response.propTypes = {
  from: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired
}

export default Response

