export default function symbolsList() {
    return fetch('http://data.fixer.io/api/symbols?access_key=7736be7008dd10910ea6e2ac4a8c1dae')
        .then(response => response.json())
        .then(json => {
            return Object.entries(json.symbols);
        })
}