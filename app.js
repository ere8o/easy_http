const http = new easyHTTPv2();

// http.get('https://jsonplaceholder.typicode.com/posts',
//     function (err, posts) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(posts);
//         }
//     }
// );

// Create Data
// const data = {
//     title: 'Custom Post',
//     body: 'This is a custom post',
//     chichis: 'presta'
// };

//Create Post
// http.post('https://jsonplaceholder.typicode.com/posts',
//     data,
//     function (err, post) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(post);
//         }
//     }
// );

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5',
// data,
// function (err,post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Delete Post
// http.delete('https://jsonplaceholder.typicode.com/posts/1',
//     function (err, response) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(response);
//         }
//     }
// );

// Get Users
url = 'https://jsonplaceholder.typicode.com/users'
// const users = http.get(url)
//     .then(data => console.log(data))
//     .catch(err => console.log(err)
//     );


// Create Data
const data = {
    name: 'Jhon Doe',
    username: 'jhondoe',
    email: 'jdoe@mail.com'
};

// http.post(url, data)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// http.put(url+'/2', data)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

http.delete(url + '/2')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })


