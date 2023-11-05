// for Each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// Higher Order function
// Inside of higher order functions we need to use callback functions
// callback functions are the spl kind of functions which donot have any name

// use of callback function in forEach
coding.forEach( function (val){
    // console.log(val);
} )
// js
// ruby
// java
// python
// cpp

// use of arrow function in forEach
coding.forEach( (item) => {
    // console.log(item);
} )
// js
// ruby
// java
// python
// cpp

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)
// js
// ruby
// java
// python
// cpp

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )
// javascript
// java
// python