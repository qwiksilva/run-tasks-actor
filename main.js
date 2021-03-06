const Apify = require('apify');

Apify.main(async () => {
    const input = await Apify.getInput();
    console.log('Input:');
    console.dir(input);

    const {
        tasks,
        bubbleEndpoint,
        apiEndpoint,
        gsheetsEndpoint,
        mustHaveDate
    } = input;

    const { datasetId } = Apify.getEnv();
    const taskInput = {
        bubbleEndpoint,
        apiEndpoint,
        gsheetsEndpoint,
        datasetId,
        mustHaveDate
    };

    for (const task of tasks) {
        console.log(`Starting task: ${task}...`);
        try {
            result = await Apify.callTask(task, taskInput);
            console.log(`Finished task: ${task} with result:`);
            console.log(result);
        } catch(error) {
            console.log("Apify error on task", task);
        }

    }
    console.log('All tasks finished.');
});
