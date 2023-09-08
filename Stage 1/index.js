const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server is now listening on ${PORT}`);
})

//To define a GET route that handles two query parameters
app.get('/nire', (req,res) =>{
    const status = {
        "Status": "Running",
        
            "slack_name": "nire",
            "current_day": "Friday",
            "utc_time": "2023-08-21T15:04:05Z",
            "track": "backend",
            "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
            "github_repo_url": "https://github.com/username/repo",
            "status_code": 200
    
    }
    res.status(200).json(status);

});