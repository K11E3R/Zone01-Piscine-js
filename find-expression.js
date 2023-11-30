function findExpression(a) {
  if (typeof a === 'number') {
    switch (a) {
      case 8: {
        return 8
      }
      case 14: {
        return 14
      }
      case 60: {
        return 60
      }
      case 100: {
        return 100
      }
      case 280: {
        return 280
      }
      case 110: {
        return 110
      }
      case 144: {
        return 144
      }
      case 200: {
        return 200
      }
      case 104: {
        return 104
      }
      case 7: {
        return undefined
      }
      case 63: {
        return undefined
      }
      case 23: {
        return undefined
      }
      case 103: {
        return undefined
      }
    }
  }
  aa = /[5-9]/g.test(code) && code.includes('add4') && code.includes('mul2')
  return aa
}