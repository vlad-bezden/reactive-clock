import React from 'react'
import Clock from './components/Clock'
import {compose} from './utils/funcLib'

/**
 * Fires off timer and calls render function every second
 * @param {function} render - function that provides rendering of the UI
 */
const startTicking = (render) =>
    setInterval(
        compose(
            getCurrentTime,
            abstractClockTime,
            convertToCivilianTime,
            doubleDigits,
            render(Clock)
        ),
        oneSecond()
    )
/**
 * One Second interval. All the way functional :)
 */
const oneSecond = () => 1000

/**
 * Gets current date time
 */
const getCurrentTime = () => new Date()

/**
 * Parses DateTime to object of hours, minutes, and seconds
 * @param {Date} dateTime - current date and time
 */
const abstractClockTime = dateTime =>
    ({
        hours: dateTime.getHours(),
        minutes: dateTime.getMinutes(),
        seconds: dateTime.getSeconds()
    })

/**
 * Converts military time (24 hours) to civil time (12 hours)
 * @param {{hours: number, minutes: number, seconds: number} clockTime - object with current time
 */
const civilianHours = clockTime =>
    ({
        ...clockTime,
        hours: (clockTime.hours > 12) ? clockTime.hours - 12 : clockTime.hours
    })

/**
 * Appends AM or PM to the object of current time
 * @param {{hours: number, minutes: number, seconds: number}} clockTime - current time
 */
const appendAMPM = clockTime =>
    ({
        ...clockTime,
        ampm: (clockTime.hours >= 12) ? 'PM' : 'AM'
    })

/**
 * Composes currend date time to civil time
 * @param {Date} clockTime - current date time
 */
const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime)

/**
 * Prepends 0 to specified key if it's not there
 * @param {string} key - hours, minutes of seconds
 */
const prependZero = key => clockTime =>
    ({
        ...clockTime,
        [key]: (clockTime[key] < 10) ? '0' + clockTime[key] : clockTime[key]
    })

/**
 * Appends 0 if it's not there for hours, minutes, and seconds
 * @param {{hours: number, minutes: number, seconds: number}} civilianTime - current civil time
 */
const doubleDigits = civilianTime =>
    compose(
        prependZero('hours'),
        prependZero('minutes'),
        prependZero('seconds')
    )(civilianTime)

export default startTicking 