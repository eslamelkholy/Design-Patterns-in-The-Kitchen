/**
 * Iterator Pattern
 * Is another Method of Iterating through List Of items
 * The Best Use Case When iterate Through List Of Objects
 */

const newsFeed = [
  {
    type: "top-headlines",
    query: "sources=bbc-news",
  },
  {
    type: "everything",
    query: "domains=techcrunch.com&language=en",
  },
  {
    type: "everything",
    query: "domains=comicbookmovie.com&language=en",
  },
];

for (let feed of newsFeed) {
  console.log(feed.type);
}
