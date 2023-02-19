const books=require("./Books.json")
books.AllBooks.map(x=>{
    console.log(x.BookTitele);
    console.log(x.BorrowedBooks);
}
    
    );