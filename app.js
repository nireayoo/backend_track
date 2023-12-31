const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server is now listening on ${PORT}`);
})

//To define a GET route that handles two query parameters
app.get('/api', (req,res) =>{

    //Getting my query parameters,
    const {slack_name, track} = req.query;

    //Getting current day of the week
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    const current_day = weekDays[new Date().getDay()];

    //Github URLs
    const github_file_url = 'https://github.com/nireayoo/backend_track/blob/8effad36eb52c35f1e6d5e73c9bc6a806608c114/app.js';
    const github_repo_url = 'https://github.com/nireayoo/backend_track.git';

    //date
    // const offset = new Date().getTimezoneOffset();
    //const utc_time = new Date().toISOString().slice(0, -5) + 'Z';
    const utc_time = new Date().toISOString().split('.')[0] +'Z';

    const format = {
        slack_name,
        current_day,
        utc_time,
        track,
        github_file_url,
        github_repo_url,
        status_code: 200,

    };
    res.json(format);
    
});
