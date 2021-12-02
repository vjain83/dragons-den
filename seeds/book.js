
const { Book } = require('../models');

const bookdata = [
  {
    title: 'A Tale of two Cities',
    author: 'Charles Dickens',
    isbn: 9
    edition: 1998
    genre: 'Historical Fiction',
},
  {
    title: 'The Hobbit',
    author: 'J.R.R.Tolkien',
    isbn: 7
    edition: 2013
    genre: 'Novel, High fantasy, Fantasy Fiction, Epic',
  },
  {
    title: 'Will',
    author: 'Will Smith',
    isbn: 1
    edition: 2021
    genre: 'Biography & Memoirs',
  },
  {
    title: 'The Judges List: A Novel',
    author: 'John Grisham',
    isbn: 0385546025
    edition: 2021
    genre: 'Fiction, Thrillers, Suspense',
  },
  {
    title: 'The Lion, the Witch and the Wardrobe',
    author: 'C. S. Lewis',
    isbn: 9780064471046
    edition: 2002
    genre: 'Childrens fantasy, Christian literature',
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J. D. Salinger',
    isbn: 7543321726
    edition: 1995
    genre: 'Realistic fiction, Coming-of-age fiction',
  },
  {
    title: 'Harry Potter and the Goblet of Fire',
    author: 'J.K. Rowling',
    isbn: 1408855682
    edition: 2014
    genre: 'Adventure fiction, Gothic fiction, Fantasy Fiction, Romance novel',
  },
  {
    title: 'Black Beauty',
    author: 'Anna Sewell',
    isbn: 1490523464
    edition: 2013
    genre: 'Fiction',
  },
  {
    title: 'The Ginger Man',
    author: 'J.P.Donleavy ',
    isbn: 9780802198167
    edition: 2010
    genre: 'Novel',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: 0446310786
    edition: 1995
    genre: 'Novel, Southern Gothic, Thriller, Domestic Fiction, Legal Story',
  },
  {
    title: 'Angels & Demons',
    author: 'Dan Brown',
    isbn: 074349346X
    edition: 2006
    genre: 'Mystery-thriller',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    isbn: 0062315005
    edition: 2014
    genre: 'Romantic family saga',
  },
  {
    title: 'The Great Gatsby',
    author: 'F.Scott Fitzgerald',
    isbn: 0743273567
    edition: 1925
    genre: 'Novel, Tragedy',
  },
  {
    title: 'Gone with the Wind',
    author: 'Margaret Mitchell',
    isbn: 0446675539
    edition: 1936
    genre: 'Historical Fiction',
  },
  {
    title: 'Who Moved My Cheese?',
    author: 'Spencer Johnson',
    isbn: 0091883768
    edition: 1998
    genre: 'Self-help, Motivational, Business fable, Psychology, Leadership, Parable',
  },
  {
    title: 'The Godfather',
    author: 'Mario Puzo',
    isbn: 1405882190
    edition: 1998
    genre: 'Crime novel',
  },
  {
    title: 'Adventures of Huckleberry Finn',
    author: 'Mark Twain',
    isbn: 0142437174
    edition: 2002
    genre: 'Picaresque novel, Bildungsroman, Satire, Robinsonade',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    isbn: 9780679783268
    edition: 2000
    genre: 'Classic Regency novel, Romance',
  },
  {
    title: 'Fear of Flying',
    author: 'Erica Jong',
    isbn: 0030107318
    edition: 1973
    genre: 'Romantic novel',
  },
  {
    title: 'Jaws',
    author: 'Peter Benchley',
    isbn: 0345544145
    edition: 2013
    genre: 'Thriller',
  },
  {
    title: 'Fifty Shades of Grey',
    author: 'E.L.James ',
    isbn: 9781612130286
    edition: 2011
    genre: 'Romance',
  },
  {
    title: 'The Book Thief',
    author: 'Markus Zusak',
    isbn: 033036426X
    edition: 2005
    genre: 'Novel-Historical Fiction, Bildungsroman',
  },
  {
    title: 'Life of Pi',
    author: 'Yann Martel	',
    isbn: 0676973760
    edition: 2001
    genre: 'Philosophical fiction',
  },
  {
    title: 'The Cat in the Hat',
    author: ' Dr. Seuss',
    isbn: 9780717260591
    edition: 1957
    genre: 'Childrens literature',
  },
];

const seedBook = () => Post.bulkCreate(bookdata);

module.exports = seedBook;
