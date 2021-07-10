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

**Solved Problem**

- Decouple the Creation of an Object from Implementation
- also can used to Enforce the Encapsulation by Leveraging Closures

What's Meaning By Decouple Creation here ? <br />
like if i want to Refactor Class and add new Classes Will be Dynamically to add new Type<br />
E.G:
Need to Add a Class Handles the Logic Of The Creation of Gif Image<br />
and another one for JPEG Image and so on<br />
if i want to add new Class for Another Different Images and Code Still Clean?<br />
So The Best way to do That is Abstract Factory Pattern<br />

**Abstract Factory Dynamic Class Code Snippet**

```javascript
import { ImageGif } from './imageGif.js';
import { ImageJpeg } from './imageJpeg.js';
import { ImagePng } from './imagePng.js';

function createImage(name) {
  if (name.match(/\.jpe?g$/)) {
    return new ImageJpeg(name);
  } else if (name.match(/\.gif$/)) {
    return new ImageGif(name);
  } else if (name.match(/\.png$/)) {
    return new ImagePng(name);
  } else {
    throw new Error('Unsupported format');
  }
}

const image1 = createImage('photo.jpg');
const image2 = createImage('photo.gif');
const image3 = createImage('photo.png');
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
import { UrlBuilder } from './urlBuilder.js';

const url = new UrlBuilder().setProtocol('https').setAuthentication('user', 'pass').setHostname('example.com').build();
```

Builder Class
Note **return this** it's Related to Chain of Responsibilites we will talk later about this Pattern

```javascript
export class UrlBuilder {
  setProtocol(protocol) {
    this.protocol = protocol;
    return this;
  }

  setAuthentication(username, password) {
    this.username = username;
    this.password = password;
    return this;
  }

  setHostname(hostname) {
    this.hostname = hostname;
    return this;
  }

  setPort(port) {
    this.port = port;
    return this;
  }

  setPathname(pathname) {
    this.pathname = pathname;
    return this;
  }

  setSearch(search) {
    this.search = search;
    return this;
  }

  setHash(hash) {
    this.hash = hash;
    return this;
  }

  build() {
    return new Url(
      this.protocol,
      this.username,
      this.password,
      this.hostname,
      this.port,
      this.pathname,
      this.search,
      this.hash
    );
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

#### Wiring Modules (This One of the Most Interesting Topics Singleton + Dependency injection)

Every App is The Result of Aggregation of Several Components and App Grows,
the Way we connect these Components Becomses Win Or Lose Factor
For the Maintainability and Success Of The Project<br />
[This Great Quote From Nodejs Design Patterns Book And Most of Code Snippets Also](https://www.packtpub.com/product/node-js-design-patterns-third-edition/9781839214110)

Let's Say we Have A Service(A) >>>>>>>> Service(B)<br />
We want these Services Talks With Each Other and also Reuse These Services in Different Places<br />
So Every time we will Create new Instance From This Service ? <br />
The First Thing Comes in your Mind is to Make It as Singleton
And that's Also what is i was Thinking about at First
But we still have a Problem here is Related to<br />
1- Mock Our Services <br />
2- Let's Say i will change the whole Object Also<br />
these Two Problem Can Solve by **Dependency Injection**<br />
Just Inject The Object to Another Objection Constructor

#### Dependency Injection

Module System with Singleton can Servce as Great Tool for Organizing and Wiring Component Together

but on the other hand they Might Be Tighter Coupling between Components

So Dependency Injection is the Ideal Solution for Wiring Modules Together,
And Solving The Coupling between Modules, and Mock Test Cases

Purpose:

- Solving Thightly Coupled Between Modules
- Mock Services Easily

So Now The Communication Between Services is Become Easy By Using
**Singleton + Dependency Injection**

**Dependency Injection Code Snippet**

```javascript
export class Blog {
  constructor(db) {
    this.db = db;
    this.dbRun = promisify(db.run.bind(db));
    this.dbAll = promisify(db.all.bind(db));
  }
  initialize() {}
  createPost(id, title, content, createdAt) {}
  getAllPosts() {}
}
```

```javascript
import { Blog } from './blog.js';

