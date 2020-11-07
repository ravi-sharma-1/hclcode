let data = {
    "userInfo": [{
        "email":"raj@gmail.com",
        "name": "Raj",
        "password":"1234",
        "role":"user"
    },{
        "email":"tarun@gmail.com",
        "name": "Tarun",
        "password":"4567",
        "role":"user"
    },{
        "email":"abhishek@gmail.com",
        "name": "Abhishek",
        "password":"8901",
        "role":"admin"
    }],
    "bookSearchResults":[{
        "id":1,
        "rackNo":"a",
        "copies":2,
        "title":"Book1",
        "author":"Author1",
        "subject":"Maths"

    },{
        "id":2,
        "rackNo":"b",
        "copies":4,
        "title":"Book2",
        "author":"Author2",
        "subject":"Physics"

    },{
        "id":3,
        "rackNo":"a",
        "copies":1,
        "title":"Book3",
        "author":"Author3",
        "subject":"Science"

    }],
    "bookIssued":[{
       "email": "tarun@gmail.com",
       "numberOfCopies":1,
       "bookId":1
    }, {
        "email": "raj@gmail.com",
        "numberOfCopies":1,
        "bookId":2
     }]
}
export default data;