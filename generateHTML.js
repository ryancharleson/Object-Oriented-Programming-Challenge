


// Function for displaying intern.html card
function internCard(team) {
const html = []
    team.forEach(element => {
        html.push (` <div class="column is-one-forth">
        <div class="card-content has-background-white box worker-card">
            <div
                class="card-title has-text-centered is-size-3 has-background-info has-text-black-light">
                ${element.name}
            </div>
            <div class="card-header-title is-size-4"><i class="fa-solid fa-phone">&#160;</i>Intern</div>
            <div class="card-content is-size-5">
                <ul class="list-group">
                    <li class="list-group-item has-text-weight-bold">ID: ${element.idNum}</li>
                    <li class="list-group-item has-text-weight-bold">Email: <a href="malito:jamescharleson@yahoo.com">${element.email}</a></li>
                    <li class="list-group-item has-text-weight-bold">School: ${element.school}</li>
                </ul>
            </div>
        </div>
    </div>`)
    });
    return html.join('');
}



// Function for displaying engineer.html card

function engineerCard(team) {
    const html = []
    team.forEach(element => {
        html.push (`<div class="column is-fourth">
        <div class="card-content has-background-white box worker-card">
            <div
                class="card-title has-text-centered is-size-3 has-background-success has-text-black-light">
                ${element.name}
            </div>
            <div class="card-header-title is-size-4">Engineer
            </div>
            <div class="card-content is-size-5">
                <ul class="list-group">
                    <li class="list-group-item has-text-weight-bold">ID: ${element.idNum}</li>
                    <li class="list-group-item has-text-weight-bold">Email: <a
                            href="malito:jamescharleson@yahoo.com.com">${element.email}</a>
                    </li>
                    <li class="list-group-item has-text-weight-bold">Github: <a
                            href="https://github.com/ryancharleson" target="_blank">${element.github}</a></li>
                </ul>
            </div>
        </div>
    </div>`)
    });
    return html.join('');
}




// Function for displaying manager.html card

function managerCard(team) {
    const html = []
    team.forEach(element => {
        html.push (`<div class="card-content has-background-white box worker-card">
        <div class="card-title has-text-centered is-size-3 has-background-danger has-text-black-light">
            ${element.name}
        </div>
        <div class="card-header-title is-size-4">Manager</div>
        <div class="card-content is-size-5">
            <ul class="list-group">
                <li class="list-group-item has-text-weight-bold">ID: ${element.idNum}</li>
                <li class="list-group-item has-text-weight-bold">Email: <a href="malito:jamescharleson@yahoo.com">${element.email}</a></li>
                <li class="list-group-item has-text-weight-bold">Office Number: ${element.officeNum}</li>
            </ul>
        </div>
    </div>`)
    });
    return html.join('');
}



// Function for displaying all HTML including all worker cards.

function generateHtml(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Employee Dashboard</title>
        <link rel="stylesheet" href="./assets/css/style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    
    </head>
    
    <body>
        <div class="pageContainer has-background-warning-light">
            <div class="container is-fluid has-background-warning">
                <div class="hero has-shadow">
                    <div class="hero-body">
                        <h1 class="title is-underlined">Employee Dashboard</h1>
                    </div>
                </div>
            </div>
            <section class="section">
                <div class="container">
                    <h4 class="title has-text-left">Your Employees</h4>
                    ${internCard(data.filter(team => team.returnTitle() === 'Intern'))}
                    ${engineerCard(data.filter(team => team.returnTitle() === 'Engineer'))}
                    ${managerCard(data.filter(team => team.returnTitle() === 'Manager'))}
                </div>
            </section>
        </div>
    </body>
    
    </html>`
}

module.exports = generateHtml
