class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, available) {
        this.books.push({ title, author, available });
    }

    getAvailableBooks() {
        return this.books.filter(book => book.available);
    }

    searchByAuthor(author) {
        return this.books.find(book => book.author.toLowerCase() === author.toLowerCase());
    }
}

const myLibrary = new Library();

myLibrary.addBook("The Alchemist", "Paulo Coelho", true);
myLibrary.addBook("A Brief History of Time", "Stephen Hawking", false);
myLibrary.addBook("Wings of Fire", "APJ Abdul Kalam", true);

console.log(myLibrary.getAvailableBooks());
console.log(myLibrary.searchByAuthor("Paulo Coelho"));
