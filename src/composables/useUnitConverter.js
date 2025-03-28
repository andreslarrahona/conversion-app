import { ref, computed } from 'vue'

// Factores de conversión basados en Pa (unidad base para presión)
const pressureFactors = {
  'MPa': 1000000,
  'kPa': 1000,
  'hPa': 100,
  'Pa': 1,
  'Bar': 100000,
  'mbar': 100,
  'kgf/cm2': 98066.5,
  'psi': 6894.76,
  'ksi': 6894760,
  'psf': 47.8803,
  'mH2O': 9806.38,
  'cmH2O': 98.0638,
  'ftH2O': 2988.98,
  'inH2O': 249.082,
  'atm': 101325,
  'torr': 133.322
}

const magnitudes = {
  Temperatura: {
    unidades: {
      '°C': {
        convert: (val, to) => {
          if (to === '°F') return val * 9/5 + 32
          if (to === '°K') return val + 273.15
          return val
        }
      },
      '°F': {
        convert: (val, to) => {
          if (to === '°C') return (val - 32) * 5/9
          if (to === '°K') return (val - 32) * 5/9 + 273.15
          return val
        }
      },
      '°K': {
        convert: (val, to) => {
          if (to === '°C') return val - 273.15
          if (to === '°F') return (val - 273.15) * 9/5 + 32
          return val
        }
      }
    },
    defaultFrom: '°C',
    defaultTo: '°F'
  },
  Presión: {
    unidades: Object.fromEntries(
      Object.entries(pressureFactors).map(([unit, factor]) => [
        unit,
        {
          convert: (val, to) => (val * factor) / pressureFactors[to]
        }
      ])
    ),
    defaultFrom: 'MPa',
    defaultTo: 'kPa'
  },
  Torque: {
    unidades: {
      'Nm': { convert: (val, to) => val * { 'ft/lb': 0.737562, 'in/lb': 8.85075, 'kgm': 0.101972 }[to] || val },
      'ft/lb': { convert: (val, to) => val * { 'Nm': 1.35582, 'in/lb': 12, 'kgm': 0.138255 }[to] || val },
      'in/lb': { convert: (val, to) => val * { 'Nm': 0.112985, 'ft/lb': 0.0833333, 'kgm': 0.0115212 }[to] || val },
      'kgm': { convert: (val, to) => val * { 'Nm': 9.80665, 'ft/lb': 7.23301, 'in/lb': 86.7962 }[to] || val }
    },
    defaultFrom: 'Nm',
    defaultTo: 'ft/lb'
  }
  // Puedes añadir las otras magnitudes (Radiofrecuencia, Dimensional) de manera similar
}

export function useUnitConverter() {
  const magnitud = ref('Temperatura')
  const unidadFrom = ref(magnitudes[magnitud.value].defaultFrom)
  const unidadTo = ref(magnitudes[magnitud.value].defaultTo)
  const inputValue = ref(0)

  // Actualizar unidades por defecto cuando cambia la magnitud
  const updateDefaultUnits = () => {
    unidadFrom.value = magnitudes[magnitud.value].defaultFrom
    unidadTo.value = magnitudes[magnitud.value].defaultTo
  }

  const outputValue = computed({
    get: () => {
      const mag = magnitudes[magnitud.value]
      return mag.unidades[unidadFrom.value].convert(inputValue.value, unidadTo.value)
    },
    set: (val) => {
      const mag = magnitudes[magnitud.value]
      inputValue.value = mag.unidades[unidadTo.value].convert(val, unidadFrom.value)
    }
  })

  return { 
    magnitudes,
    magnitud,
    unidadFrom,
    unidadTo,
    inputValue,
    outputValue,
    updateDefaultUnits
  }
}