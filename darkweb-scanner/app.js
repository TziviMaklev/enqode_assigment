const app = express();
import express  from 'express';
import axios from 'axios';
const API_URL = 'https://2.intelx.io/';
const API_KEY = 'e3a92b33-90a7-4355-aaaf-b8b87635fe4c';// change it to you API

app.use(express.json());

app.get('/search/:data', async (req, res) => {
    const data = req.params.data; // Expecting data to be passed in the request body
    try {
        debugger;
        // First AJAX request
        const searchResponse = await axios.post(`${API_URL}intelligent/search`, {
            term: data,
            maxresults: 10,
            media: 0,
            sort: 2,
            terminate: []
        }, {
            headers: { 'x-key': API_KEY }
        });

        const searchId = searchResponse.data.id;
        debugger;
        // Second AJAX request for results
        const resultResponse = await axios.get(`${API_URL}intelligent/search/result`, {
            headers: { 'x-key': API_KEY },
            params: {
                id: searchId,
                limit: 1,
                statistics: 1,
                previewlines: 8
            }
        });

        const records = resultResponse.data.records;

        // Collect all preview promises
        const previewPromises = records.map(record => {
            return axios.get(`${API_URL}file/preview`, {
                headers: { 'x-key': API_KEY },
                params: {
                    sid: record.storageid,
                    f: 0,
                    l: 8,
                    c: 1,
                    m: 1,
                    b: 'pastes',
                    k: API_KEY
                }
            }).then(previewResponse => ({
                ...record,
                preview: previewResponse.data // Attach preview data to the record
            }));
        });

        // Wait for all previews to be fetched
        const resultsWithPreviews = await Promise.all(previewPromises);
        // Send the combined results back to the client
        res.json(resultsWithPreviews);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data.' + data});
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
