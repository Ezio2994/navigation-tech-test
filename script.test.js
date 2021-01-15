import { navigator } from "./script.js"


test("navigator should return the shortest route and the distance of the matches, in only one match: the only match, if no match: 'no Match'", () => {
    expect(navigator("e", "h")).toMatch(`Only Route: EH \n Distance: 10`)
    expect(navigator("b", "d")).toMatch(`Only Route: BD \n Distance: 4`)
    expect(navigator("d", "g")).toMatch(`Fastest Route: DG \n Distance: 2`)
    expect(navigator("a", "h")).toMatch(`Fastest Route: ACDGH \n Distance: 9`)
    expect(navigator("b", "h")).toMatch(`Fastest Route: BDGH \n Distance: 10`)
    expect(navigator("h", "e")).toMatch(`Only Route: HE \n Distance: 10`)
    expect(navigator("h", "a")).toMatch(`Fastest Route: HGDCA \n Distance: 9`)
    expect(navigator("f", "c")).toMatch(`Fastest Route: FDC \n Distance: 2`)
    expect(navigator("g", "b")).toMatch(`Fastest Route: GDB \n Distance: 6`)
    expect(navigator("a", "l")).toMatch(`No match`)
    expect(navigator("a", "a")).toMatch(`No match`)
});
