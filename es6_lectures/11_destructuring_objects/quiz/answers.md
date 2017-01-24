##Quiz: Destructuring Animals (Objects)

Let's practice destructuring assignment with objects with a couple questions about animals.

###1)

Consider this object

```javascript
const lion = { size: 'large', sound: 'roar' };
```

Which of the following statements uses destructuring assignment to give the variable, sound, the value of 'roar'?

a) let sound = lion.roar;

explanation: Incorrect because this does not use destructuring assignment. Although sound does = 'roar';

**b) let { sound } = lion;** //answer

explanation: Correct! This uses destructuring assignment to set the sound property in lion of 'roar', to the sound variable.

c) let sound = 'roar';
explanation: Incorrect because this does not use destructuring assignment. It just sets the value of sound to 'roar'.


###2)

Consider this object

```javascript
const mouse = { size: 'small', sound: 'squeak '};
```

Which of the following statements uses destructuring assignment to assign two variables, size to 'small', and sound to 'squeak'?

a) let { size } = mouse;
explanation: Incorrect. Although this uses destructuring assignment, we want both size and sound, not just size.

b) { size, sound } = mouse;
explanation: Incorrect. Although this looks like destructuring assignment, it's actually a scoped coding block that will throw a syntax error.

c) **let { size, sound } = mouse;** // answer
explanation: Correct! This uses destructuring assignment to assign both the size and sound variable to the properties in mouse.
