module.exports = {
  add: function( addend1, addend2 ){
    return ( addend1 + addend2 );
  },

  subtract: function( minuend, subtrahend ){
    return ( minuend - subtrahend );
  },

  multiply: function( multiplicand, multiplier ){
    return ( multiplicand * multiplier );
  },

  divide: function( dividend, divisor ){
    return ( dividend / divisor );
  },

  square: function( value ){
    return ( value * value );
  },

  exponential: function( base, power ){
    return Math.pow( base, power );
  }
}
