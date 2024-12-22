
# _Chapter 11 - Data is the new Oil_

## Q1. What is `prop drilling`?
If we have three component parent, child and sub-child and we want to pass some data from parent to sub-child then, firstly we will pass data from parent to child as a prop and then we will pass data from child to sub-child as a prop means that data will pass through the hierarchy level this process known as `prop drilling`.

## Q2. What is `lifting the state up`?
sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called `lifting state up`. 

`Example`: If we have two component parent and child. when the child component is indirectly using state variable of parent component.

## Q3. What is Context Provider and Context Consumer?
- `Context.Provider` is a component which is used to change or manipulate default values of Global Context.
- `Context.Consumer` is also a component which is used to get all values which are passed to Context Provider.
`Example` : we uses `context.Consume in  class based component.

## Q4 If you don’t pass a value to the provider does it take the default value?
 Yes , It will take default value of Context from the Global Context.

 

