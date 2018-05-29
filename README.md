# Neural Network - Digit Classifier

This project is a feed-forward neural network that takes in a dataset of 42,000 hand written digits and learns to differentiate between all of them. When presented with a never-before-seen example, the network uses it's trained weights to make an estimate as to what it thinks it is looking at. This is a classic example for getting into neural networks that allowed for a really good understanding of how neural networks work on a very fundamental level.

### Difficulties or opportunities you encountered along the way.

The toughest part of this project was finding the optimal hyperparameters (numbers that affect performance). A variation of epocs (total number of times the data is gone through) were tested and graphed to see when the network started to actually get worse from too much training.

![alt text](https://github.com/dylanro/DigitClassifier/blob/master/chart.png)

### Most interesting piece of your code and explanation for what it does.

```Java
public void loadTraining(String fileName) {
  println("Loading training data \"" + fileName + "\" . . .\n\n");
  Table table = loadTable(fileName);

  for (int i = 0; i <  42001; i++) { 
    training[i] = new Image();
    training[i].setLabel(table.getInt(i, 0));
    for (int j = 1; j < 785; j++) {
      training[i].addValue(table.getInt(i, j));
    }
  }
  println("\"" + fileName + "\"" + " has finished loading");
}
```
The function of this code is to load in the csv file that contains all of the values for each "image". This was one of the hardest parts of the project because I had never worked with csv files and this gave me an opportunity to learn more about working with data. Each row in the csv file (google sheets, excel) contains 784 ints that describe the "brightness" of each pixel (0-255). The first column of the row was a "label". This was all stored in a "Image" object so that it would be easy to work with. Each image can be thought of as one example of input for the network.

* [Processing](https://processing.org/) - The IDE used

## Authors

* **Dylan Roberts** 


## Acknowledgments

* 3 Brown 1 Blue's video series on Neural Networks
https://www.youtube.com/watch?v=aircAruvnKk
https://www.youtube.com/watch?v=IHZwWFHWa-w
https://www.youtube.com/watch?v=Ilg3gGewQ5U
