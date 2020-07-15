const Apify = require('apify');

Apify.main(async () => {
    const input = await Apify.getInput();
    console.log('Input:');
    console.dir(input);

    const {
        tasks,
        apiEndpoint
    } = input;

    const { defaultDatasetId } = Apify.getEnv();

    const taskInput = {
        apiEndpoint,
        datasetId: defaultDatasetId 
    };

    for (const task of tasks) {
        console.log(`Starting task: ${task}...`);
        result = await Apify.callTask(task, taskInput);
        console.log(`Finished task: ${task} with result:`);
        console.log(result);
    }
    console.log('All tasks finished.');
});
