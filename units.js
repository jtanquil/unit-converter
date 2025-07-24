function mult(factor) {
  return (value) => value * factor;
}

function pluralizer(word) {
  switch(word) {
    case "celsius":
    case "fahrenheit":
    case "kelvin":
      return word;
    case "foot":
      return "feet";
    case "inch":
      return "inches";
    default:
      return word + "s";
  }
}

const CONVERSION_FACTORS = {
  "length": {
    "millimeter": {
      "millimeter": mult(1),
      "centimeter": mult(0.1),
      "meter": mult(0.001),
      "kilometer": mult(0.0000001),
      "inch": mult(0.0393701),
      "foot": mult(0.00328084),
      "yard": mult(0.00109361),
      "mile": mult(0.00000062137)
    },
    "centimeter": {
      "millimeter": mult(10),
      "centimeter": mult(1),
      "meter": mult(0.01),
      "kilometer": mult(0.00001),
      "inch": mult(0.393701),
      "foot": mult(0.0328084),
      "yard": mult(0.0109361),
      "mile": mult(0.0000062137)
    },
    "meter": {
      "millimeter": mult(1000),
      "centimeter": mult(100),
      "meter": mult(1),
      "kilometer": mult(0.001),
      "inch": mult(39.3701),
      "foot": mult(3.28084),
      "yard": mult(1.09361),
      "mile": mult(0.00062137)
    },
    "kilometer": {
      "millimeter": mult(1000000),
      "centimeter": mult(100000),
      "meter": mult(1000),
      "kilometer": mult(1),
      "inch": mult(39370.1),
      "foot": mult(3280.84),
      "yard": mult(1093.61),
      "mile": mult(0.62137)
    },
    "inch": {
      "millimeter": mult(25.4),
      "centimeter": mult(2.54),
      "meter": mult(0.0254),
      "kilometer": mult(0.0000254),
      "inch": mult(1),
      "foot": mult(0.0833),
      "yard": mult(0.2778),
      "mile": mult(0.000015783)
    },
    "foot": {
      "millimeter": mult(304.8),
      "centimeter": mult(30.48),
      "meter": mult(0.3048),
      "kilometer": mult(0.0003048),
      "inch": mult(12),
      "foot": mult(1),
      "yard": mult(0.333),
      "mile": mult(0.000189394)
    },
    "yard": {
      "millimeter": mult(914.4),
      "centimeter": mult(91.44),
      "meter": mult(0.9144),
      "kilometer": mult(0.0009144),
      "inch": mult(36),
      "foot": mult(3),
      "yard": mult(1),
      "mile": mult(0.000568182)
    },
    "mile": {
      "millimeter": mult(1609340),
      "centimeter": mult(160934),
      "meter": mult(1609.34),
      "kilometer": mult(1.60934),
      "inch": mult(63360),
      "foot": mult(5280),
      "yard": mult(1760),
      "mile": mult(1)
    }
  },
  "weight": {
    "milligram": {
      "milligram": mult(1),
      "gram": mult(0.001),
      "kilogram": mult(0.0000001),
      "ounce": mult(0.0000035274),
      "pound": mult(0.00000022046)
    },
    "gram": {
      "milligram": mult(1000),
      "gram": mult(1),
      "kilogram": mult(0.001),
      "ounce": mult(0.035274),
      "pound": mult(0.00220462)
    },
    "kilogram": {
      "milligram": mult(1000000),
      "gram": mult(1000),
      "kilogram": mult(1),
      "ounce": mult(35.274),
      "pound": mult(2.20462)
    },
    "ounce": {
      "milligram": mult(28349.5),
      "gram": mult(28.3495),
      "kilogram": mult(0.0283495),
      "ounce": mult(1),
      "pound": mult(0.0625)
    },
    "pound": {
      "milligram": mult(453592),
      "gram": mult(453.592),
      "kilogram": mult(0.453592),
      "ounce": mult(16),
      "pound": mult(1)
    }
  },
  "temperature": {
    "celsius": {
      "celsius": (celsius) => celsius,
      "fahrenheit": (celsius) => (9 / 5) * celsius + 32,
      "kelvin": (celsius) => celsius + 273.15
    },
    "fahrenheit": {
      "celsius": (fahrenheit) => (fahrenheit - 32) * (5 / 9),
      "fahrenheit": (fahrenheit) => fahrenheit,
      "kelvin": (fahrenheit) => (fahrenheit - 32) * (5 / 9) + 273.15
    },
    "kelvin": {
      "celsius": (kelvin) => kelvin - 273.15,
      "fahrenheit": (kelvin) => (kelvin - 273.15) * (9 / 5) + 32,
      "kelvin": (kelvin) => kelvin
    }
  }
};

const UNITS = {
  length: ["millimeter", "centimeter", "meter", "kilometer", "inch", "foot", "yard", "mile"],
  weight: ["milligram", "gram", "kilogram", "ounce", "pound"],
  temperature: ["celsius", "fahrenheit", "kelvin"],
};


module.exports = { CONVERSION_FACTORS, UNITS, pluralizer };