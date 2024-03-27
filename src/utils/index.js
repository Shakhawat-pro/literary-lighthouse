import toast from 'react-hot-toast';

const getBook = () => {
  const storedBook = localStorage.getItem('books');
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
}

const saveBook = id => {
  const savedBooks = getBook(); 
  const exist = savedBooks.find(b => b === id);
  if (exist) {
    return toast.error('Already Bookmarked!');
  }
  savedBooks.push(id); 
  localStorage.setItem('books', JSON.stringify(savedBooks));
  toast.success('Book Bookmarked Successfully!');
}

const getWish = () => {
  const storedWish = localStorage.getItem('wish');
  if (storedWish) {
    return JSON.parse(storedWish);
  }
  return [];
}

const saveWish = id => {
  const savedBooks = getBook(); // Retrieve bookmarked items
  const savedWish = getWish(); // Retrieve wishlisted items
  
  const existBook = savedBooks.find(b => b === id); // Check if book is already bookmarked
  const existWish = savedWish.find(b => b === id); // Check if book is already wishlisted
  
  if (existBook) {
    return toast.error('Already Bookmarked, it cannot be wishlisted!');
  } else if (existWish) {
    return toast.error('Already Wishlisted!');
  } else {
    savedWish.push(id); // Add book to wishlist
    localStorage.setItem('wish', JSON.stringify(savedWish)); // Save wishlist to localStorage
    toast.success('Book added to Wishlist Successfully!');
  }
}

export { getBook, saveBook, getWish, saveWish };
