
# _chapter 05 -  Let's get Hooked!_

## Q1. What is the difference between `Named Export`, `Default export` and `* as export`?
- `Named Export:` Named Export is used when we have multiple function or variable in one file then, we used Named Export. 
```bash
export func1;
export func2;
```

```bash
import {fun1, func2} from "./sample";
```

- `Default Export:` `Default Export` is used when we have one main component or function then, we export as a Default that function.
```bash
export default mainFunction;
```
```bash
import mainFunction from "./sample";
```
- `* as export:` If we have many Named Export function that we use * as obj for importing all the function together. 
```bash
export func1;
export func2;
export func3;
```
```bash
import * as Obj from "./sample";

use: const data = Obj.func1
```

## Q2. What is the importance of `config.js file``?
`config file` or `constants file` is mainly used for storing hard-coded data which will be used during development.

## Q3. What are React Hooks?
Hooks are normal javaScript function which is wrote by facebook developers.

## Q4. Why do we need a useState Hook?
useState Hook return an array to us which contain a state variable and function which is used for manipulating the value of state variable.
```bash
const [text, setText] = useState("");
```



































 







