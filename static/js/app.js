// Part 1:  Horizontal Bar Chart

// Step 1:  Read in JSON Data
//    lol spent an hour trying to troubleshoot this only to recall I needed to 
//    host it locally via python.

const url = "../data/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

//  Data loaded.  Works.

