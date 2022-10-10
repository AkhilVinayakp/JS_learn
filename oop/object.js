function create_User(id, contry_code){
    let obj = {
        name: 'ravi',
        for: 'raju', // keyword can be key,
        id, // shorthand for id:id,
        [contry_code]: "IN" // computed/dynamic key value

    }
    console.table(obj);
    console.log(`name : ${obj.name}`)
    console.log(`looking for ${obj['for']}`); // accessing through []
}
create_User(12, 'www')

