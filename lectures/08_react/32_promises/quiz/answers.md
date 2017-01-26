##Quiz: ES6 JSX and Promises

Let's hone in on JSX and Promises for the final quiz!

##1)
Which statement represents valid JSX syntax?

a) <div>Hello from JSX!</div>
Explanation: True, but there may be more than one answer.

b) <App />
Explanation: True, but there may be more than one answer.

**c) All of the above.** // answer
Explanation: Correct! Both answers represent valid JSX. Even <App /> represents a valid self-enclosing tag in JSX (assuming App is a defined component).

##2)
Which statement correctly handles the promise returned by the fetch method in es6?

a) fetch('https://api.com?data').then(console.log(data));

Explanation: Incorrect. The syntax for handling promises is to handle data with a then statement, declare a variable within, and handle it with an arrow function.

**b) fetch('https://api.com?data').then(response => console.log(response));** // answer

Explanation: Correct! This displays the correct syntax for handling promises.

c) fetch('https://api.com?data').then() => { response };
Explanation:  Incorrect. The syntax for handling promises is to handle data with a then statement, declare a variable within, and handle it with an arrow function.
