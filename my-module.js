import axios from "axios";
async function getData(number) {
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/"+ number)

    const {data: posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+ number)

    console.log(user,posts);
}


export default getData;