
# _chapter 02 - Igniting our App_ 

## Q1. what is 'NPM'?
- npm is the world's largest Software Library(Registry).

- npm is also a software Package Manager and Installer.

- The registry contains over 800,000 code packages.

- Open-source developers use npm to share software.

- Many organization also use npm to manage private developement.

- npm is free to use.you can download all npm public software packages without and registration or login.

- you have to install `Node.js` to get npm installed on your computer from the official site of `Node.js`.

- Syntax to install any package from npm -
  ```bash
   c:\>npm install <package name>
  ```
- The name npm (Node Package Manager) stems from when npm first was created as a package manager for Node.js.

- All npm packages are defined in files called package.json.

- The content of package.json must be written in JSON.

- At least two fields must be present in the definition file: name and version.


## Q2. What is `Parcel/Webpack`? Why do we need it?
`Parcel and webpack` are the bundlers used mostly for JavaScript or Typescript code that helps you to minify, clean, and make your code compact so that 	 it becomes easier to send a request or receive the response from the server.

## Q3. what is `.parcel-cache`?
parcel create `.parcel-cache` for storing the information about the project to reducing the time when we rebuild our project.

## Q4. what is `npx`?

`npx` is command its means we using npm and using any package of its. (ex- npx parcel index.html) its mean we using npm parcel package with index.html as entry point.

## Q5. What is difference between `dependencies` vs `devDependencies`?
- `dependencies`: Packages required by your application in production.
- `devDependencies`: Packages that are only needed for local development and testing.

## Q6. What is `Tree Shaking`?
In `Tree Shaking`, It removes unwanted code suppose you have library it has 10 function we just want to use 2 so, we use 2 and then all the 8 are ignored by parcel( it is knowns are `tree shaking`).

## Q7. what is `Hot Module Replacement`?
`HMR`is feature which is enabled by parcel when we use parcel bundler. Its automatically update the code without fully refreshing the page in your browser when we do some changes in our code. because it uses `file watcher algorithm` to keep track of file changes while development and render those changes on the web page.

## Q8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words?
- HMR(Hot Module Replacement)
- File Watcher Algorithm using c++
- Bundling
- Minify
- Cleaning our code
- Image optimization
- caching while development 
- Https on dev
- port Number
- consistent Hashing Algorithm
- compression
- Zero Config

	 - `HMR(Hot Module Replacement)` = It gives to us automatic refreshing feature when we update something in our code.
	 - `Zero Config` = It also gives to us zero requirement while we using it first time.
	 - `Image optimization` = It gives to us very useful feature is Image Optimization using this feature we can optimize our image so, it can huge impact on web page reloading.

## Q9. What is `.gitignore`? What should we add and not add into it?
`.gitignore`file is used for ignoring something like If we put any file inside this its mean that file is ignored in repository.ex- any file or folder etc.
- we should add that file inside that we can regenerate through the server like node_modules, .parcel-cache, dist etc.
- we should never add that file inside that we can't  exact regenerate through the server like package.json., package-lock.json  inside that file stored some data about that app development like version, name etc.

## Q10. What is the difference between `package.json` and `package-lock.json`?
- The `package.json` file we defines the rules required to run your application and install dependencies. we define the bundler version (~ and ^ ) and browserList etc.
- The `package-lock.json` file holds detailed information on all the dependencies installed based on the package.json rules.like It hold actual version of bundler we use inside while the development.

## Q11. Why should I not modify `package-lock.json`?
- we should never modify the `package-lock.json` because its holds the actual detailed information about while development.
- we should never add to that file inside .gitignore because that information required when we recreate that app.

## Q12. What is `node_modules` ? Is it a good idea to push that on git?
- The `node_modules` is folder which handles all the dependencies like dependencies, devDependencies and transitive dependencies of packages.
- It is a not good idea to push that on git because node_modules folder size is very large and heavy. Its can affect on our repository. also it can regenerate from the server.

## Q13. What is the `dist` folder?
After run the `build` command (npx parcel `build` index.html) in an application the `dist` folder is automatically generated. The folder contains the build scripts of the application compressed and minified code. This folder actually gets deployed in the real application.

## Q14. What is `browserlists`?
`BrowserLists` is a tool or package which can specify the compatibilty of the application with the browser. we can also modify that browserlist by itself. ex- `"last 2 versions"` and `"last 2 chrome versions"` etc. Its means that it definetly works on `last 2 versions` properly but it also work on other version but not that much guarantee for other version working properly.

## Note: Diff b/w `~` and `^` ?
- `~`version = 	Approximately equivalent to version, i.e., only accept new patch versions(`~`1.1.2)
- `^`version =	Compatible with version, i.e., accept new minor and patch versions(`^`1.1.3)
- version  =   Must match version exactly(1.1.3)




















 







