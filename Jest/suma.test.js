const { suma } = require('./suma')

describe('sumas', () => {
  test('Se realiza la suma de 2 y 3', () => {
    const result = suma(2, 3)
    expect(result).toBe(5)
  })
  test('Se realiza la suma de 5 y 9', () => {
    const result = suma(5, 9)
    expect(result).toBe(14)
  })

  test('Se realiza la suma de 12 y 8', () => {
    const result = suma(12, 8)
    expect(result).toBe(20)
  })
})
