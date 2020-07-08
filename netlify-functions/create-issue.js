const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
})

exports.handler = async (event) => {
    const body = JSON.parse(event.body);

    const response = await octokit.issues.create({
        owner: 'FDiskas',
        repo: 'hasura-test',
        title: body.event.data.new.title,
        body: body.event.data.new.content,
      });

    return {
        statusCode: response.status,
        body: response.data.html_url
    }
}