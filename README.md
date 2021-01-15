# navigation-tech-test

## Description

### Implement an application that will find the shortest routes between two points, given the points and distances between them. Each route can be travelled in either direction.

* As an example, to get from B to H there are a number of routes (below list is not exhaustive):
* B, E, H
* B, D, G, H
* B, D, C, F, G, H 

And so on... <br>

The application should return the shortest route in terms of distance travelled, not how many hops were made. In the example above, the shortest route is B, D, G, H – which gives a distance of 10. There is a route with fewer hops, B, E, H, but it has a greater distance of 17 which means that is not the shortest route.

### Requirements
* This should be a vanilla Javascript application, no libraries or frameworks
* You should be writing Unit Tests for core functionality
