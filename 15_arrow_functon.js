const user = {
    username: "gurkirat",
    price:999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to wesbsite`);
    }           // this => refers to the object which is calling the function, in this case it is user object
}