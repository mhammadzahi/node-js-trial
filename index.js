const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('./secret-key.json');

app.get("/google-sheet", async (req, res) => {

    // Initialize the sheet - doc ID is the long id in the sheets URL
    const doc = new GoogleSpreadsheet('1DUfBfvlt0zHsuAHkfPerlZg-GtaN6Xw7xPky_q6KkEU');

    // Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
    await doc.useServiceAccountAuth(creds);

    await doc.loadInfo(); // loads document properties and worksheets
    //console.log(doc.title);
    await doc.updateProperties({ title: 'renamed' });

    const sheet = doc.sheetsByIndex[0];

    let result = {
        success: 'ok'
    }
    res.status(200).json(result)
})

app.listen(3002, () => {
    console.log('App is lestening at http://localhost:3002');
})