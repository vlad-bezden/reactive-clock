## Reactive Clock

Example of digital clock using ReactJS and example of functional programming (FP). Function chain calls are done via compose function

```javascript
const compose = (...funcs) =>
  (arg) =>
    funcs.reduce(
    (composed, func) => func(composed), arg
  )
```

Here is an example how it works:

```javascript
const startTicking = render =>
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
```

The working example of this application at [https://clock.netlify.com](https://clock.netlify.com/)