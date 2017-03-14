import React from 'react'

/**
 * Creates React DOM time representation
 * @param {string} hours
 * @param {string} minutes
 * @param {string} seconds
 * @param {string} ampm
 */
const Clock = ({ hours, minutes, seconds, ampm }) => (
    <div className='clock'>
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
        <span>{ampm}</span>
    </div>)

Clock.propTypes = {
    hours: React.PropTypes.string.isRequired,
    minutes: React.PropTypes.string.isRequired,
    seconds: React.PropTypes.string.isRequired,
    ampm: React.PropTypes.string.isRequired
}

export default Clock