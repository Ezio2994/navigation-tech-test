const directions = {
    AC: 2,
    AE: 4,
    CD: 1,
    CF: 4,
    BD: 4,
    BE: 7,
    DF: 1,
    DG: 2,
    FG: 3,
    GH: 4,
    EH: 10,
    CE: 3,
    BH: 12,
    BG: 8
}

export const navigator = (start, end) => {
    start = start.toUpperCase()
    end = end.toUpperCase()
    let value;
    if (start > end) {
        value = start
        start = end
        end = value
    }

    const routesToTake = [];
    const distances = [];

    if (Object.keys(directions).includes(start + end)) {
        routesToTake.push([start + end])
        distances.push(directions[start + end])
    }

    const starting = Object.keys(directions).filter(direction => direction.charAt(0).includes(start));
    const cordinates = Object.keys(directions)

    const possibleRoutes = [];
    const filteredRoutes = []


    let x = 0;
    let y = 0;

    while (y < cordinates.length) {
        if (y === cordinates.length - 1 && x < starting.length - 1) {
            y = 0
            x++
        }
        else if (starting[x].charAt(1) === cordinates[y].charAt(0)) {
            possibleRoutes.push([starting[x], cordinates[y]])
            y++
        } else {
            y++
        }
    }

    let a = 0;
    let b = 0;

    if (possibleRoutes.length) {
        while (a < cordinates.length) {
            if (a === cordinates.length - 1 && b < possibleRoutes.length - 1) {
                a = 0
                b++
            } else if (possibleRoutes[b][possibleRoutes[b].length - 1].charAt(1) === cordinates[a].charAt(0)) {
                possibleRoutes.push([...possibleRoutes[b], cordinates[a]])
                a++
            } else {
                a++
            }
        }
    }

    possibleRoutes.forEach(route => {
        if (route.toString().charAt(route.toString().length - 1) === end) {
            filteredRoutes.push(route)
        }
    })

    filteredRoutes.forEach(route => {
        const c = route.indexOf(route.find(route => route.charAt(1) === end)) + 1
        const toUse = route.slice(0, c)
        routesToTake.push(toUse)
        const distancesCalc = [];
        toUse.map(use => distancesCalc.push(directions[use]))
        distances.push(distancesCalc.reduce((el1, el2) => el1 + el2))
    })

    const smallest = Math.min(...distances)

    console.log("Possible Routes and distances: \n", ...routesToTake, filteredRoutes.length ? distances : "");

    if (routesToTake.length) {
        if (value === undefined) {
            if (routesToTake[0].length === 1 && routesToTake.length === 1) {
                return `Only Route: ${start + end} \n Distance: ${smallest}`
            } else {
                return `Fastest Route: ${start}${routesToTake[distances.indexOf(smallest)].map(route => route.charAt(1)).join("")} \n Distance: ${smallest}`
            }
        } else {
            if (routesToTake[0].length === 1 && routesToTake.length === 1) {
                return `Only Route: ${end + start} \n Distance: ${smallest}`
            } else {
                return `Fastest Route: ${routesToTake[distances.indexOf(smallest)].map(route => route.charAt(1)).reverse().join("")}${start} \n Distance: ${smallest}`
            }
        }
    } else {
        return "No match"
    }
}


console.log(navigator("b", "h"))

