import React from 'react'

export const TemperatureInput = ({scale, temperature, onTemperatureChange}) => {
  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
  }

  const handleChange = (e) => {
    onTemperatureChange(e.target.value)
  }

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={handleChange} />
    </fieldset>
  )
}
