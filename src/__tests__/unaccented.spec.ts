import unaccented from '../index'

describe('@penguin/unaccented/src/unaccented', () => {
  it('should handle the unaccented correctly', () => {
    expect(unaccented('Cháu xin chào cô chú! Sa chào cô chú đi con.')).toEqual('chau xin chao co chu! sa chao co chu di con.')
    expect(unaccented('')).toEqual('')
    expect(unaccented(null)).toEqual('')
    expect(unaccented(1)).toEqual('1')
    expect(unaccented(true)).toEqual('true')
  })
})
