
/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n){
    a=0;
    b=1;   
    c=0;

    if(n<1){
        console.log(n + " is 0 or negative");
    }else if(n==1 || n==2){
        c=1;
        }else{
            for(i=2;i<n;i++){
            c=a+b;
            a=b;
            b=c;  
        }
    }
     return c;
   }
/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray){

    for(i=0;i<numArray.length;i++){
        for(j=0;j<numArray.length;j++){
            if(numArray[j+1]<numArray[j]){
                let placeholder = numArray[j];
                numArray[j] = numArray[j+1];
                numArray[j+1]=placeholder;
            }
        }
    }return numArray;
  }
/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
j="";
function reverseStr(someStr){
  for(i=someStr.length-1;i>=0;i--){
      j=j+someStr[i];
  }return j;
}
/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum. */
          function  factorial(someNum){
               let a=someNum;
               if(a>1){
                  return  a*factorial(someNum-1);
                }else if(a==1||a==0){
                    return a=1;
                }else{
                    return "you have entered a number below 0"
                }
            }

/* 5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect. */
function substring(someStr, length, offset){
    let j='';
    let k = someStr;
    if(length+offset > someStr.length){
        alert('the supplied length and offset is too long');
    }else if( offset>someStr.length){
        alert('the supplied offset is too long');
    }else if(length>someStr.length){
        alert('the supplied length is too long');
    }else{
        b= offset+length;
        j=someStr.slice(offset, b);
    }return(j);
}




/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum){
    let dividenum = someNum/2;
    let roundedNum = Math.round(dividenum);
    if(Math.abs(roundedNum-dividenum)>0){
        return false;
    }else{
        return true;
    }
}
/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr){
    j="";
    for(i=someStr.length-1;i>=0;i--){
     j=j+someStr[i];
      }
      if(someStr.localeCompare(j)==0){
          return true;
      }else{
          return false;
      }
 }
/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * */
 function  printShape(shape, height, character){
 switch(shape){
    case "Square":
        j="";
        k="";
        for(i=0;i<height;i++){
            j=j+character;
        }
        for(i=0;i<height;i++){
          k= k+j + "\n";
        }
        console.log(k);
        break;
    case "square":
    j="";
        k="";
        for(i=0;i<height;i++){
            j=j+character;
        }
        for(i=0;i<height;i++){
          k= k+j + "\n";
        }
        console.log(k);
        break;  
    case "Triangle":
        j=character;
        for(i=0;i<height;i++){
            console.log(j);
            j=j+character;
        }
        break;
    case "triangle":
        j=character;
        for(i=0;i<height;i++){
            console.log(j);
            j=j+character;
        }
        break; 
    case "Diamond":
        k=0;
        space= "";
        l="";
        m="";
        for(i=1;i<=height+height;i=i+2){
            k=Math.abs((height-i)/2);
            if(i<=height){
              l=l+character;  
            }else{
                l=l.slice(0,(height*2)-i);
            }
            for(j=0;j<k;j++){
                space= space+ " ";
            }
            console.log(space + l+m);
            space = "";
            if(i<height){
               m=l;
            }else{
                m="";
            }
            // m.slice(1,Math.abs(i-l.length-height));
        }
        break; 
    case "diamond":
    k=0;
        space= "";
        l="";
        m="";
        for(i=1;i<=height+height;i=i+2){
            k=Math.abs((height-i)/2);
            if(i<=height){
              l=l+character;  
            }else{
                l=l.slice(0,(height*2)-i);
            }
            for(j=0;j<k;j++){
                space= space+ " ";
            }
            console.log(space + l+m);
            space = "";
            if(i<height){
               m=l;
            }else{
                m="";
            }
            // m.slice(1,Math.abs(i-l.length-height));
        }
        break;   


}
}


/* 9. Object literal
Define function traverseObject(someObj)
Print every property and it's value. */
function traverseObject(someObj){
    for(var prop in someObj){
       console.log(prop + " : " + someObj[prop]);
    }
}
/* 10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same. */
function deleteElement(someArr){
    console.log(someArr.length);
    delete someArr[2];
    console.log(someArr.length);
}
/* 11. Splice Element
Define function spliceElement(someArr)
Print length
Splice the third element in the array.
Print length
The lengths should be one less than the original length. */
function spliceElement(someArr){
    console.log(someArr.length);
    someArr.splice(2,1);
     console.log(someArr.length);
}
/* 12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:
	var john = new Person("John", 30); */
    function Person(name, age){
        this.name = name;
        this.age =age;
    }

/* 13. Defining an object using an object literal
Define function getPerson(name, age)
The following line should set a Person object to the variable john:
    var john = getPerson("John", 30); */
    function getPerson(name,age){
        return{
            "name":name,
            "age":age
        };
        }
        
            
        
    }