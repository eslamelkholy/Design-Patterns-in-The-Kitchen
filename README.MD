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

