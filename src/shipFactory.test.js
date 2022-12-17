import ship from "./shipFactory";

test('creates ship with length 3', () => {
    expect(ship(3)).toStrictEqual({length: 3})
})
test()
