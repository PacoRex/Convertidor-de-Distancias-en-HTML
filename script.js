function convertDistance() {
    const inputValue = document.getElementById('inputValue').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    const conversionRates = {
        km: 1000,
        m: 1,
        dm: 0.1,
        cm: 0.01,
        mm: 0.001
    };

    const valueInMeters = inputValue * conversionRates[inputUnit];
    const outputValue = valueInMeters / conversionRates[outputUnit];

    document.getElementById('outputValue').value = outputValue;
}
