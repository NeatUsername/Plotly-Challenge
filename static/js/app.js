// Part 1:  Horizontal Bar Chart

// Step:  Read in JSON Data.

//  lol spent an hour trying to troubleshoot this only to recall I needed to 
//  host it locally via python.

// Fetch the JSON data and console log it

const url = "../data/samples.json";

d3.json(url).then(function(data) {
    console.log(data)
  });

  
  // Promise Status
  const dataPromise = d3.json(url);
  console.log("Data Promise: ", dataPromise);

// ============= Exercise Theoretical Solution Workflow ============= \\

// 1.  Load Data from JSON file into a variable / object
// 2.  The Data file has three objects, Names, Metadata, and Samples.  The Names Object is a simple list,
//     so the attempt to load the values into a new variable object using Object.Keys apparently is a 
//     bad idea.  Maybe we use a Foreach Arrow Function to iterate through it, and attach that to the drop-
//     down node "selDataset" via D3?
// 3.  Once we have the list populated we can start builing the primary bar chart by attaching to the
//     "panel panel-primary" node.  That would be accomplished by something similar to the example in 
//     Exercise 1-1:
//  
//////    var trace1 = {
    //    x: ["beer", "wine", "martini", "margarita",
    //    "ice tea", "rum & coke", "mai tai", "gin & tonic"],
    //    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    //    type: "bar"
    //    };
    //
    //    var data = [trace1];
    //
    //    var layout = {
    //    title: "'Bar' Chart",
    //    xaxis: { title: "Drinks"},
    //    yaxis: { title: "% of Drinks Ordered"}
    //    };
    //
    //    Plotly.newPlot("plot", data, layout);
//////
//
//  Here I'd swap out the explicitly-defined dataset for data in our samples.json file.  We're populating
//  it with Sample Values (values), OTU IDS (label), OTU Labels (Hovertext).