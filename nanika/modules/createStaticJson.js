import { createClient } from '../plugins/contentful.js'
export default async function outputStaticData() {
    const outputPath = './static/json/article.json'
    const fse = require('fs-extra')
    const client = createClient();
    const articles = await client.getEntries('content')

    fse.writeFile(
        outputPath,
        JSON.stringify(articles),
        'utf8'
    ).catch(err => {
        console.log('Error getting documents', err)
    })
  }




