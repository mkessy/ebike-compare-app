#E-bike Comparison Tool

A small React App that uses a [static KD-Tree](https://github.com/mikolalysenko/static-kdtree) to do a K-nearest neighbors search on scraped e-bike data.

KD-trees are useful for performing nearest neighbors searches on data of n-dimensions. In this case we first need a set of scalar points to represent the comparison fields. For an e-bike this was: price, motor power, category, engine position, range, and weight. This data set used in this app contains almost 13,000 points! Each point represents a bike scraped from [here](https://www.greenfinder.de/e-bikes/models/), the self-purported largest e-bike database in the world.

Once the tree is built you can query it for similar bikes (nearest neighbors) by either providing a data point for an existing bike or a 'synthetic' bike with user-defined fields. Look ups are extremely fast which makes it an appropriate data structure for an interactive comparison tool where it would be undesirable to experience latency with each comparison. Time and space complexity are on the order of O(n).

