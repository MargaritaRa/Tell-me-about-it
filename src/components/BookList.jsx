import React, { useState } from 'react';

const BookList = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            if (query.trim() === '') {
                
                setError('Please enter a valid search term.');
                return;
            }

            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            setBooks(data.items || []);
            setError(null); 
        } catch (error) {
            console.error('Error fetching book data:', error);
            setError('Failed to fetch book data. Please try again later.');
        }
    };

    return (
        <div className='post-content'>
            <h1>Book Search</h1>
            <input
                type="text"
                placeholder="Enter book title, author, or keyword"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch} className='btn btn-search'>Search</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div>
                {books.map((book) => (
                    <div key={book.id} className='container-search'>
                        <h2>{book.volumeInfo.title}</h2>
                        <img
                            src={book.volumeInfo.imageLinks?.thumbnail || ''}
                            alt={book.volumeInfo.title}
                            style={{ maxWidth: '100px' }}
                        />
                        <p>Authors: {book.volumeInfo.authors?.join(', ') || 'Unknown'}, 
                            Publisher: {book.volumeInfo.publisher || 'Unknown'}</p>
                        <p className='boolList-description'>Description: {book.volumeInfo.description || 'No description available'}</p>
                        
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