const db = createDb(join(__dirname, 'data.sqlite'));
const blog = new Blog(db);
```

#### Conclusion

Most of Frameworks already Using these Staff like Nestjs, Laravel,...
by Another Pattern Called Inversion of Control (IOC)
Allows us to Shift the Responsibilites of Wiring
modules to Third Party Package Called (IOC Containers)
One of the Most Interseting Typescript IOC Container is [InversifyJS](https://www.npmjs.com/package/inversify)

### Structural Design Patterns

Structural Design Patterns Are Focused on Prodividing ways To Realize Relationshop between Entites

- Proxy: A Pattern That Allows us to Control Access to Another Object
- Decorator: A Common Pattern to Enhance and Add New Functionality to Existing Object
- Adapter: Allows us to Access the Functionality Of Object Using Different Interface like a Wrapper

#### Proxy Design Pattern

Proxy Pattern Mainly Control Access to Another Object Called **Subject**
The Proxy and Subject Have Identical The Same Interface (E.G Function names)

![](StructuralPatterns/Proxy/Proxy.png)

##### Use Cases

- **Data Validation**: The Proxy Validates the INput Before Forwarding it to the Subject <br />
- **Security**: Proxy Verifies that the Client is Authorized to Perform the functionality <br />
- **Caching**: The Proxy Keeps internal Cache so that the Proxied Operation are executed <br />
- **Logging**: Before Execute the Subject Functionality we can Easily log anything <br />

If You Want Fully Code check Proxy Folder inside **StructuralPatterns**

##### in The Wild

- LoopBack: Framework Using Proxy to intercept and enhance method calls on Controllers & Custom Validation
- Vuejs Version3: Has reimplemented Observable properties using Proxy Pattern

**Proxy Code Snippet**

```javascript
class Calculator {
  divide(dividend, divisor) {
    const result = dividend / divisor;
    return result;
  }
}

class SafeCalculator {
  constructor(calculator) {
    this.calculator = calculator;
  }
  divide(dividend, divisor) {
    if (divisor === 0) {
      throw Error('Division by 0');
    }
    return this.calculator.divide(dividend, divisor);
  }
}
const calculator = new Calculator();
const safeCalculator = new SafeCalculator(calculator);
```

#### Decorator Design Pattern

Structural Design Pattern That Consists in Dynamically Augmenting the Behavior of Existing Object
it's Very Similar to Proxy Design Pattern But There is Some Difference <br />

**Diff Between Proxy & Decorator** <br />
_Decotrator_: Allows to Enhance the Functionality of Existing Object with new Behavior <br />
_Proxy_: is Used to Control the Access to A Concrete or Virtual Object <br />

If You Look at this Picture you will see MethodC() has been added Not Like the same we did at Proxy
there is not New Functionality their

![](StructuralPatterns/Decorator/Decorator.png)

##### Use Cases

One of the most Use Case here if you want to Enhance the Functionality of Existing Object
so After Google Created LevelUp Database Most of Developers Enhanced it and used it in different Senarios
You Can Look at this Repo [Awesome-levelUp-Database](https://github.com/Level/awesome)

If You Want Fully Code check Decorator Folder inside **StructuralPatterns**

**Decorator Code Snippet**

```javascript
class Calculator {
  divide(dividend, divisor) {
    const result = dividend / divisor;
    return result;
  }
}

class EnhancedCalculator {
  constructor(calculator) {
    this.calculator = calculator;
  }
  add(X, Y) {
    return X + Y;
  }
  divide(dividend, divisor) {
    if (divisor === 0) {
      throw Error('Division by 0');
    }
    return this.calculator.divide(dividend, divisor);
  }
}
const calculator = new Calculator();
const enhancedCalculator = new EnhancedCalculator(calculator);
```

#### Adapter Design Pattern

The Adapter Patterns allows us to Access the Functionality of an Object Using Different Interface
Like a Wrapper Around any Functionality

##### Real Life Example

adapter would be a Device that allows you to Plug a USB Type-A Cable into USB Type-C Port

##### Use Cases

- **Payment Online Solution**: that you're Going to Wrap you Payment Online Like Stripe/Paypal
  and Easy you Can Change Between Payment Gateways
  [Dependency-Inversion-With-Payment-Gateway-Using-Stripe-Paypal](https://github.com/eslamelkholy/Dependency-Inversion-With-Payment-Gateway-Using-Stripe-Paypal) <br />

- **JugglingDB**: Multi Database ORM Using Multiple Adapter to Be Compatible with Different Database <br />

We Are Going to Wrap fs-module and makes our Fs-module and Saving the Result in memory instead of File <br />

If You Want Fully Code check Adapter Folder inside **StructuralPatterns** and also Highly Recomended Check This Repo
if you want to know more about Adapter and Dependency Invesion Principle [Dependency-Inversion-With-Payment-Gateway-Using-Stripe-Paypal](https://github.com/eslamelkholy/Dependency-Inversion-With-Payment-Gateway-Using-Stripe-Paypal)

**Adapter Code Snippet**

```javascript
import FsMemoryAdapter from './fs-adapter-memory.js';
import VirtualMemory from './virtualMemory.js';

