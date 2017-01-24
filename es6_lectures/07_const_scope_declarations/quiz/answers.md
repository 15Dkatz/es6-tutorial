##Quiz: Can we manipulate constants?

###1)

Say we have:

```javascript
const array = [1, 2, 3].
```

Which of the following statements is valid and will not throw an error?

a) array = [1, 2, 3, 4];

explanation: This line re-assigns the array const. You can't re-assign constants, otherwise you will see a TypeError.

**b) array.push(4);** // the answer

explanation: Correct! Although this line manipulates the const array. It does not re-assign the actual array const itself. This is valid!

c) array = 3 + 1;

explanation: This line re-assigns the array const. You can't re-assign constants, otherwise you will see a TypeError.
