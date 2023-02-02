
# _chapter 03 - Laying the Foundation_

## Q1. what is `JSX`?
`JSX` allow us to write html like code along with javascript.

## Q2. what is a SuperPowers of JSX?
- write javascript along with html like code. 
- We can define react element easily without using createElement API ( But JSX also use createElement behind the scenes ). 
- We can define styles as an object and can pass it as props.

## Q3. Role of `type` attribute in script tag? What options can I use there?
It is a useful attribute when we want to import or export something from the js file and also, we have to define the value of `type` attribute like `module`, `importmap` because normal js file won't allow to use keywords like `module`, `importmap`.

## Q4. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX ?
- `{TitleComponent}` = Its mean that it is normal javascript expression or value.
- `{<TitleComponent />}` = It is the way to call any Component. It is function component which will return some JSX code.
- `{<Titlecomponent><TitleComponent/>}` = It is also a different way to call any component,but we use this syntax when we have to pass some child element of that component.

## NOTE: what is `component composition`? 
`Component composition` is the name for passing components as props to other component is known as `component composition`.

























 