const db = new VirtualMemory();
const fs = new FsMemoryAdapter(db);

fs.writeFile('file.txt', 'Hello!', () => {
  fs.readFile('file.txt', { encoding: 'utf8' }, (err, res) => {
    if (err) {
      return console.error(err);
    }
    console.log(res);
  });
});
// try to read a missing file
fs.readFile('missing.txt', { encoding: 'utf8' }, (err, res) => {
  console.error(err);
});
```

### Behavioral Design Patterns

Mainly Focus at the Behavior of the Component and how Combine Objects and how to Define
The Way the Communicates with Each Other

#### Major Problems Mainly Creational Design Patterns Focus on

- How Do i Change Part of Algorithm at the Run time
- How Change Behavior of Object Based on State
- How Do i Iterate over Collection Without Knowing the Implementation

#### Behavioral Design Patterns Are Focused on Prodividing ways Make Communication between Object Easier

- Strategy: Helps Us Change Parts of Components to Adapt it to Specific needs
- State: Allows us to Change Behavior of Component based on State
- Template: Allows us to Reuse the Structure of Component to Define new One
- Iterator: Iterate over collection without knowing implementation
- Command: Handle Information Transfered , stored and Processed

#### Strategy Design Pattern

Change Part Of Algorithm at Runtime and Easily change the whole Logic Based on Context<br />

![](BehavioralPatterns/Strategy/Strategy.png)

##### Use Cases

- if you would like change the way you're Calculating the fees at the runtime
- Like if you want to Implement A Feature Loading Data from A Configuration File one is Json and the other is .ini

##### In The Wild

- Passport Authentication Library already Uses Strategy To Separate the Common Logic during Authentication Process Like
  Facebook / Twitter and other Social media Authentication

##### Note Strategy / Adapter Difference

Strategy & Adapter patterns looks similar to Each others but Adapter Doesn't Add any Behavior Just makes it under another interface
so the difference that strategy looks Dynamic and Easily Change but adapter is Static without and Behavior

**Strategy Code Snippet**

```javascript
class Shipping {
  constructor() {
    this.company = '';
  }
  setStrategy(company) {
    this.company = company;
  }
  calculate(packageMoney) {
    return this.company.calculate(packageMoney);
  }
}

class UPS {
  constructor() {
    this.calculate = function (packageMoney) {
      console.log('Passed Package Money Here');
      console.log(packageMoney);
      // calculations...
      return '$45.95';
    };
  }
}
class Fedex {
  constructor() {
    this.calculate = function (packageMoney) {
      console.log('Passed Package Money Here');
      console.log(packageMoney);
      // calculations...
      return '$43.20';
    };
  }
}
// Two Strategy
var ups = new UPS();
var fedex = new Fedex();
// Context we have
var shipping = new Shipping();
shipping.setStrategy(ups);
console.log('UPS Strategy: ' + shipping.calculate(packageMoney));

