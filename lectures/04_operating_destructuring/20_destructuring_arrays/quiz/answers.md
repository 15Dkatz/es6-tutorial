##Quiz: Destructuring the Fellowship (Array)

Let's get the hang of destructuring assignment with a few questions about the fellowship.


###1)

Consider this array

```javascript
const fellowship = ["Frodo", "Gandalf", "Aragorn", "Legolas", "Gimli"];
```

Which of the following statements will give me the variable, wizard, with the value of "Gandalf"?

**a) let [hobbit, wizard, ranger, elf, dwarf] = fellowship;** //answer

explanation: Correct! Destructuring assignment looks at the order in the array. Because the wizard variable is the second element in the assignment array, it assigns to the fellowship array's second element, "Gandalf". 

b) let [...characters] = fellowship;
explanation: Although this makes a new array, it does not assign a wizard variable.

c) let [wizard, hobbit, elf, dwarf, ranger];
explanation: Destructing assignment looks at the order in the array. Wizard is the first variable in the assignment, so it will match to 'Frodo' and not 'Gandalf'

###2)

Consider the same array

```javascript
const fellowship = ["Frodo", "Gandalf", "Aragorn", "Legolas", "Gimli"];
```

Which of the following statements gives me the array, three_amigos, with the value ["Aragorn", "Legolas", "Gimli"]?

a) let [...three_amigos] = fellowship;

explanation: This statement actually assign the entire fellowship array to three_amigos.

b) let [hobbit, ...three_amigos] = fellowship;

explanation: This statement assigns hobbit to "Frodo", but doesn't capture only ["Aragorn", "Legolas", "Gimli"] in three_amigos.

**c) let [hobbit, wizard, ...three_amigos] = fellowship;** // answer

explanation: Correct! This statement assigns hobbit to "Frodo" and wizard to "Gandalf". Using the spread operator, three_amigos captures the rest of the fellowship, ["Aragorn", "Legolas", "Gimli"].
