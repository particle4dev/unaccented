import unaccented from '../index'

describe('@penguin/unaccented/src/unaccented', () => {
  it('should handle the unaccented correctly', () => {
    expect(unaccented('chào cờ')).toEqual('chao co')
    expect(unaccented('')).toEqual('')
    expect(unaccented(null)).toEqual('')
    expect(unaccented(1)).toEqual('1')
    expect(unaccented(true)).toEqual('true')
  })
})
