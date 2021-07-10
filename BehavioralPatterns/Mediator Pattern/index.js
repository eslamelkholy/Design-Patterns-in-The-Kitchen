/**
 * Mediator Design Pattern
 * Provides Set Of Object With Interact With Each Other
 * Mostly By Having Central Authority Dictating the Terms In Between Object
 */

/**
 * By This Great Examples and how To Organize The All Object Through Abstract Class
 * TraficTower and Get all Objects and it Positions
 */
class TrafficTower {
  constructor() {
    this.airplanes = [];
  }

  requestPositions() {
    return this.airplanes.map((airplane) => airplane.position);
  }
}
class AirPlane {
  constructor(position, trafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airplanes.push(this);
  }

  requestPositions() {
    return this.trafficTower.requestPositions();
  }
}
const trafficTower = new TrafficTower();

const airPlane1 = new AirPlane("Mansoura", trafficTower);
const airPlane2 = new AirPlane("Cairo", trafficTower);
const airPlane3 = new AirPlane("Alex", trafficTower);

console.log(trafficTower.requestPositions()); // ['Mansoura', 'Cairo', 'Alex']
