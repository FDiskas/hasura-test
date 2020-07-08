const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
    auth: '76ad611c1fa006ec747d69d9f07294ff29077370'
})

exports.handler = async (event) => {
    const body = JSON.parse(event.body);

    return {
        statusCode: 200,
        body: JSON.stringify(body)
    }
}