shipping.setStrategy(fedex);
console.log('Fedex Strategy: ' + shipping.calculate(packageMoney));
```

#### State Design Pattern

State Pattern is Specialization of Strategy Pattern Where the Strategy Changes Depending On The State of The Context
Because Normal Strategy Remains unChanged For THe Rest of Lifespan Of Context Object

One of the Best Example you can See at the Reactjs App If Anything Changed already Conflict on the Whole Page
Without Refresh

##### You Can Check the Whole Code Snippet at the Directory BehavioralPatterns/State

#### Template Design Pattern

Defines Abstract Class that Implements the Skeleton ( Represent Common Parts )<br />
Has Alot in Common with **Strategy** <br/>
The **Intent** of This Pattern is To Make it Possible to Define a Family of Classes that Are All Variations of A Family of Component

![](BehavioralPatterns/Template/Template.png)

##### Note Strategy / Template Difference (The Purpose)

Strategy and Template is Very Similar but the Difference Between the Two Lies in Structure and Implementation. <br/>
Both allow us to Change the Variable Parts of Component While Reusing the Common Pars, <br/>

Strategy: allows to Do It Dynamically at the runtime <br/>
Template: The Complete Component is Determined the moment the concrete class is defined <br/>

Template **use Case** might be More Suitable where we want to create prepackaged variations of Component

##### In The Wild

when you want to Create you Own Custom Stream and Extends Readable, Writable,... etc
You Must Implements Methods like read(), write(), and so On The Create your Custom Stream

**Template Code Snippet**

```javascript
class Shipping {
  calculate() {
    throw new Error('calculate() must be implemented');
  }
}

class UPS extends Shipping {
  constructor() {
    super();
    this.calculate = function (packageMoney) {
      console.log('Passed Package Money Here');
      console.log(packageMoney);
      // calculations...
      return '$45.95';
    };
  }
}

class Fedex extends Shipping {
  constructor() {
    super();
    this.calculate = function (packageMoney) {
      console.log('Passed Package Money Here');
      console.log(packageMoney);
      // calculations...
      return '$43.20';
    };
  }
}

var packageMoney = { from: '76712', to: '10012', weigth: 'lkg' };
var ups = new UPS();
var fedex = new Fedex();

console.log('UPS Strategy: ' + ups.calculate(packageMoney));
console.log('USPS Strategy: ' + fedex.calculate(packageMoney));
```

#### Iterator Design Pattern

Iterator Pattern Defines a Common Interface or Protocol for Iterating The Elements of Container
Such As Array or Tree Data Structure
**iterate** Different Depends on the Data Structure

##### Benefits Of Iterator Design Patterns

Decouple the Implementation of Traversal Algorithm From The Way We Consume The Result

##### Implementation Of Iterator

Iterator Pattern is self have so many Different Ways to Implement It, <br/>
Like Iterate over Arrays, Iterate over Async Operation Using Generator or Normal Function and so Many things
Here we will use Something Called Javascript Protocol Comes with ES5 Help Us To implement Iterator Pattern
Easily with Normal Async Operations

##### Use Case (Very Important and Commonly Used)

- Iterate over Data Paginated By REST API and Want to Get All Data
- Iterate over Requests Received By Http Service
- Iterate over Result of an SQL Query

##### Example

We Are going To Implement Simple Example Send Request to Multiple URLs And Check if Available Or Not
Also Check Directory BehavioralPatterns/Iterator Pattern For More Example Using Generators

**Iterator Code Snippet**

```javascript
import superagent from 'superagent';
export class CheckUrls {
  constructor(urls) {
    this.urls = urls;
  }

  [Symbol.asyncIterator]() {
    const urlsIterator = this.urls[Symbol.iterator]();

    return {
      async next() {
        const iteratorResult = urlsIterator.next();
        if (iteratorResult.done) {
          return { done: true };
        }

        const url = iteratorResult.value;
        try {
          const checkResult = await superagent.head(url).redirects(2);
          return {
            done: false,
            value: `${url} is up, status: ${checkResult.status}`,
          };
        } catch (err) {
          return {
            done: false,
            value: `${url} is down, error: ${err.message}`,
          };
        }
      },
    };
  }
}

const checkUrls = new CheckUrls([
  'https://nodejsdesignpatterns.com',
  'https://example.com',
  'https://mustbedownforsurehopefully.com',
]);
for await (const status of checkUrls) {
  console.log(status);
}
```

#### Command Design Pattern

A Command Pattern can be any Object that Encapsulates all the Information neccessary To Perform an Action at later Time
So, instead of invoking a method or a function directly, we create an object representing the intention to
perform such an invocation.

Most of Functionality has been used to undo(), delay() , run() Speicific Operations

![](BehavioralPatterns/Command/Command.png)

#### In The Wild

The Best Example of Command Pattern at the Wild is Redux
That Separate the Action From The Execution That updated the Reducers
it's also often has Been Using In Functional Programming

#### Fully Example you Can Find in The Directory BehavioralPattern/Command
