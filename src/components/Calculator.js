import React, { useState } from 'react'

import { TemperatureInput } from './TemperatureInput'
import { BoilingVerdict } from './BoilingVerdict'

export const Calculator = () => {
  const [temperature, setTemperature] = useState({ value: '', scale: 'c' })

  const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9
  }
  
  const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32
  }

  const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  const handleCelsiusChange = (temperature) => {
    setTemperature({ value: temperature, scale: 'c' })
  }

  const handleFahrenheitChange = (temperature) => {
    setTemperature({ value: temperature, scale: 'f' })
  }

  const celsius = temperature.scale === 'f' ? tryConvert(temperature.value, toCelsius) : temperature.value
  const fahrenheit = temperature.scale === 'c' ? tryConvert(temperature.value, toFahrenheit) : temperature.value

  return (
    <div>
      <TemperatureInput
        scale={'c'}
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale={'f'}
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  )
}
