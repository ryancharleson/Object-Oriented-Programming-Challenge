

function managerCard(team) {
    const html = []
    team.forEach(element => {
        html.push (`<div class="card-content has-background-warning-light worker-card">
        <div class="card-title has-text-centered is-size-3 has-background-danger has-text-black-light">
            ${element.name}
        </div>
        <div class="card-header-title is-size-4">Manager</div>
        <div class="card-content is-size-5">
            <ul class="list-group">
                <li class="list-group-item has-text-weight-bold">ID: ${element.idNum}</li>
                <li class="list-group-item has-text-weight-bold">Email: <a
                        href="malito:jamescharleson@yahoo.com">${element.email}</a>
                </li>
                <li class="list-group-item has-text-weight-bold">Office Number: ${element.officeNum}</li>
            </ul>
        </div>
    </div>`)
    });
    return html.join('');
}

function engineerHtml(team) {
    const html = []
    team.forEach(element => {
        html.push (`<div class="column is-fourth">
        <div class="card-content has-background-warning-light worker-card">
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

function internHtml(team) {
    const html = []
    team.forEach(element => {
        html.push (` <div class="column is-one-forth">
        <div class="card-content has-background-warning-light worker-card">
            <div
                class="card-title has-text-centered is-size-3 has-background-info has-text-black-light">
                ${element.name}
            </div>
            <div class="card-header-title is-size-4"><i class="fa-solid fa-phone">&#160;</i>Intern</div>
            <div class="card-content is-size-5">
                <ul class="list-group">
                    <li class="list-group-item has-text-weight-bold">ID: ${element.idNum}</li>
                    <li class="list-group-item has-text-weight-bold">Email: <a
                            href="malito:jamescharleson@yahoo.com">${element.email}</a>
                    </li>
                    <li class="list-group-item has-text-weight-bold">School: ${element.school}</li>
                </ul>
            </div>
        </div>
    </div>`)
    })
}