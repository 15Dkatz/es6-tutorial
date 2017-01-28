##Quiz: Exports and Imports (Modules)

Let's reinforce our knowledge of exporting and importing in modules with three questions.

###1)
True or False?

You can export multiple values from a module at once.

**a) True** // answer

Explanation: You can indeed export multiple values from a module at once by just using the 'export' keyword more than once.

b) False

Explanation: You can actually export multiple values from a module at once by just using the 'export' keyword more than once.


###2)
Which of the following statements is valid syntax for importing in es6?

a) import students, total from './students';

Explanation: Incorrect. You need to completely wrap the 'students' and 'total' values in blocks of curly braces to import multiple variables.

b) import { students }, total from './students';

Explanation: Incorrect. You need to completely wrap the 'students' and 'total' values in blocks of curly braces to import multiple variables.

**c) import { students, total } from './students';**
Explanation: Correct! This imports both the 'students' and 'total' values from './students'.


###3)
Which of the following statements uses the 'default' keyword correctly?

a) export const by default limit = 90;

Explanation: Incorrect. 'by default' is invalid syntax.

b) export default const a = 20;

Explanation: Incorrect. The `export default` syntax already creates the default variable. We can't also declare an 'a' const on the same line.

**c) let greet = () => { return 'hello '};
     export default greet;** // answer

Explanation: Correct! This uses the 'default' keyword correctly to export a greet function as a module's fallback.
