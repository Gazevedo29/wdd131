const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();

lastModified.textContent =
`Last Modification: ${document.lastModified}`;

const temperature = 8;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

const windChill = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {

    windChill.textContent =
        `${calculateWindChill(temperature, windSpeed)} °C`;

} else {

    windChill.textContent = "N/A";
}