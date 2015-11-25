var MyComponent = (function () {
    function MyComponent(message) {
        this.greeting = message;
    }
    MyComponent.prototype.greet = function () {
        return "Hello" + this.greeting;
    };
    return MyComponent;
})();
