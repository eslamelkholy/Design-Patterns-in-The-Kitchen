# Nodejs Design Patterns
Design Pattern is a Reusable Solution to Recurring Problem
were Popularized in the 90s by the almost Legendary Gang of Four (GoF)
Split into Three Things Creational, Structural , Behavioral Patterns

### Creational Design Patterns

Creational Design Patterns Solved Alot Of Problems Related to The Creation Of Object 
Split into Multiple Patterns
- Factory 
- Builder
- Singleton
- Revealing Constructor (Not Related to GoF Patterns)


#### Abstract Factory Design Pattern

- Solved Problem
1- Decouple the Creation of an Object from Implementation
2- also can used to Enforce the Encapsulation by Leveraging Closures

What's Meaning By Decouple Creation here ? 
like if i want to Refactor Class and add new Classes Will be Dynamically to add new Type
**Abstract Factory Dynamic Class Code Snippet**

```javascript 
import { ImageGif } from './imageGif.js'
import { ImageJpeg } from './imageJpeg.js'
import { ImagePng } from './imagePng.js'

function createImage (name) {
  if (name.match(/\.jpe?g$/)) {
    return new ImageJpeg(name)
  } else if (name.match(/\.gif$/)) {
    return new ImageGif(name)
  } else if (name.match(/\.png$/)) {
    return new ImagePng(name)
  } else {
    throw new Error('Unsupported format')
  }
}

const image1 = createImage('photo.jpg')
const image2 = createImage('photo.gif')
const image3 = createImage('photo.png')
```

#### Builder Design Pattern

Builder is Used to Simplifies the Creation of Complex Object 
by Providing a Fluent interface allow us to Build Object Step by Step
**The First Question is What's Complex Object and how this Help me ?**
The Complex Object here is Reference to Object that The Creation of it Takes alot of things
Like Takes alot Of Paramters as Input, have a long steps to Create it

##### in The Wild
Builder is Common patterns in JS As **Superagent** Already Uses Builder Pattern
Because Request takes too many Paramters to it as an input [Superagent Builder Source Code ](https://github.com/visionmedia/superagent/blob/40424e62fbf534823b18b64a8f5f0a6680606cbe/src/client.js#L427)

**Builder Code Snippet**

Builder Result Object
```javascript
import { UrlBuilder } from './urlBuilder.js'

const url = new UrlBuilder()
  .setProtocol('https')
  .setAuthentication('user', 'pass')
  .setHostname('example.com')
  .build()

```

Builder Class
Note  **return this** it's Related to Chain of Responsibilites we will talk later about this Pattern

```javascript
export class UrlBuilder {
  setProtocol (protocol) {
    this.protocol = protocol
    return this
  }

  setAuthentication (username, password) {
    this.username = username
    this.password = password
    return this
  }

  setHostname (hostname) {
    this.hostname = hostname
    return this
  }

  setPort (port) {
    this.port = port
    return this
  }

  setPathname (pathname) {
    this.pathname = pathname
    return this
  }

  setSearch (search) {
    this.search = search
    return this
  }

  setHash (hash) {
    this.hash = hash
    return this
  }

  build () {
    return new Url(this.protocol, this.username, this.password,
      this.hostname, this.port, this.pathname, this.search,
      this.hash)
  }
}
```

#### Singleton Design Pattern
The Purpose of Singleton is to Enforece the Presence of only one instance of class and Centralize it's Access

Use Case:
  - Sharing Stateful Information
  - Optimize the Resource of Usage
  - Synchronize access to Resource
In The Wild:
  Database Connection Already Using This Pattern
The Easiest Way to Create Singleton in Nodejs is Just to **Cache the Module**

**Singleton Code Snippet**
```javascript
class Calculator {
  constructor(initialVal) {
    this.initialVal = initialVal;
  }
  increase(val) {
    this.initialVal += parseInt(val);
  }
  total() {
    return this.initialVal;
  }
}
module.exports = new Calculator(0);
```




