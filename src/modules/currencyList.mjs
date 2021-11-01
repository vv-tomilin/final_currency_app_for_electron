export default function currensyList() {

    return fetch('http://data.fixer.io/api/latest?access_key=7736be7008dd10910ea6e2ac4a8c1dae')
        .then(response => response.json())
        .then(json => {
            return Object.entries(json.rates);
        })
}