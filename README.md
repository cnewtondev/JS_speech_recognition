# NODE_SpeechRecognition

First steps of michael...

**Get speech to text running with light functions working.**
To do this, I plan on using simple js methods to build the functionality of this
program. Since these methods will run continually, which could overload my program 
or bog it down, I plan on using two arrays. One will be 'openEarsArr' which will 
have two functions. The first function 'forgetAboutIt' will clear the openEarsArr
every 5 words spoken so that way it never overloads with data. The second function 
'heardMyName' will listen for the activation phrase "Michael" and fire the next set
of words into the second array. This second array will be called promptArr. This 
promptArr will have a needle in the haystack function to where it will search for key
words in the array. If it detects certain words, it will then fire the corresponding 
function. (ex: "michael" ---> "log"... By saying this, It will then console.log 
'I'm Alive')


**First Michael Function**
