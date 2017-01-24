##Quiz: Destructuring the Fellowship (Array)

Let's get the hang of destructuring assignment with a few questions about the fellowship.


###1)

Consider this array

```javascript
const fellowship = ["Frodo", "Gandalf", "Aragorn", "Legolas", "Gimli"];
```

Which of the following statements will give me the variable, wizard, with the value of "Gandalf"?

a) let [hobbit, wizard, ranger, elf, dwarf] = fellowship;

b) let [...characters] = fellowship;

c) let [wizard, hobbit, elf, dwarf, ranger];


###2)

Consider the same array

```javascript
const fellowship = ["Frodo", "Gandalf", "Aragorn", "Legolas", "Gimli"];
```

Which of the following statements gives me the array, three_amigos, with the value ["Aragorn", "Legolas", "Gimli"]?

a) let [...three_amigos] = fellowship;

b) let [hobbit, ...three_amigos] = fellowship;

c) let [hobbit, wizard, ...three_amigos] = fellowship;
