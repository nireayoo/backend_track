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

    //Validating timezone

    //Getting current day of the week
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    const current_day = weekDays[new Date().getDay()];
    //Github URLs
    const github_file_url = 'https://github.com/nireayoo/backend_track.git/StageOne';
    const github_repo_url = 'https://github.com/nireayoo/backend_track.git';

    //date
    
    const offset = new Date().getTimezoneOffset();
    const now = new Date(Date.now() - (offset + (Math.random() * 4 - 2)) * 60 * 1000);   // +/- 2 minutes window

    //responses

    const format = {
        slack_name,
        current_day,
        utc_time: now.toISOString(),
        track,
        github_file_url,
        github_repo_url,
        status_code: 200,


    };
    res.status(200).json(format);
    
});
