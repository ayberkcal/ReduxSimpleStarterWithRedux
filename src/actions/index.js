// if function has not exported with "default" keyword,
// function cannot called by another name in another js file
// read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
//export default function selectBook(book) {
export function selectBook(book) {
    // selectBoot is an ActionCreate, it needs to return an action,
    // an object with a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}