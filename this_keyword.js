let obj = {
    name: "John",
    sayHello: function() {
        console.log("Hello, " + this.name);
    }
};

obj.sayHello(); // Output: Hello, John
