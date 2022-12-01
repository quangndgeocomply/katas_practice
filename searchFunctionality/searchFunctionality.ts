export function search(input: string): Array<string> {
    const cities = ["paris", "budapest", "kkopje", "rotterdam"];
    let results: Array<string> = [];

    if (input === "*") {
        results = cities
    }
    
    if (input.length < 2) {
        return results;
    }
    input = input.toLowerCase();
    for (let index = 0; index < cities.length; index++) {
        if (cities[index].indexOf(input) > -1) {
            results.push(cities[index])
        }

    }
    return results
}