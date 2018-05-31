class Neuron {
    constructor(prev) {
        this.activation = 0;
        this.weights = [];
        this.sum = 0;
        for(let i = 0; i < prev.length; i++) {
            this.sum += this.weights[i] * prev[i].activation;
        }
    }
    sig(n) {
        return 1 / (1 + Math.pow(Math.E, n*-1)); 
    }

    fire() {
        this.activation = this.sig(this.sum);
    }
}

class Network {
    constructor() {
        this.inputLayer = [];
        this.hidLayer = [];
        this.outLayer = [];

        for(let i = 0; i < 784; i++) {
            this.inputLayer[i] = new Neuron(0);
            this.inputLayer[i].weights = layers.input[i];
        }

        for(let i = 0; i < 28; i++) {
            this.hidLayer[i] = new Neuron(this.inputLayer);
            this.hidLayer[i].weights = layers.hidden[i];
        }

        for(let i = 0; i < 10; i++) {
            this.outLayer.push(new Neuron(this.hidLayer));
            this.outLayer[i].weights = layers.output[i];
        }
    }

    feedNet(img) {
        for(let i = 0; i < 784; i++) {
            this.inputLayer[i].activation = img[i];
        }

        for(let j = 0; j < 28; j++) {
            this.hidLayer[j].fire();
        }

        for(let k = 0; k < 10; k++) {
            this.outLayer[k].fire();
        }
    }

    getGuess() {
        let max = 0;
        let index = 0;
        for(let i = 0; i < 10; i++) {
            if(this.outLayer[i].activation > max) {
                max = this.outLayer.activation;
                index = i;
            }
        }
        return index;
    }

}

class Node {
    constructor(x, y) {
        this.value = 0;
        this.x = x;
        this.y = y;
        this.fill = '#FFF';
        this.w = 10;
        this.h = 10;
    }

    lit() {
        if(mouseX > this.x*10 && mouseX < this.x*10 + this.w) {
            if(mouseY > this.y*10 && mouseY < this.y*10+this.h) {
                if(mouseIsPressed) {
                    this.fill = '#B5BD89';
                    this.value = 1;
                }
            }
        }
    }

    display() {
        this.lit();
        fill(this.fill);
        rect(this.x*10, this.y*10, this.w, this.h);
    }
}

var canvas;
let nodes = [];
let canvasValues = [];
let net;

function setup() {

    canvas = createCanvas(500,500);

    for(let i = 0; i < 28; i++) {
        for(let j = 0; j < 28; j++) {
            nodes.push(new Node(i,j));
        }
    }

    net = new Network();
}

function keyPressed() {
    for(let i = 0; i < nodes.length; i++) {
        canvasValues[i] = nodes[i].value;
    }
    net.feedNet(canvasValues);
    print(net.inputLayer)
}

function draw() {
    nodes.forEach(function(n) {
        n.display();
    });
}