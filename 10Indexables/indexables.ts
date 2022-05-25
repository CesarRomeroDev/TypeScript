/**
 * Los tipos indexables tienen una signatura de índice que describe el tipo que se puede usar para indexar en el objeto, junto con los tipos de valores devueltos correspondientes al indexar.

Por ejemplo, la interfaz IceCreamArray declara una signatura de índice como number y devuelve un tipo string. Esta signatura de índice indica que la interfaz IceCreamArray está indexada con un número y devolverá una cadena.
 */
interface IceCreamArray {
    [index: number]: string;        //* index es de tipo number pero va a regresar un valor de tipo string
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr);

//* **************************************************************************************************************** *//

const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();