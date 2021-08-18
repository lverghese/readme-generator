//function for the license badges
function licenseBadge(value) {
    const whatLicense = value.license[0];
    let licenseLink = " "
    if (licenseType === "GNU General Public License 2.0") {
        licenseLink = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
    };
    if (whatLicense === "Apache License 2.0") {
        licenseLink = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
    if (whatLicense === "GNU general Public License 3.0") {
        licenseLink = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
    if (whatLicense === "MIT") {
        licenseLink = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    };
    return licenseLink
};
