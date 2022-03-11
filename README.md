
# E-bike Comparison Tool

A small React App that uses a [static KD-Tree](https://github.com/mikolalysenko/static-kdtree) to do a K-nearest neighbors search on scraped e-bike data.

KD-trees are useful for performing nearest neighbors searches on data of n-dimensions. In this case we first need a set of scalar points to represent the comparison fields. For an e-bike this is: **price**, **motor power**, **category**, **engine position**, **range**, and **weight**. The data set used in this app represents almost 13,000 different bikes with manufacture dates between 2012 and 2021. Each point represents a bike scraped from [here](https://www.greenfinder.de/e-bikes/models/), the self-purported "largest e-bike database in the world."

Once the tree is built you can query it for similar bikes (nearest neighbors) by either providing a data point for an existing bike or a 'synthetic' bike with user-defined fields. Look ups are extremely fast which makes it an appropriate data structure for an interactive comparison tool where it would be undesirable to experience latency with each comparison. Time and space complexity for look-ups are on the order of O(n).

<img src="https://user-images.githubusercontent.com/4350125/157807406-61b89fb3-fa48-4092-9841-156f68dc2449.png" width="75%">
<img src="https://user-images.githubusercontent.com/4350125/157807418-fd8bb120-6f18-454f-887f-b50574e00a9b.png" width="75%">
