// Function 1: Check if the train is on time
function trainOnTimeFinder() {
    let train = 7;
    return new Promise((resolve, reject) => {
        if (train === 7) {
            console.log("Train is on time"); // Log the success directly
            resolve("Train is on time");
        } else {
            console.log("Train is delayed"); // Log the failure directly
            reject("Train is delayed");
        }
    });
}

// Function 2: Check if the train has arrived at a specific location
function trainLocationFinder() {
    let loc = "ooty";
    let time = 1000;

    return new Promise((trainarrived, trainnotarrived) => {
        setTimeout(() => {
            if (loc === "ooty" && time === 1000) {
                console.log("Train has arrived"); // Log the success directly
                trainarrived("Train has arrived");
            } else {
                console.log("Train has not arrived"); // Log the failure directly
                trainnotarrived("Train has not arrived");
            }
        }, time);
    });
}

// Call the functions
trainOnTimeFinder(); // Logs: "Train is on time"
trainLocationFinder();