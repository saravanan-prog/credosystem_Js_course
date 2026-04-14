function processUser(name, callback) {
    console.log("Processing user:", name);
    callback();
}

function done() {
    console.log("Done!");
}

processUser("Saravanan", done);