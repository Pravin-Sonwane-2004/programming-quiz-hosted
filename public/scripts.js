// Hide the performance button initially
document.getElementById('performanceSection').style.display = 'none';

// Quiz Questions Object
const questions = {
  
};// Global variables for quiz control
// Sample questions for each category
const quizData = {
    // Example structure; replace with actual questions
    Java: [
        { question: "What is the output of: System.out.println(2 + 3);", options: ["2", "5", "23", "Error"], answer: "5" },
        { question: "Which of the following is not a Java feature?", options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic"], answer: "Use of pointers" },
        { question: "Which of the following is a valid keyword in Java?", options: ["include", "import", "using", "define"], answer: "import" },
        { question: "Which keyword is used to define a constant in Java?", options: ["constant", "final", "const", "static"], answer: "final" },
        { question: "What is the output of: System.out.println('A' + 'B');", options: ["65", "66", "131", "AB"], answer: "131" },
        { question: "Which exception is thrown when dividing by zero in Java?", options: ["NullPointerException", "ArithmeticException", "NumberFormatException", "IOException"], answer: "ArithmeticException" },
        { question: "What is the size of an int data type in Java?", options: ["8 bits", "16 bits", "32 bits", "64 bits"], answer: "32 bits" },
        { question: "Which of the following is a valid constructor for the class 'Person'?", options: ["void Person() {}", "int Person() {}", "Person() {}", "Person(void) {}"], answer: "Person() {}" },
        { question: "Which of the following is the default value of a boolean variable?", options: ["null", "true", "false", "0"], answer: "false" },
        { question: "Which method is used to start a thread in Java?", options: ["run()", "execute()", "start()", "init()"], answer: "start()" },
        { question: "Which of the following is used for inheritance in Java?", options: ["extends", "implements", "inherits", "derives"], answer: "extends" },
        { question: "Which keyword is used to prevent a class from being subclassed?", options: ["static", "final", "private", "abstract"], answer: "final" },
        { question: "Which of the following is not a primitive data type in Java?", options: ["int", "float", "boolean", "String"], answer: "String" },
        { question: "Which of the following is a correct syntax to declare a variable in Java?", options: ["int x = 10;", "x = int 10;", "int x;", "10 int x;"], answer: "int x = 10;" },
        { question: "Which loop is guaranteed to execute at least once?", options: ["for loop", "while loop", "do-while loop", "nested loop"], answer: "do-while loop" },
        { question: "Which of the following is not a valid access modifier in Java?", options: ["private", "protected", "public", "void"], answer: "void" },
        { question: "What is the default value of a local variable in Java?", options: ["null", "0", "false", "No default value"], answer: "No default value" },
        { question: "Which method is used to terminate a thread in Java?", options: ["terminate()", "stop()", "destroy()", "kill()"], answer: "stop()" },
        { question: "Which keyword is used to invoke the parent class constructor?", options: ["this", "parent", "super", "base"], answer: "super" },
        { question: "What is the size of a char data type in Java?", options: ["8 bits", "16 bits", "32 bits", "64 bits"], answer: "16 bits" },
        { question: "Which of the following is not an OOP concept?", options: ["Encapsulation", "Polymorphism", "Abstraction", "Compilation"], answer: "Compilation" },
        { question: "Which of the following is used to handle exceptions in Java?", options: ["try-catch", "if-else", "switch-case", "goto"], answer: "try-catch" },
        { question: "Which of the following is not a reserved keyword in Java?", options: ["goto", "break", "static", "switch"], answer: "goto" },
        { question: "What is the return type of the method compareTo() in Java?", options: ["int", "boolean", "char", "void"], answer: "int" },
        { question: "Which class is the superclass of every class in Java?", options: ["Object", "Class", "Main", "System"], answer: "Object" },
        { question: "What is the value of the expression: 5 + 2 * 3?", options: ["21", "11", "16", "13"], answer: "11" },
        { question: "Which method is used to convert a string to uppercase in Java?", options: ["toUppercase()", "upper()", "toUpperCase()", "stringUpper()"], answer: "toUpperCase()" },
        { question: "Which of the following is not a Java reserved keyword?", options: ["native", "public", "this", "friend"], answer: "friend" },
        { question: "What is the output of: System.out.println(Math.max(10, 20));", options: ["10", "20", "30", "Error"], answer: "20" },
        { question: "Which method can be used to find the highest value of x and y?", options: ["Math.ceil(x, y)", "Math.max(x, y)", "Math.floor(x, y)", "Math.round(x, y)"], answer: "Math.max(x, y)" },
        { question: "What is the correct syntax to output 'Hello World' in Java?", options: ["print('Hello World')", "echo('Hello World')", "System.out.println('Hello World')", "System.print('Hello World')"], answer: "System.out.println('Hello World')" },
        { question: "Which of the following is not a valid method signature in Java?", options: ["public void main()", "public int main(int[] args)", "public static void main(String[] args)", "private void main(int[] args)"], answer: "public void main()" },
        { question: "Which exception is thrown when an array is accessed with an illegal index?", options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "ClassCastException", "IOException"], answer: "ArrayIndexOutOfBoundsException" },
        { question: "Which of the following is not a type of constructor in Java?", options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Static constructor"], answer: "Static constructor" },
        { question: "What is the output of: System.out.println(10 % 3);", options: ["0", "1", "2", "3"], answer: "1" },
        { question: "Which of the following is true about Java?", options: ["Java is platform-dependent", "Java supports multiple inheritance", "Java supports operator overloading", "Java is platform-independent"], answer: "Java is platform-independent" },
        { question: "Which function is used to convert a string into an integer in Java?", options: ["Integer.parseInt()", "Integer.valueOf()", "String.toInt()", "parseInt()"], answer: "Integer.parseInt()" },
        { question: "What is the default value of a static variable in Java?", options: ["0", "null", "false", "Depends on the variable type"], answer: "Depends on the variable type" },
        { question: "Which of the following loops in Java runs indefinitely?", options: ["for", "while", "do-while", "Infinite loop"], answer: "Infinite loop" },
        // Add more questions here to reach 100
        { question: "What is the output of: System.out.println(2 + 3);", options: ["2", "5", "23", "Error"], answer: "5" },
        { question: "Which of the following is not a Java feature?", options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic"], answer: "Use of pointers" },
        { question: "Which data type is used to create a variable that should store text?", options: ["String", "int", "char", "boolean"], answer: "String" },
        { question: "Which method is used to find the length of a string in Java?", options: ["length()", "getSize()", "getLength()", "size()"], answer: "length()" },
        { question: "Which of the following is a valid keyword in Java?", options: ["include", "import", "using", "define"], answer: "import" },
        { question: "Which keyword is used to define a constant in Java?", options: ["constant", "final", "const", "static"], answer: "final" },
        { question: "What is the output of: System.out.println('A' + 'B');", options: ["65", "66", "131", "AB"], answer: "131" },
        { question: "Which exception is thrown when dividing by zero in Java?", options: ["NullPointerException", "ArithmeticException", "NumberFormatException", "IOException"], answer: "ArithmeticException" },
        { question: "What is the size of an int data type in Java?", options: ["8 bits", "16 bits", "32 bits", "64 bits"], answer: "32 bits" },
        { question: "Which of the following is a valid constructor for the class 'Person'?", options: ["void Person() {}", "int Person() {}", "Person() {}", "Person(void) {}"], answer: "Person() {}" },
        { question: "Which of the following is the default value of a boolean variable?", options: ["null", "true", "false", "0"], answer: "false" },
        { question: "Which method is used to start a thread in Java?", options: ["run()", "execute()", "start()", "init()"], answer: "start()" },
        { question: "Which of the following is used for inheritance in Java?", options: ["extends", "implements", "inherits", "derives"], answer: "extends" },
        { question: "Which keyword is used to prevent a class from being subclassed?", options: ["static", "final", "private", "abstract"], answer: "final" },
        { question: "Which of the following is not a primitive data type in Java?", options: ["int", "float", "boolean", "String"], answer: "String" },
        { question: "Which of the following is a correct syntax to declare a variable in Java?", options: ["int x = 10;", "x = int 10;", "int x;", "10 int x;"], answer: "int x = 10;" },
        { question: "Which operator is used to compare two values in Java?", options: ["==", "=", "!=", "==="], answer: "==" },
        { question: "Which loop is guaranteed to execute at least once?", options: ["for loop", "while loop", "do-while loop", "nested loop"], answer: "do-while loop" },
        { question: "Which of the following is not a valid access modifier in Java?", options: ["private", "protected", "public", "void"], answer: "void" },
        { question: "What is the default value of a local variable in Java?", options: ["null", "0", "false", "No default value"], answer: "No default value" },
        { question: "Which method is used to terminate a thread in Java?", options: ["terminate()", "stop()", "destroy()", "kill()"], answer: "stop()" },
        { question: "Which keyword is used to invoke the parent class constructor?", options: ["this", "parent", "super", "base"], answer: "super" },
        { question: "What is the size of a char data type in Java?", options: ["8 bits", "16 bits", "32 bits", "64 bits"], answer: "16 bits" },
        { question: "Which of the following is not an OOP concept?", options: ["Encapsulation", "Polymorphism", "Abstraction", "Compilation"], answer: "Compilation" },
        { question: "Which of the following is used to handle exceptions in Java?", options: ["try-catch", "if-else", "switch-case", "goto"], answer: "try-catch" },
        { question: "Which of the following is not a reserved keyword in Java?", options: ["goto", "break", "static", "switch"], answer: "goto" },
        { question: "What is the return type of the method compareTo() in Java?", options: ["int", "boolean", "char", "void"], answer: "int" },
        { question: "Which class is the superclass of every class in Java?", options: ["Object", "Class", "Main", "System"], answer: "Object" },
        { question: "What is the value of the expression: 5 + 2 * 3?", options: ["21", "11", "16", "13"], answer: "11" },
        { question: "Which method is used to convert a string to uppercase in Java?", options: ["toUppercase()", "upper()", "toUpperCase()", "stringUpper()"], answer: "toUpperCase()" },
        { question: "Which of the following is not a Java reserved keyword?", options: ["native", "public", "this", "friend"], answer: "friend" },
        { question: "What is the output of: System.out.println(Math.max(10, 20));", options: ["10", "20", "30", "Error"], answer: "20" },
        { question: "Which method can be used to find the highest value of x and y?", options: ["Math.ceil(x, y)", "Math.max(x, y)", "Math.floor(x, y)", "Math.round(x, y)"], answer: "Math.max(x, y)" },
        { question: "What is the correct syntax to output 'Hello World' in Java?", options: ["print('Hello World')", "echo('Hello World')", "System.out.println('Hello World')", "System.print('Hello World')"], answer: "System.out.println('Hello World')" },
        { question: "Which of the following is not a valid method signature in Java?", options: ["public void main()", "public int main(int[] args)", "public static void main(String[] args)", "private void main(int[] args)"], answer: "public void main()" },
        { question: "Which exception is thrown when an array is accessed with an illegal index?", options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "ClassCastException", "IOException"], answer: "ArrayIndexOutOfBoundsException" },
        { question: "Which of the following is not a type of constructor in Java?", options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Static constructor"], answer: "Static constructor" },
        { question: "What is the output of: System.out.println(10 % 3);", options: ["0", "1", "2", "3"], answer: "1" },
        { question: "Which of the following is true about Java?", options: ["Java is platform-dependent", "Java supports multiple inheritance", "Java supports operator overloading", "Java is platform-independent"], answer: "Java is platform-independent" },
        { question: "Which function is used to convert a string into an integer in Java?", options: ["Integer.parseInt()", "Integer.valueOf()", "String.toInt()", "parseInt()"], answer: "Integer.parseInt()" },
        { question: "What is the default value of a static variable in Java?", options: ["0", "null", "false", "Depends on the variable type"], answer: "Depends on the variable type" },
        { question: "Which of the following loops in Java runs indefinitely?", options: ["for", "while", "do-while", "Infinite loop"], answer: "Infinite loop" },
        { question: "Which of the following can be used to create a thread in Java?", options: ["Runnable interface", "Thread class", "Both A and B", "None of the above"], answer: "Both A and B" },
        { question: "What is the output of: System.out.println(5 == 5);", options: ["true", "false", "Error", "5"], answer: "true" },
        { question: "Which operator is used to concatenate strings in Java?", options: ["+", "&", "concat()", "||"], answer: "+" },
        { question: "What is the default size of a char data type in Java?", options: ["8 bits", "16 bits", "32 bits", "64 bits"], answer: "16 bits" },
        { question: "Which of the following keywords is used to define an interface in Java?", options: ["class", "interface", "define", "abstract"], answer: "interface" },
        { question: "Which statement is used to exit from a loop in Java?", options: ["exit", "stop", "break", "continue"], answer: "break" },
        { question: "What will be the output of the following code? System.out.println(3 * 2 + 1);", options: ["7", "6", "9", "Error"], answer: "7" },
        { question: "What is the method signature for the main method in Java?", options: ["public static void main(String args[])", "public void main(String[] args)", "static public void main(String args)", "public static void main(String... args)"], answer: "public static void main(String args[])" },
        { question: "Which of the following is used for type casting in Java?", options: ["(type)", "cast(type)", "convert(type)", "typecast(type)"], answer: "(type)" },
        { question: "What is the output of: System.out.println(10 > 5 ? 'A' : 'B');", options: ["A", "B", "Error", "10"], answer: "A" },
        { question: "Which of the following is used to create an array in Java?", options: ["array[]", "new array()", "array.new()", "new type[]"], answer: "new type[]" },
        { question: "What is the result of 1 + 2 + '3' in Java?", options: ["33", "6", "Error", "123"], answer: "123" },
        { question: "What is the use of the final keyword in Java?", options: ["To prevent method overriding", "To prevent variable modification", "Both A and B", "None of the above"], answer: "Both A and B" },
        { question: "Which of the following is used to declare a method in Java?", options: ["void methodName()", "methodName void()", "public methodName()", "methodName() void"], answer: "void methodName()" },
        { question: "Which of the following statements is true about the 'static' keyword?", options: ["Static methods can access instance variables", "Static methods can be called without creating an object", "Static methods cannot be overridden", "All of the above"], answer: "All of the above" },
        { question: "What is the output of: System.out.println(1 + 2 + '3' + 4);", options: ["1234", "34", "Error", "124"], answer: "1234" },
        { question: "What does the 'this' keyword refer to in Java?", options: ["The current object", "The previous object", "The parent class", "None of the above"], answer: "The current object" },
        { question: "Which of the following can be used to handle multiple exceptions in Java?", options: ["try-catch-finally", "catch-all", "multiple catch", "throw"], answer: "multiple catch" },
        { question: "What is the default value of an integer variable in Java?", options: ["0", "null", "undefined", "No default value"], answer: "0" },
        { question: "Which of the following is not a valid data type in Java?", options: ["int", "byte", "float", "decimal"], answer: "decimal" },
        { question: "Which operator is used for logical AND in Java?", options: ["&&", "&", "||", "AND"], answer: "&&" },
        { question: "What is the output of: System.out.println(Math.abs(-5));", options: ["-5", "5", "0", "Error"], answer: "5" },
        { question: "Which class is used to create a window in Java?", options: ["Frame", "Window", "JFrame", "Dialog"], answer: "JFrame" },
        { question: "What will be the output of: System.out.println(0.1 + 0.2);", options: ["0.3", "0.30000000000000004", "Error", "0.2"], answer: "0.30000000000000004" },
        { question: "Which method is called when an object is created?", options: ["initialize()", "constructor()", "new()", "finalize()"], answer: "constructor()" },
        { question: "What is the purpose of the 'synchronized' keyword in Java?", options: ["To create threads", "To prevent thread interference", "To declare constants", "To manage memory"], answer: "To prevent thread interference" },
        { question: "Which of the following statements about Java Collections is true?", options: ["Collections can store primitive types", "Collections cannot store duplicates", "Collections are part of the java.util package", "All of the above"], answer: "Collections are part of the java.util package" },
        { question: "What is the output of: System.out.println((char)(65));", options: ["A", "B", "Error", "65"], answer: "A" },
        { question: "Which keyword is used to create a subclass in Java?", options: ["extends", "inherits", "implements", "new"], answer: "extends" },
        { question: "What is the purpose of the 'volatile' keyword in Java?", options: ["To prevent method overriding", "To ensure visibility of changes to variables", "To create a variable", "To mark a constant"], answer: "To ensure visibility of changes to variables" },
        { question: "Which of the following can be a reason for a 'StackOverflowError' in Java?", options: ["Infinite recursion", "Memory leak", "Out of memory", "Null reference"], answer: "Infinite recursion" },
        { question: "Which of the following is not a collection type in Java?", options: ["List", "Set", "Map", "Array"], answer: "Array" },
        { question: "What is the output of: System.out.println(true && false);", options: ["true", "false", "1", "0"], answer: "false" },
        { question: "Which exception is thrown when trying to access a null object reference?", options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "ClassCastException", "IOException"], answer: "NullPointerException" },
        { question: "What does the 'instanceof' operator do in Java?", options: ["Checks if an object is of a specific type", "Checks if a variable is null", "Checks if two objects are equal", "Checks if a class is abstract"], answer: "Checks if an object is of a specific type" },
        { question: "What will be the output of: System.out.println(5 / 2);", options: ["2", "2.5", "3", "Error"], answer: "2" },
        { question: "What is the default size of an ArrayList in Java?", options: ["10", "15", "5", "No default size"], answer: "10" },
        { question: "Which of the following is a mutable class in Java?", options: ["String", "Integer", "StringBuilder", "LocalDate"], answer: "StringBuilder" },
        { question: "What is the output of: System.out.println(3 + 4 + '5');", options: ["35", "45", "Error", "8"], answer: "45" },
        { question: "Which keyword is used to implement an interface in Java?", options: ["implements", "extends", "interface", "abstract"], answer: "implements" },
        { question: "What is the output of: System.out.println(3 * (2 + 1));", options: ["9", "6", "3", "12"], answer: "9" },
        { question: "What is the correct way to declare an array in Java?", options: ["int[] arr;", "int arr[];", "Both A and B", "arr int[];"], answer: "Both A and B" },
        { question: "What will be the output of: System.out.println(10 == 10.0);", options: ["true", "false", "Error", "0"], answer: "true" },
        { question: "Which of the following is an example of a functional interface in Java?", options: ["Runnable", "Thread", "Object", "String"], answer: "Runnable" },
        { question: "What is the output of: System.out.println(5 + 10 + 15);", options: ["30", "25", "20", "Error"], answer: "30" },
        { question: "Which of the following methods is used to get the length of an array in Java?", options: ["length()", "getLength()", "size()", "length"], answer: "length" },
        { question: "What does the 'super' keyword refer to in Java?", options: ["The parent class", "The current object", "The child class", "None of the above"], answer: "The parent class" },
        { question: "What is the output of: System.out.println(1 + 2 + 3 + '4');", options: ["1234", "6", "Error", "7"], answer: "1234" },
        { question: "Which of the following is an access modifier in Java?", options: ["private", "public", "protected", "All of the above"], answer: "All of the above" },
        { question: "What is the output of: System.out.println(4 + 2 + '8');", options: ["68", "6", "Error", "48"], answer: "68" },
        { question: "Which of the following is not a looping construct in Java?", options: ["for", "while", "do-while", "foreach"], answer: "foreach" },
        { question: "Which of the following is used to create a package in Java?", options: ["package myPackage;", "import myPackage;", "create package myPackage;", "define myPackage;"], answer: "package myPackage;" },
        { question: "What is the output of: System.out.println(10 / 3);", options: ["3", "3.333", "Error", "2"], answer: "3" },
        { question: "Which of the following is true about the 'break' statement?", options: ["It exits the current loop", "It skips the current iteration", "It terminates the program", "It does nothing"], answer: "It exits the current loop" },
        { question: "What is the output of: System.out.println('J' + 'A');", options: ["65", "66", "75", "JA"], answer: "75" },
        { question: "Which of the following statements is true about Java?", options: ["Java is a compiled language", "Java is an interpreted language", "Java is both compiled and interpreted", "None of the above"], answer: "Java is both compiled and interpreted" },
        { question: "What will be the output of: System.out.println(10 - 5 + 2);", options: ["7", "8", "5", "Error"], answer: "7" },
        { question: "Which keyword is used to terminate a loop in Java?", options: ["break", "exit", "stop", "continue"], answer: "break" },
        { question: "What is the output of: System.out.println('5' + 5);", options: ["10", "55", "Error", "5"], answer: "55" },
        { question: "Which of the following is not a type of loop in Java?", options: ["for", "while", "do-while", "loop"], answer: "loop" },
        { question: "Which method is used to read input from the console in Java?", options: ["Scanner.next()", "Scanner.read()", "Scanner.input()", "Scanner.get()"], answer: "Scanner.next()" },
        { question: "What is the output of: System.out.println('A' + 1);", options: ["65", "66", "A1", "Error"], answer: "66" },
        { question: "Which operator is used to increment a variable in Java?", options: ["++", "--", "==", "+="], answer: "++" },
        { question: "What is the default value of a long variable in Java?", options: ["0", "null", "undefined", "No default value"], answer: "0" },
        { question: "What is the output of: System.out.println(5 * 2);", options: ["10", "52", "Error", "7"], answer: "10" },
        { question: "Which of the following is used to create an interface in Java?", options: ["interface MyInterface {}", "MyInterface interface {}", "create interface MyInterface {}", "define MyInterface {};"], answer: "interface MyInterface {}" },
        { question: "What is the output of: System.out.println(1 + 2 + 3);", options: ["6", "5", "Error", "7"], answer: "6" },
        { question: "Which of the following is a valid way to create a new instance of a class in Java?", options: ["new ClassName();", "ClassName newInstance = new ClassName();", "create ClassName();", "ClassName = new ClassName;"], answer: "ClassName newInstance = new ClassName();" },
        { question: "What will be the output of: System.out.println(5 - 2 * 3);", options: ["1", "9", "0", "-1"], answer: "1" },
        { question: "Which of the following is a Java package?", options: ["java.lang", "java.util", "java.io", "All of the above"], answer: "All of the above" },
        { question: "What is the output of: System.out.println(10 % 4);", options: ["0", "1", "2", "3"], answer: "2" },
        { question: "What is the purpose of the 'static' keyword in Java?", options: ["To create class-level variables", "To create instance variables", "To create methods that can be accessed without an instance", "All of the above"], answer: "All of the above" },
        { question: "Which of the following is a valid syntax to declare a method in Java?", options: ["public void methodName()", "void methodName public()", "methodName void public()", "public methodName void()"], answer: "public void methodName()" },
        { question: "What is the output of: System.out.println('A' + 5);", options: ["65", "66", "70", "Error"], answer: "70" },
        { question: "What is the default value of a float variable in Java?", options: ["0", "null", "undefined", "No default value"], answer: "0" },
        { question: "What will be the output of: System.out.println(2 + 3 + '4');", options: ["54", "Error", "5", "6"], answer: "54" },
        { question: "Which of the following is an example of polymorphism in Java?", options: ["Method overloading", "Method overriding", "Interface implementation", "All of the above"], answer: "All of the above" },
        { question: "What is the output of: System.out.println(10 == 10.0);", options: ["true", "false", "Error", "0"], answer: "true" },
        { question: "Which of the following is not a keyword in Java?", options: ["new", "static", "define", "void"], answer: "define" },
        { question: "What will be the output of: System.out.println(7 - 3 + 5);", options: ["9", "5", "3", "10"], answer: "9" },
        { question: "What is the output of: System.out.println(3 * 3);", options: ["6", "9", "Error", "8"], answer: "9" },
        { question: "Which of the following is not a valid variable name in Java?", options: ["myVariable", "2ndVariable", "_myVariable", "$myVariable"], answer: "2ndVariable" },
        { question: "What is the output of: System.out.println(3 + 3 + 3);", options: ["6", "9", "3", "Error"], answer: "9" },
        { question: "What is the output of: System.out.println(10 / 0);", options: ["Infinity", "Error", "0", "10"], answer: "Error" },
        { question: "Which of the following is used to represent a character in Java?", options: ["char", "String", "Character", "byte"], answer: "char" },
        { question: "What is the output of: System.out.println('H' + 1);", options: ["H1", "72", "73", "Error"], answer: "73" },
        { question: "What is the purpose of the 'finalize()' method in Java?", options: ["To release system resources", "To create a thread", "To allocate memory", "To destroy an object"], answer: "To release system resources" },
        { question: "What is the output of: System.out.println(1.0 + 2);", options: ["3.0", "3", "Error", "1.0"], answer: "3.0" },
        { question: "Which of the following is a valid way to declare a string in Java?", options: ["String str;", "String str = '';", "String str = \"\";", "All of the above"], answer: "All of the above" },
        { question: "What is the output of: System.out.println(8 * 2);", options: ["16", "18", "Error", "8"], answer: "16" },
        { question: "Which of the following is true about constructors in Java?", options: ["A constructor must have the same name as the class", "Constructors can have return types", "A class can have multiple constructors", "Both A and C"], answer: "Both A and C" },
        { question: "What is the output of: System.out.println(10 - 3 + 2);", options: ["9", "5", "7", "Error"], answer: "9" },
        { question: "Which operator is used for logical OR in Java?", options: ["||", "OR", "&", "|"], answer: "||" },
        { question: "What is the output of: System.out.println(5 - 2);", options: ["3", "2", "5", "Error"], answer: "3" },
        { question: "Which keyword is used to create an abstract class in Java?", options: ["abstract", "interface", "class", "extends"], answer: "abstract" },
        { question: "What is the output of: System.out.println(10 + 5 * 2);", options: ["20", "30", "25", "Error"], answer: "20" },
        { question: "Which of the following is used to convert a string to lowercase in Java?", options: ["toLowerCase()", "lower()", "lowercase()", "stringLower()"], answer: "toLowerCase()" },
        { question: "What is the output of: System.out.println(10 - (2 * 2));", options: ["6", "4", "8", "Error"], answer: "6" },
        { question: "Which of the following is a wrapper class in Java?", options: ["int", "String", "Integer", "char"], answer: "Integer" },
        { question: "What is the output of: System.out.println('C' + 'D');", options: ["67", "68", "Error", "69"], answer: "131" },
        { question: "Which of the following is not a valid way to declare an integer variable in Java?", options: ["int x;", "int x = 10;", "int x := 10;", "int x = 0;"], answer: "int x := 10;" },
        { question: "What is the output of: System.out.println(4 * 3);", options: ["7", "12", "Error", "12"], answer: "12" },
        { question: "Which operator is used for equality in Java?", options: ["==", "=", "equals()", "==="], answer: "==" },
        { question: "What is the output of: System.out.println(1 + 1 + '1');", options: ["11", "2", "Error", "3"], answer: "11" },
        { question: "Which of the following is a valid way to create a string in Java?", options: ["String str = new String();", "String str = \"Hello\";", "String str = 'Hello';", "Both A and B"], answer: "Both A and B" },
        { question: "What is the output of: System.out.println(5 * 5);", options: ["25", "30", "Error", "10"], answer: "25" },
        { question: "Which of the following is a logical operator in Java?", options: ["&&", "||", "!", "All of the above"], answer: "All of the above" },
        { question: "What is the output of: System.out.println(1.5 + 2.5);", options: ["3.0", "4.0", "3.5", "Error"], answer: "4.0" },
        { question: "Which of the following is not a primitive data type in Java?", options: ["int", "char", "String", "float"], answer: "String" },
        { question: "What is the output of: System.out.println(10 + 2 * 3);", options: ["16", "18", "14", "Error"], answer: "16" },
        { question: "Which of the following is a control structure in Java?", options: ["if", "for", "while", "All of the above"], answer: "All of the above" },
        { question: "What is the output of: System.out.println(5 + 5);", options: ["10", "11", "Error", "12"], answer: "10" },
        { question: "Which keyword is used to inherit a class in Java?", options: ["extends", "implements", "inherits", "abstract"], answer: "extends" },
        { question: "What is the output of: System.out.println(0.5 + 0.5);", options: ["1.0", "1", "Error", "0"], answer: "1.0" },
        { question: "Which of the following is used to declare a constant in Java?", options: ["final", "constant", "static", "readonly"], answer: "final" },
        { question: "What is the output of: System.out.println(8 / 2);", options: ["4", "2", "Error", "8"], answer: "4" },
        { question: "Which of the following is a valid syntax for declaring a method with parameters in Java?", options: ["void methodName(int a)", "void methodName(int a, b)", "methodName void(int a)", "void methodName(a int)"], answer: "void methodName(int a)" },
        { question: "What is the output of: System.out.println(10 + 5 / 2);", options: ["12", "17", "15", "Error"], answer: "12" },
        { question: "What is the output of: System.out.println(7 - 2 + 3);", options: ["8", "12", "10", "Error"], answer: "8" },
        { question: "Which of the following is not a valid way to declare a character variable in Java?", options: ["char c;", "char c = 'a';", "char c = 'ab';", "char c = 97;"], answer: "char c = 'ab';" },
        { question: "What is the output of: System.out.println(5 + 2 * 3);", options: ["11", "10", "Error", "12"], answer: "11" },
        { question: "Which of the following is a built-in method for strings in Java?", options: ["length()", "size()", "getLength()", "All of the above"], answer: "length()" },
        { question: "What is the output of: System.out.println(10 - (3 - 2));", options: ["9", "10", "Error", "8"], answer: "9" },
        { question: "Which operator is used to divide in Java?", options: ["/", "//", "%", "div"], answer: "/" },
        { question: "What is the output of: System.out.println(3 + 4 + 5);", options: ["12", "11", "Error", "8"], answer: "12" },
        { question: "Which of the following is true about the Java Virtual Machine (JVM)?", options: ["It executes Java bytecode", "It is platform-independent", "It provides security", "All of the above"], answer: "All of the above" },
        { question: "What is the output of: System.out.println(5 > 3);", options: ["true", "false", "Error", "1"], answer: "true" },
        { question: "Which of the following is a valid way to create an array in Java?", options: ["int[] arr = new int[5];", "int arr = new int[5];", "int arr[];", "Both A and C"], answer: "Both A and C" },
        { question: "What is the output of: System.out.println(10 - 3 + 5);", options: ["12", "10", "Error", "11"], answer: "12" },
        { question: "What is the purpose of the 'try-catch' block in Java?", options: ["To handle exceptions", "To create threads", "To declare variables", "To manage memory"], answer: "To handle exceptions" },
        { question: "What is the output of: System.out.println(8 * 2);", options: ["16", "18", "Error", "14"], answer: "16" },
        { question: "Which of the following is not a valid constructor in Java?", options: ["MyClass()", "MyClass(int a)", "MyClass(int a, String b)", "MyClass(int a) {}"], answer: "MyClass(int a) {}" },
        { question: "What is the output of: System.out.println(3 - 2);", options: ["1", "2", "0", "Error"], answer: "1" },
        { question: "Which of the following is a valid way to declare a float variable in Java?", options: ["float f;", "float f = 0.0;", "Both A and B", "float f = '0.0';"], answer: "Both A and B" },
        { question: "What is the output of: System.out.println('H' + 5);", options: ["H5", "72", "77", "Error"], answer: "77" },
        { question: "Which operator is used for modulus in Java?", options: ["%", "/", "//", "mod"], answer: "%" },
        { question: "What is the output of: System.out.println(2 * 3);", options: ["5", "6", "Error", "4"], answer: "6" },
        { question: "What is the purpose of the 'finally' block in Java?", options: ["To execute code after try-catch", "To handle exceptions", "To create threads", "None of the above"], answer: "To execute code after try-catch" },
        { question: "What is the output of: System.out.println(9 / 3);", options: ["3", "2", "Error", "4"], answer: "3" },
        { question: "Which of the following is not a valid way to declare a double variable in Java?", options: ["double d;", "double d = 0.0;", "double d = '0.0';", "double d = 1.0;"], answer: "double d = '0.0';" },
        { question: "What is the output of: System.out.println(5 + 5 + 5);", options: ["15", "10", "5", "Error"], answer: "15" },
        { question: "Which keyword is used to create a new thread in Java?", options: ["new", "Thread", "Runnable", "create"], answer: "Thread" },
        { question: "What is the output of: System.out.println(4 * 2);", options: ["6", "8", "Error", "4"], answer: "8" },
        { question: "What is the default value of a short variable in Java?", options: ["0", "null", "undefined", "No default value"], answer: "0" },
        { question: "Which of the following is a valid way to declare a double variable in Java?", options: ["double d;", "double d = 0.0;", "Both A and B", "double d = '0.0';"], answer: "Both A and B" },
        { question: "What is the output of: System.out.println(1 + 2 + 3 + 4);", options: ["9", "10", "8", "Error"], answer: "10" },
        { question: "Which of the following is not a valid way to declare a byte variable in Java?", options: ["byte b;", "byte b = 0;", "byte b = '0';", "byte b = 1;"], answer: "byte b = '0';" },
        { question: "What is the output of: System.out.println(5 - 3 + 2);", options: ["4", "5", "3", "Error"], answer: "4" },
        { question: "Which of the following is true about the 'continue' statement?", options: ["It skips the current iteration of a loop", "It terminates the program", "It exits the current loop", "None of the above"], answer: "It skips the current iteration of a loop" },
        { question: "What is the output of: System.out.println(10 + 2 / 2);", options: ["11", "12", "10", "Error"], answer: "11" },
        { question: "Which of the following is not a valid way to declare an integer variable in Java?", options: ["int i;", "int i = 1;", "int i := 1;", "int i = 0;"], answer: "int i := 1;" },
        { question: "What is the output of: System.out.println(5 * 2 + 1);", options: ["10", "11", "Error", "12"], answer: "11" },
        { question: "What is the output of: System.out.println(10 - (5 - 2));", options: ["7", "8", "Error", "6"], answer: "7" },
        { question: "Which of the following is not a valid data type in Java?", options: ["int", "float", "character", "boolean"], answer: "character" },
        { question: "What is the output of: System.out.println(8 - 3);", options: ["5", "6", "Error", "4"], answer: "5" },
        { question: "Which of the following is true about Java?", options: ["Java is platform-independent", "Java is a compiled language", "Java is an interpreted language", "All of the above"], answer: "All of the above" },
        { question: "What is the output of: System.out.println(5 % 2);", options: ["1", "2", "0", "Error"], answer: "1" },
        { question: "What is the output of: System.out.println(4 + 4);", options: ["8", "7", "Error", "9"], answer: "8" },
        { question: "Which of the following is not a valid way to declare a boolean variable in Java?", options: ["boolean b;", "boolean b = true;", "boolean b = 1;", "boolean b = false;"], answer: "boolean b = 1;" },
        { question: "What is the output of: System.out.println(9 - 4);", options: ["5", "4", "Error", "3"], answer: "5" },
        { question: "Which of the following is not a valid operator in Java?", options: ["&&", "||", "!=", "@@"], answer: "@@" },
        { question: "What is the output of: System.out.println(2 + 3 * 4);", options: ["20", "14", "Error", "16"], answer: "14" },
        { question: "Which of the following is true about the 'return' statement in Java?", options: ["It terminates the current method", "It returns a value from a method", "It can be used in void methods", "Both A and B"], answer: "Both A and B" },
        { question: "What is the output of: System.out.println(1 * 2 + 3);", options: ["5", "6", "Error", "4"], answer: "5" },
        { question: "What is the output of: System.out.println(5 - 2);", options: ["3", "2", "Error", "1"], answer: "3" },
        { question: "Which of the following is a valid way to declare a char variable in Java?", options: ["char c = 'A';", "char c = \"A\";", "char c = A;", "char c = 'AB';"], answer: "char c = 'A';" },
        { question: "What is the output of: System.out.println(10 + (5 - 3));", options: ["12", "10", "Error", "11"], answer: "12" },
        { question: "Which of the following is not a valid variable name in Java?", options: ["myVar", "my_var", "my-var", "myVar1"], answer: "my-var" },
        { question: "What is the output of: System.out.println(5 + 5);", options: ["10", "11", "Error", "12"], answer: "10" },
        { question: "Which of the following is used to declare a method that does not return a value in Java?", options: ["void", "return", "non-return", "null"], answer: "void" },
        { question: "What is the output of: System.out.println(8 + 2);", options: ["10", "9", "Error", "8"], answer: "10" },
        { question: "Which of the following is not a valid way to declare a long variable in Java?", options: ["long l;", "long l = 0;", "long l = 1L;", "long l = '0';"], answer: "long l = '0';" },
        { question: "What is the output of: System.out.println(4 + 2 * 3);", options: ["10", "12", "Error", "8"], answer: "10" },
        { question: "Which of the following is a valid way to declare a short variable in Java?", options: ["short s;", "short s = 0;", "Both A and B", "short s = '0';"], answer: "Both A and B" },
        { question: "What is the output of: System.out.println(3 + 2 * 3);", options: ["9", "8", "Error", "10"], answer: "9" },
        { question: "Which of the following is a valid way to declare a string array in Java?", options: ["String[] arr;", "String arr[];", "Both A and B", "String arr;"], answer: "Both A and B" },
        { question: "What is the output of: System.out.println(1 + 1);", options: ["1", "2", "Error", "3"], answer: "2" },
        { question: "Which of the following is not a valid way to declare an array in Java?", options: ["int[] arr;", "int arr = new int[5];", "int arr[] = new int[5];", "int arr[5];"], answer: "int arr[5];" },
        { question: "What is the output of: System.out.println(6 + 2);", options: ["8", "7", "Error", "9"], answer: "8" },
        { question: "Which of the following is a valid way to declare a boolean variable in Java?", options: ["boolean b = true;", "boolean b = 1;", "boolean b = 'true';", "Both A and B"], answer: "boolean b = true;" },
        { question: "What is the output of: System.out.println(10 + 5 - 2);", options: ["13", "12", "Error", "14"], answer: "13" },
        { question: "Which of the following is true about the 'break' statement?", options: ["It exits the current loop", "It skips the current iteration", "It terminates the program", "It does nothing"], answer: "It exits the current loop" },
        { question: "What is the output of: System.out.println(2 * 3 + 1);", options: ["7", "6", "Error", "5"], answer: "7" },
        { question: "What is the output of: System.out.println(4 - 2);", options: ["2", "1", "Error", "3"], answer: "2" },
        { question: "Which of the following is true about the 'if' statement in Java?", options: ["It must be followed by an else statement", "It can have multiple else if statements", "It cannot be nested", "None of the above"], answer: "It can have multiple else if statements" },
        { question: "What is the output of: System.out.println(10 + (3 * 2));", options: ["16", "14", "12", "Error"], answer: "16" },
        { question: "Which of the following is a valid way to declare an object in Java?", options: ["ClassName obj = new ClassName();", "obj = new ClassName();", "ClassName obj = ClassName();", "Both A and B"], answer: "ClassName obj = new ClassName();" },
        { question: "What is the output of: System.out.println(8 / 4);", options: ["2", "4", "Error", "3"], answer: "2" },
        { question: "What is the output of: System.out.println(1 + 2 * 2);", options: ["6", "5", "4", "Error"], answer: "5" },
        { question: "Which of the following is not a valid way to declare a double variable in Java?", options: ["double d;", "double d = 1.0;", "double d = '1.0';", "double d = 0.0;"], answer: "double d = '1.0';" },
        { question: "What is the output of: System.out.println(10 * 2);", options: ["20", "22", "Error", "18"], answer: "20" },
        { question: "Which of the following is a valid way to declare a character array in Java?", options: ["char[] arr;", "char arr[];", "Both A and B", "char arr;"], answer: "Both A and B" },
        { question: "What is the output of: System.out.println(5 - 1);", options: ["4", "3", "Error", "5"], answer: "4" },
        { question: "Which of the following is true about the 'while' loop?", options: ["It executes at least once", "It is an entry-controlled loop", "It cannot be nested", "None of the above"], answer: "It is an entry-controlled loop" },
        { question: "What is the output of: System.out.println(3 + 3);", options: ["6", "5", "Error", "4"], answer: "6" },
        { question: "Which of the following is a valid way to declare a long variable in Java?", options: ["long l;", "long l = 1L;", "Both A and B", "long l = '0';"], answer: "Both A and B" },
        { question: "What is the output of: System.out.println(10 - (5 - 3));", options: ["8", "7", "Error", "6"], answer: "8" },
        { question: "Which of the following is not a valid way to declare a string variable in Java?", options: ["String s;", "String s = \"Hello\";", "String s = 'Hello';", "String s = new String();"], answer: "String s = 'Hello';" },
        { question: "What is the output of: System.out.println(7 + 3);", options: ["10", "9", "Error", "8"], answer: "10" },
        { question: "Which of the following is true about the 'do-while' loop?", options: ["It executes at least once", "It is an entry-controlled loop", "It cannot be nested", "None of the above"], answer: "It executes at least once" },
        { question: "What is the output of: System.out.println(4 + 1);", options: ["5", "4", "Error", "6"], answer: "5" },
        { question: "Which of the following is a valid way to declare a boolean array in Java?", options: ["boolean[] arr;", "boolean arr[];", "Both A and B", "boolean arr;"], answer: "Both A and B" },
        { question: "What is the output of: System.out.println(5 + 5 + 5 + 5);", options: ["20", "19", "Error", "21"], answer: "20" },
        { question: "Which of the following is true about the 'switch' statement?", options: ["It can have multiple case statements", "It cannot have default case", "It is only used with integers", "None of the above"], answer: "It can have multiple case statements" },
        { question: "What is the output of: System.out.println(1 + 3 + 5);", options: ["8", "7", "Error", "9"], answer: "9" },
        { question: "Which of the following is not a valid way to declare a byte array in Java?", options: ["byte[] arr;", "byte arr[];", "Both A and B", "byte arr;"], answer: "byte arr;"},
        { question: "What is the output of: System.out.println(3 * 3);", options: ["9", "10", "Error", "8"], answer: "9" },
        { question: "Which of the following is a valid way to declare a double array in Java?", options: ["double[] arr;", "double arr[];", "Both A and B", "double arr;"], answer: "Both A and B" },
        { question: "What is the output of: System.out.println(10 - 2);", options: ["8", "7", "Error", "9"], answer: "8" },
        { question: "Which of the following is not a valid way to declare a float variable in Java?", options: ["float f;", "float f = 0.0;", "float f = '0.0';", "float f = 1.0;"], answer: "float f = '0.0';" },
        { question: "What is the output of: System.out.println(6 - 4);", options: ["2", "1", "Error", "3"], answer: "2" },
        { question: "Which of the following is true about the 'for' loop?", options: ["It can be used to iterate over arrays", "It is an entry-controlled loop", "It cannot be nested", "Both A and B"], answer: "Both A and B" },
        { question: "What is the output of: System.out.println(5 + 5);", options: ["10", "11", "Error", "12"], answer: "10" },
        { question: "Which of the following is not a valid way to declare a short variable in Java?", options: ["short s;", "short s = 0;", "short s = 1;", "short s = '0';"], answer: "short s = '0';"},
        { question: "What is the output of: System.out.println(8 - 3);", options: ["5", "4", "Error", "6"], answer: "5" },
        { question: "Which of the following is a valid way to declare an integer array in Java?", options: ["int[] arr;", "int arr[];", "Both A and B", "int arr;"], answer: "Both A and B" },
        { question: "What is the output of: System.out.println(5 + 0);", options: ["5", "6", "Error", "4"], answer: "5" },
        { question: "Which of the following is not a valid operator in Java?", options: ["&&", "||", "!=","??"], answer: "??" },
        { question: "What is the output of: System.out.println(3 * 2);", options: ["5", "6", "Error", "7"], answer: "6" },
        { question: "Which of the following is a valid way to declare a char array in Java?", options: ["char[] arr;", "char arr[];", "Both A and B", "char arr;"], answer: "Both A and B" },
        { question: "What is the output of: System.out.println(7 + 1);", options: ["7", "8", "Error", "6"], answer: "8" },
        { question: "Which of the following is true about the 'return' statement in Java?", options: ["It can return multiple values", "It exits the current method", "It can only return primitive types", "None of the above"], answer: "It exits the current method" },
        { question: "What is the output of: System.out.println(10 * 1);", options: ["10", "11", "Error", "9"], answer: "10" },
        { question: "Which of the following is a valid way to declare a boolean variable in Java?", options: ["boolean b = true;", "boolean b = 1;", "boolean b = 'true';", "Both A and B"], answer: "boolean b = true;" },
        { question: "What is the output of: System.out.println(5 * 0);", options: ["0", "1", "Error", "5"], answer: "0" },
        { question: "Which of the following is true about the 'do-while' loop?", options: ["It executes at least once", "It is an entry-controlled loop", "It cannot be nested", "None of the above"], answer: "It executes at least once" },
        { question: "What is the output of: System.out.println(3 + 1);", options: ["4", "3", "Error", "5"], answer: "4" },
        { question: "Which of the following is a valid way to declare a float variable in Java?", options: ["float f;", "float f = 1.0f;", "Both A and B", "float f = '1.0';"], answer: "Both A and B" },
        { question: "What is the output of: System.out.println(5 + 2);", options: ["7", "8", "Error", "6"], answer: "7" },
    ],
    DSA: [
        { "question": "What is the time complexity of binary search?", "options": ["O(n)", "O(log n)", "O(n log n)", "O(1)"], "answer": "O(log n)" },
        { "question": "Which data structure is used to implement a LIFO mechanism?", "options": ["Queue", "Stack", "Linked List", "Hash Map"], "answer": "Stack" },
        { "question": "What is the best case time complexity of quicksort?", "options": ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"], "answer": "O(n log n)" },
        { "question": "Which traversal technique visits nodes in a depth-first manner?", "options": ["Breadth-first Search", "Level-order Traversal", "Depth-first Search", "In-order Traversal"], "answer": "Depth-first Search" },
        { "question": "In a binary tree, how many children can a node have at most?", "options": ["1", "2", "3", "4"], "answer": "2" },
        { "question": "What is the space complexity of merge sort?", "options": ["O(n)", "O(1)", "O(log n)", "O(n^2)"], "answer": "O(n)" },
        { "question": "Which data structure is ideal for implementing a queue?", "options": ["Array", "Stack", "Linked List", "Hash Map"], "answer": "Linked List" },
        { "question": "Which sorting algorithm works by repeatedly swapping adjacent elements if they are in the wrong order?", "options": ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort"], "answer": "Bubble Sort" },
        { "question": "What is the time complexity of searching for an element in a balanced binary search tree?", "options": ["O(log n)", "O(n)", "O(1)", "O(n log n)"], "answer": "O(log n)" },
        { "question": "Which data structure provides constant time access by key?", "options": ["Stack", "Hash Map", "Queue", "Linked List"], "answer": "Hash Map" },
        { "question": "In an array of size n, what is the time complexity to access the ith element?", "options": ["O(log n)", "O(n)", "O(1)", "O(n log n)"], "answer": "O(1)" },
        { "question": "Which data structure allows elements to be removed in FIFO order?", "options": ["Stack", "Queue", "Heap", "Array"], "answer": "Queue" },
        { "question": "What is the worst case time complexity of insertion sort?", "options": ["O(n log n)", "O(log n)", "O(n^2)", "O(n)"], "answer": "O(n^2)" },
        { "question": "Which tree is a self-balancing binary search tree?", "options": ["AVL Tree", "B-tree", "Trie", "Binary Tree"], "answer": "AVL Tree" },
        { "question": "What is the primary function of a heap data structure?", "options": ["Quick lookup", "Maintaining sorted order", "Implementing priority queues", "Graph traversal"], "answer": "Implementing priority queues" },
        { "question": "What is the time complexity of adding an element to a max-heap?", "options": ["O(log n)", "O(n)", "O(1)", "O(n log n)"], "answer": "O(log n)" },
        { "question": "Which of the following is an example of divide and conquer?", "options": ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"], "answer": "Merge Sort" },
        { "question": "What is the time complexity of building a binary heap?", "options": ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"], "answer": "O(n log n)" },
        { "question": "Which tree traversal follows left subtree, root, right subtree order?", "options": ["In-order Traversal", "Pre-order Traversal", "Post-order Traversal", "Level-order Traversal"], "answer": "In-order Traversal" },
        { "question": "What is the height of a complete binary tree with n nodes?", "options": ["O(log n)", "O(n)", "O(n log n)", "O(1)"], "answer": "O(log n)" },
        { "question": "Which data structure is used to detect balanced parentheses in an expression?", "options": ["Stack", "Queue", "Linked List", "Array"], "answer": "Stack" },
        { "question": "Which algorithm is used to sort a linked list?", "options": ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"], "answer": "Merge Sort" },
        { "question": "What is the maximum number of edges in a simple undirected graph with n vertices?", "options": ["n", "n(n-1)/2", "n^2", "2n"], "answer": "n(n-1)/2" },
        { "question": "What is the time complexity of checking if a binary tree is a binary search tree?", "options": ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"], "answer": "O(n)" },
        { "question": "Which data structure is used in the implementation of recursion?", "options": ["Queue", "Stack", "Heap", "Array"], "answer": "Stack" },
        { "question": "What is the time complexity of searching an element in a hash map?", "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"], "answer": "O(1)" },
        { "question": "Which data structure is used to implement a priority queue?", "options": ["Linked List", "Binary Heap", "Hash Map", "Array"], "answer": "Binary Heap" },
        { "question": "Which data structure is used in breadth-first search (BFS)?", "options": ["Stack", "Queue", "Heap", "Array"], "answer": "Queue" },
        { "question": "Which algorithm is used to find the longest common subsequence?", "options": ["Dynamic Programming", "Greedy Algorithm", "Backtracking", "Divide and Conquer"], "answer": "Dynamic Programming" },
        { "question": "What is the time complexity of heap sort?", "options": ["O(n log n)", "O(n)", "O(log n)", "O(n^2)"], "answer": "O(n log n)" },
        { "question": "Which data structure can efficiently store intervals and answer range queries?", "options": ["Segment Tree", "Binary Search Tree", "AVL Tree", "Hash Map"], "answer": "Segment Tree" },
            { "question": "What is the time complexity of finding the maximum element in an unsorted array?", "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"], "answer": "O(n)" },
            { "question": "Which data structure is used to implement a priority queue efficiently?", "options": ["Heap", "Array", "Stack", "Queue"], "answer": "Heap" },
            { "question": "What is the worst case time complexity of merge sort?", "options": ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], "answer": "O(n log n)" },
            { "question": "What is the space complexity of quicksort in the worst case?", "options": ["O(log n)", "O(n)", "O(n^2)", "O(1)"], "answer": "O(n)" },
            { "question": "Which traversal technique visits nodes in a breadth-first manner?", "options": ["DFS", "BFS", "In-order Traversal", "Pre-order Traversal"], "answer": "BFS" },
            { "question": "What is the time complexity of inserting an element in a B-tree?", "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"], "answer": "O(log n)" },
            { "question": "Which sorting algorithm divides the array into a sorted and an unsorted region?", "options": ["Selection Sort", "Bubble Sort", "Merge Sort", "Quick Sort"], "answer": "Selection Sort" },
            { "question": "What is the height of a red-black tree with n nodes?", "options": ["O(n)", "O(log n)", "O(n log n)", "O(1)"], "answer": "O(log n)" },
            { "question": "Which data structure is commonly used for implementing a recursive function?", "options": ["Stack", "Queue", "Heap", "Linked List"], "answer": "Stack" },
            { "question": "What is the time complexity of searching an element in an unsorted array?", "options": ["O(log n)", "O(n log n)", "O(1)", "O(n)"], "answer": "O(n)" },
            { "question": "Which algorithm is used to merge two sorted linked lists?", "options": ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"], "answer": "Merge Sort" },
            { "question": "What is the time complexity of inserting an element in a max-heap?", "options": ["O(n)", "O(n^2)", "O(log n)", "O(1)"], "answer": "O(log n)" },
            { "question": "Which sorting algorithm is in-place and unstable?", "options": ["Heap Sort", "Merge Sort", "Quick Sort", "Selection Sort"], "answer": "Quick Sort" },
            { "question": "Which data structure can store elements in order while maintaining efficient insertion and lookup?", "options": ["Heap", "Hash Map", "Binary Search Tree", "Array"], "answer": "Binary Search Tree" },
            { "question": "What is the time complexity of deleting a node from a binary search tree?", "options": ["O(log n)", "O(1)", "O(n)", "O(n log n)"], "answer": "O(log n)" },
            { "question": "Which algorithm finds the maximum flow in a flow network?", "options": ["Floyd-Warshall Algorithm", "Bellman-Ford Algorithm", "Ford-Fulkerson Algorithm", "Kruskal's Algorithm"], "answer": "Ford-Fulkerson Algorithm" },
            { "question": "What is the space complexity of depth-first search?", "options": ["O(n)", "O(n + E)", "O(1)", "O(log n)"], "answer": "O(n + E)" },
            { "question": "Which data structure is used for implementing a cache with fast access and deletion?", "options": ["Linked List", "Queue", "Hash Map", "Stack"], "answer": "Hash Map" },
            { "question": "What is the time complexity of accessing an element in a hash table with collisions?", "options": ["O(log n)", "O(1)", "O(n)", "O(n log n)"], "answer": "O(n)" },
            { "question": "Which algorithm is used to find the longest increasing subsequence?", "options": ["Dynamic Programming", "Backtracking", "Greedy Algorithm", "Divide and Conquer"], "answer": "Dynamic Programming" },
            { "question": "What is the time complexity of the union-find algorithm with path compression?", "options": ["O(n)", "O(log n)", "O(α(n))", "O(n^2)"], "answer": "O(α(n))" },
            { "question": "Which data structure is used to store elements in sorted order while allowing fast insertion and deletion?", "options": ["Heap", "Linked List", "AVL Tree", "Queue"], "answer": "AVL Tree" },
            { "question": "What is the time complexity of traversing all nodes in a binary tree?", "options": ["O(log n)", "O(n)", "O(n log n)", "O(n^2)"], "answer": "O(n)" },
            { "question": "Which algorithm is used to check if a graph is bipartite?", "options": ["DFS", "BFS", "Dijkstra's Algorithm", "Floyd-Warshall Algorithm"], "answer": "BFS" },
            { "question": "What is the space complexity of breadth-first search?", "options": ["O(n)", "O(n + E)", "O(1)", "O(log n)"], "answer": "O(n + E)" },
            { "question": "Which data structure allows finding the median of a stream of numbers?", "options": ["Max-Heap and Min-Heap", "AVL Tree", "Hash Map", "Linked List"], "answer": "Max-Heap and Min-Heap" },
            { "question": "What is the time complexity of searching for an element in a binary search tree?", "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"], "answer": "O(log n)" },
            { "question": "Which data structure can store multiple values for a single key efficiently?", "options": ["Trie", "Hash Map", "AVL Tree", "Segment Tree"], "answer": "Trie" },
            { "question": "What is the time complexity of finding the shortest path using Bellman-Ford?", "options": ["O(n^3)", "O(n^2)", "O(nE)", "O(E log n)"], "answer": "O(nE)" },
            { "question": "Which algorithm solves the 0/1 knapsack problem using dynamic programming?", "options": ["Ford-Fulkerson Algorithm", "Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Dynamic Programming"], "answer": "Dynamic Programming" },
            { "question": "What is the time complexity of topological sorting using Kahn's algorithm?", "options": ["O(n)", "O(n^2)", "O(V + E)", "O(log n)"], "answer": "O(V + E)" },
            { "question": "Which data structure is used to maintain a dynamic set of disjoint sets?", "options": ["Union-Find", "Trie", "AVL Tree", "Hash Map"], "answer": "Union-Find" },
            { "question": "What is the time complexity of searching for a value in a skip list?", "options": ["O(n)", "O(log n)", "O(1)", "O(n^2)"], "answer": "O(log n)" },
            { "question": "Which sorting algorithm is best for nearly sorted data?", "options": ["Bubble Sort", "Insertion Sort", "Merge Sort", "Quick Sort"], "answer": "Insertion Sort" },
            { "question": "What is the time complexity of Floyd-Warshall algorithm for finding shortest paths?", "options": ["O(V^3)", "O(V^2)", "O(V log V)", "O(V + E)"], "answer": "O(V^3)" },
            { "question": "Which data structure is used for scheduling tasks with deadlines?", "options": ["Priority Queue", "Stack", "Linked List", "Hash Map"], "answer": "Priority Queue" },
            { "question": "What is the time complexity of inserting an element in a Fibonacci heap?", "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"], "answer": "O(1)" },        
        { "question": "What is the time complexity of finding the maximum element in a binary max-heap?", "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"], "answer": "O(1)" },
                { "question": "Which sorting algorithm is considered stable?", "options": ["Merge Sort", "Heap Sort", "Quick Sort", "Selection Sort"], "answer": "Merge Sort" },
                { "question": "What is the purpose of backtracking in algorithms?", "options": ["Divide the problem", "To optimize space complexity", "To find all possible solutions", "To avoid recursion"], "answer": "To find all possible solutions" },
                { "question": "What is the time complexity of an adjacency matrix representation of a graph?", "options": ["O(V+E)", "O(V^2)", "O(E)", "O(V)"], "answer": "O(V^2)" },
                { "question": "Which algorithm is used to solve the knapsack problem?", "options": ["Greedy Algorithm", "Dynamic Programming", "Backtracking", "Divide and Conquer"], "answer": "Dynamic Programming" },
                { "question": "What is the space complexity of DFS using recursion?", "options": ["O(V+E)", "O(V)", "O(E)", "O(1)"], "answer": "O(V)" },
                { "question": "Which sorting algorithm is the most efficient in worst case for large datasets?", "options": ["Merge Sort", "Bubble Sort", "Insertion Sort", "Selection Sort"], "answer": "Merge Sort" },
                { "question": "What is a characteristic of a red-black tree?", "options": ["Every node has the same color", "Tree is balanced", "Height of the tree is minimized", "There are no duplicate nodes"], "answer": "Tree is balanced" },
                { "question": "Which data structure is used to convert infix to postfix notation?", "options": ["Queue", "Stack", "Heap", "Array"], "answer": "Stack" },
                { "question": "What is the best case time complexity of selection sort?", "options": ["O(n log n)", "O(n)", "O(n^2)", "O(1)"], "answer": "O(n^2)" },
                { "question": "Which algorithm is used for deadlock detection?", "options": ["Kruskal's Algorithm", "Banker's Algorithm", "Prim's Algorithm", "Floyd-Warshall Algorithm"], "answer": "Banker's Algorithm" },
                { "question": "What is the primary use of a trie data structure?", "options": ["Storing sorted data", "Efficient search", "String searching", "Shortest path finding"], "answer": "String searching" },
                { "question": "Which algorithm is used to find articulation points in a graph?", "options": ["BFS", "DFS", "Prim's Algorithm", "Dijkstra's Algorithm"], "answer": "DFS" },
                { "question": "What is the time complexity of finding the median of a stream of numbers using a heap?", "options": ["O(n)", "O(log n)", "O(n^2)", "O(1)"], "answer": "O(log n)" },
                { "question": "Which algorithm solves the traveling salesman problem exactly?", "options": ["Greedy Algorithm", "Dynamic Programming", "Backtracking", "Branch and Bound"], "answer": "Branch and Bound" },
                { "question": "Which data structure is ideal for implementing an undo operation?", "options": ["Queue", "Heap", "Stack", "Linked List"], "answer": "Stack" },
                { "question": "Which algorithm is used for topological sorting?", "options": ["DFS", "BFS", "Kruskal's Algorithm", "Dijkstra's Algorithm"], "answer": "DFS" },
                { "question": "What is the time complexity of inserting an element in a red-black tree?", "options": ["O(1)", "O(log n)", "O(n log n)", "O(n)"], "answer": "O(log n)" },
                { "question": "Which sorting algorithm performs well on small datasets?", "options": ["Quick Sort", "Merge Sort", "Insertion Sort", "Heap Sort"], "answer": "Insertion Sort" },
                { "question": "What is the time complexity of matrix multiplication for two n x n matrices?", "options": ["O(n)", "O(n^2)", "O(n^3)", "O(log n)"], "answer": "O(n^3)" },
                { "question": "Which algorithm is best for detecting cycles in an undirected graph?", "options": ["BFS", "DFS", "Kruskal's Algorithm", "Prim's Algorithm"], "answer": "DFS" },
                { "question": "Which algorithm is used for Huffman coding?", "options": ["Greedy Algorithm", "Dynamic Programming", "Backtracking", "Divide and Conquer"], "answer": "Greedy Algorithm" },
                { "question": "Which data structure allows dynamic resizing?", "options": ["Array", "Linked List", "Stack", "Queue"], "answer": "Linked List" },
                { "question": "What is the time complexity of inserting an element in an AVL tree?", "options": ["O(log n)", "O(n log n)", "O(1)", "O(n)"], "answer": "O(log n)" },
                { "question": "Which data structure is used to store a sequence of elements in a binary search tree?", "options": ["Queue", "Heap", "Stack", "Array"], "answer": "Array" },
                { "question": "What is the time complexity of deleting the minimum element in a binary min-heap?", "options": ["O(log n)", "O(1)", "O(n)", "O(n^2)"], "answer": "O(log n)" },
                    { "question": "What is the time complexity of searching for an element in a balanced binary search tree?", "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"], "answer": "O(log n)" },
                    { "question": "Which data structure is used for implementing LRU cache?", "options": ["Queue", "Hash Map and Doubly Linked List", "Stack", "Heap"], "answer": "Hash Map and Doubly Linked List" },
                    { "question": "What is the time complexity of inserting an element in a hash table?", "options": ["O(1)", "O(n)", "O(log n)", "O(n^2)"], "answer": "O(1)" },
                    { "question": "Which algorithm is used to detect a cycle in a directed graph?", "options": ["DFS", "BFS", "Kruskal's Algorithm", "Bellman-Ford Algorithm"], "answer": "DFS" },
                    { "question": "Which data structure is used for implementing DFS?", "options": ["Queue", "Stack", "Heap", "Priority Queue"], "answer": "Stack" },
                    { "question": "What is the time complexity of bubble sort in the worst case?", "options": ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"], "answer": "O(n^2)" },
                    { "question": "Which data structure is used for implementing a breadth-first search?", "options": ["Stack", "Queue", "Priority Queue", "Linked List"], "answer": "Queue" },
                    { "question": "What is the space complexity of merge sort?", "options": ["O(log n)", "O(1)", "O(n log n)", "O(n)"], "answer": "O(n)" },
                    { "question": "Which data structure supports range queries efficiently?", "options": ["Stack", "Segment Tree", "Queue", "Hash Table"], "answer": "Segment Tree" },
                    { "question": "What is the time complexity of inserting an element into a binary search tree (BST) in the average case?", "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"], "answer": "O(log n)" },
                    { "question": "Which algorithm is used to solve the fractional knapsack problem?", "options": ["Dynamic Programming", "Greedy Algorithm", "Backtracking", "Branch and Bound"], "answer": "Greedy Algorithm" },
                    { "question": "What is the time complexity of in-order traversal in a binary search tree?", "options": ["O(log n)", "O(n)", "O(n^2)", "O(n log n)"], "answer": "O(n)" },
                    { "question": "Which data structure is best suited for implementing an associative array?", "options": ["Array", "Hash Table", "Queue", "Linked List"], "answer": "Hash Table" },
                    { "question": "What is the time complexity of Dijkstra's algorithm using a binary heap?", "options": ["O(V + E)", "O(V^2)", "O(E log V)", "O(V log V)"], "answer": "O(E log V)" },
                    { "question": "What is the time complexity of searching for an element in an AVL tree?", "options": ["O(n)", "O(log n)", "O(n log n)", "O(1)"], "answer": "O(log n)" },
                    { "question": "Which data structure is best for implementing a priority queue?", "options": ["Heap", "Array", "Linked List", "Stack"], "answer": "Heap" },
                    { "question": "What is the time complexity of inserting an element in a skip list?", "options": ["O(n)", "O(log n)", "O(1)", "O(n^2)"], "answer": "O(log n)" },
                    { "question": "Which algorithm is used for finding the longest common prefix in a set of strings?", "options": ["Trie", "KMP Algorithm", "Rabin-Karp Algorithm", "Dynamic Programming"], "answer": "Trie" },
                    { "question": "What is the time complexity of performing a union operation in union-find with path compression?", "options": ["O(log n)", "O(n)", "O(α(n))", "O(n^2)"], "answer": "O(α(n))" },
                    { "question": "Which data structure is best suited for implementing a deque?", "options": ["Array", "Doubly Linked List", "Stack", "Queue"], "answer": "Doubly Linked List" },
                    { "question": "What is the time complexity of reversing a linked list?", "options": ["O(log n)", "O(n)", "O(n^2)", "O(1)"], "answer": "O(n)" },
                    { "question": "Which algorithm is used for solving the subset sum problem?", "options": ["Dynamic Programming", "Greedy Algorithm", "Backtracking", "Branch and Bound"], "answer": "Dynamic Programming" },
                    { "question": "What is the time complexity of BFS in a graph with V vertices and E edges?", "options": ["O(V^2)", "O(V+E)", "O(log V)", "O(E log V)"], "answer": "O(V+E)" },
                    { "question": "Which data structure allows O(1) time complexity for both insertions and deletions?", "options": ["Array", "Hash Table", "Stack", "Queue"], "answer": "Hash Table" },
                    { "question": "What is the time complexity of building a heap from an unsorted array?", "options": ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"], "answer": "O(n)" },
                    { "question": "Which data structure is used to store the Huffman tree?", "options": ["Queue", "Binary Tree", "Heap", "Stack"], "answer": "Binary Tree" },
                    { "question": "What is the time complexity of accessing an element in a linked list?", "options": ["O(log n)", "O(1)", "O(n)", "O(n^2)"], "answer": "O(n)" },
                    { "question": "Which algorithm is used to find the longest palindromic substring?", "options": ["KMP Algorithm", "Manacher's Algorithm", "Rabin-Karp Algorithm", "Dynamic Programming"], "answer": "Manacher's Algorithm" },
                    { "question": "What is the time complexity of Prim's algorithm using a binary heap?", "options": ["O(E log V)", "O(V^2)", "O(V + E)", "O(log n)"], "answer": "O(E log V)" },
                    { "question": "Which data structure is used to represent disjoint sets?", "options": ["Trie", "Union-Find", "Heap", "Binary Tree"], "answer": "Union-Find" },
                    { "question": "What is the time complexity of checking if a graph is bipartite using BFS?", "options": ["O(V^2)", "O(V+E)", "O(V log V)", "O(E log V)"], "answer": "O(V+E)" }, 
        ],
        
        C: [
            { question: "Which of the following is not a valid data type in C?", options: ["int", "float", "boolean", "double"], answer: "boolean" },
            { question: "What is the output of: printf(\"%d\", 5 * 10);?", options: ["50", "15", "510", "Error"], answer: "50" },
            { question: "Which of the following is a correct syntax to declare a pointer in C?", options: ["int *ptr;", "ptr int;", "int ptr;", "ptr *int;"], answer: "int *ptr;" },
            { question: "How do you allocate memory dynamically for an array in C?", options: ["malloc()", "calloc()", "realloc()", "All of the above"], answer: "All of the above" },
            { question: "What will the statement return: sizeof(char)?", options: ["1", "2", "4", "8"], answer: "1" },
            { question: "Which of the following is not a valid storage class in C?", options: ["static", "register", "extern", "constant"], answer: "constant" },
            { question: "Which function is used to free dynamically allocated memory in C?", options: ["malloc()", "free()", "delete()", "clear()"], answer: "free()" },
            { question: "What will be the output of: printf(\"%d\", 10 / 3);?", options: ["3", "3.33", "Error", "3"], answer: "3" },
            { question: "What is the default value of a static variable in C?", options: ["0", "null", "garbage value", "undefined"], answer: "0" },
            { question: "What is the use of the 'goto' statement in C?", options: ["It terminates the program", "It jumps to another part of the program", "It creates a loop", "It skips an iteration"], answer: "It jumps to another part of the program" },
            { question: "Which of the following is not a looping structure in C?", options: ["for", "while", "do-while", "repeat"], answer: "repeat" },
            { question: "How do you define a multi-line comment in C?", options: ["//", "#", "/* */", "<!-- -->"], answer: "/* */" },
            { question: "Which of the following is true about C?", options: ["C is an object-oriented language", "C is a platform-independent language", "C is a low-level language", "C is a procedural language"], answer: "C is a procedural language" },
            { question: "Which keyword is used to prevent a variable from being modified in C?", options: ["const", "final", "static", "volatile"], answer: "const" },
            { question: "Which of the following is a preprocessor directive?", options: ["#include", "int", "main", "printf"], answer: "#include" },
            { question: "What is the result of: printf(\"%d\", 9 % 2);?", options: ["1", "2", "3", "0"], answer: "1" },
            { question: "Which of the following functions is used to open a file in C?", options: ["fread()", "fopen()", "fwrite()", "fclose()"], answer: "fopen()" },
            { question: "Which of the following can be used to create a symbolic constant in C?", options: ["#define", "const", "enum", "All of the above"], answer: "All of the above" },
            { question: "What is the file extension for C programs?", options: [".c", ".cpp", ".java", ".py"], answer: ".c" },
            { question: "What is the output of: printf(\"%d\", 1 << 2);?", options: ["1", "2", "4", "8"], answer: "4" }
        ],
        CPlusPlus: [
            { question: "Which of the following is not a valid access specifier in C++?", options: ["public", "protected", "private", "internal"], answer: "internal" },
            { question: "Which of the following correctly declares an array of 10 integers in C++?", options: ["int array[10];", "int array;", "array[10];", "int array();"], answer: "int array[10];" },
            { question: "Which of the following is a valid keyword in C++?", options: ["virtual", "volatile", "explicit", "All of the above"], answer: "All of the above" },
            { question: "What is a constructor in C++?", options: ["A function that initializes objects of a class", "A function that creates new classes", "A function that deletes objects", "None of the above"], answer: "A function that initializes objects of a class" },
            { question: "Which of the following is not a feature of Object-Oriented Programming in C++?", options: ["Encapsulation", "Abstraction", "Inheritance", "Procedural programming"], answer: "Procedural programming" },
            { question: "Which of the following operators cannot be overloaded in C++?", options: ["+", "-", "=", "::"], answer: "::" },
            { question: "Which of the following is true about 'this' pointer?", options: ["It refers to the current object of a class", "It can be used to return the object itself", "It is passed as a hidden argument to all non-static member functions", "All of the above"], answer: "All of the above" },
            { question: "What is polymorphism in C++?", options: ["The ability to define multiple functions with the same name", "The ability to assign one value to multiple variables", "The ability to overload an operator", "The ability to use one interface in different ways"], answer: "The ability to use one interface in different ways" },
            { question: "What will be the output of: cout << 5 % 2 << endl;?", options: ["1", "2", "0", "5"], answer: "1" },
            { question: "Which of the following is the correct syntax for a destructor in C++?", options: ["~ClassName();", "ClassName();", "delete ClassName();", "~ClassName;"], answer: "~ClassName();" },
            { question: "Which of the following is a correct way to create a reference variable in C++?", options: ["int &ref = x;", "int ref = &x;", "int ref = x;", "ref int = x;"], answer: "int &ref = x;" },
            { question: "Which of the following is a feature of C++ that allows a class to derive properties from another class?", options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"], answer: "Inheritance" },
            { question: "What does the 'new' operator do in C++?", options: ["Allocates memory dynamically", "Deallocates memory", "Creates a new file", "Closes a file"], answer: "Allocates memory dynamically" },
            { question: "What is the output of: cout << (4 > 2 ? \"true\" : \"false\") << endl;?", options: ["true", "false", "Error", "0"], answer: "true" },
            { question: "Which of the following is the correct syntax to overload the '+' operator?", options: ["operator+();", "operator +();", "+operator();", "operator plus();"], answer: "operator+();" },
            { question: "What is the difference between 'class' and 'struct' in C++?", options: ["All members of a class are private by default, while all members of a struct are public by default", "Classes cannot have methods, while structs can", "Structs cannot inherit from other structs, but classes can", "There is no difference"], answer: "All members of a class are private by default, while all members of a struct are public by default" },
            { question: "Which of the following data types is not supported in C++?", options: ["float", "double", "bool", "text"], answer: "text" },
            { question: "What is the output of: cout << 9 / 2 << endl;?", options: ["4", "4.5", "Error", "5"], answer: "4" },
            { question: "Which of the following is not a type of inheritance in C++?", options: ["Single inheritance", "Multiple inheritance", "Hierarchical inheritance", "Abstract inheritance"], answer: "Abstract inheritance" },
            { question: "Which of the following is the correct syntax for declaring a virtual function?", options: ["virtual void func();", "void virtual func();", "func virtual void();", "None of the above"], answer: "virtual void func();" },
            { question: "What does the keyword 'friend' indicate in C++?", options: ["It allows non-member functions to access private and protected members of a class", "It makes a function public", "It creates a copy of the class", "None of the above"], answer: "It allows non-member functions to access private and protected members of a class" },
            { question: "Which of the following is the base class for all exceptions in C++?", options: ["std::exception", "std::runtime_error", "std::logic_error", "std::error"], answer: "std::exception" },
            { question: "What is the purpose of a namespace in C++?", options: ["To group logically related functions and variables", "To create an alias for another function", "To define a new data type", "To organize code into different files"], answer: "To group logically related functions and variables" },
            { question: "Which of the following header files is used for input and output operations in C++?", options: ["iostream", "stdio.h", "fstream", "conio.h"], answer: "iostream" },
            { question: "Which of the following is true about static members of a class?", options: ["They are shared by all objects of the class", "They can only be accessed by a single object", "They cannot be initialized inside the class", "They cannot be accessed outside the class"], answer: "They are shared by all objects of the class" },
            { question: "Which of the following is a correct way to handle exceptions in C++?", options: ["try-catch", "if-else", "switch-case", "None of the above"], answer: "try-catch" },
            { question: "Which of the following is used to indicate a class template in C++?", options: ["template<class T>", "template(T)", "class template", "template<class>"], answer: "template<class T>" },
            { question: "What is the output of: cout << (5 == 5) << endl;?", options: ["0", "1", "True", "False"], answer: "1" },
            { question: "Which operator is used to access members of a class in C++?", options: [".", "->", "::", "()"], answer: "." },
            { question: "What is an abstract class in C++?", options: ["A class with at least one pure virtual function", "A class without any member functions", "A class with only public members", "None of the above"], answer: "A class with at least one pure virtual function" },
            { question: "Which of the following is not a feature of C++?", options: ["Platform independence", "Object-oriented programming", "Multiple inheritance", "Operator overloading"], answer: "Platform independence" },
            { question: "Which of the following is not a valid loop in C++?", options: ["for", "while", "do-while", "repeat"], answer: "repeat" },
            { question: "Which of the following is used to define constant values in C++?", options: ["#define", "const", "enum", "All of the above"], answer: "All of the above" },
            { question: "What is the output of: cout << sizeof(char) << endl;?", options: ["1", "2", "4", "8"], answer: "1" },
            { question: "Which of the following function is used to find the length of a string in C++?", options: ["strlen()", "size()", "length()", "All of the above"], answer: "All of the above" },
            { question: "Which of the following correctly overloads the '<<' operator in C++?", options: ["ostream& operator<<(ostream&, const T&);", "operator<<(ostream&, const T&);", "ostream operator<<(ostream&, const T&);", "operator<< const T&;"], answer: "ostream& operator<<(ostream&, const T&);" },
            { question: "What will be the output of: cout << 10 << 20 << endl;?", options: ["1020", "10 20", "Error", "1020"], answer: "1020" },
            { question: "Which of the following is not a reserved keyword in C++?", options: ["auto", "register", "goto", "main"], answer: "main" },
            { question: "Which of the following is not a data type in C++?", options: ["bool", "void", "string", "real"], answer: "real" },
            { question: "What is the output of: cout << 10 / 4.0 << endl;?", options: ["2", "2.5", "2.0", "2.25"], answer: "2.5" },
            { question: "Which of the following is the correct way to access the value of an element in a vector in C++?", options: ["vector[index]", "vector.at(index)", "Both", "None"], answer: "Both" },
            { question: "Which of the following is a valid file mode in C++?", options: ["ios::in", "ios::out", "ios::binary", "All of the above"], answer: "All of the above" },
            { question: "Which function is used to close a file in C++?", options: ["close()", "fclose()", "end()", "terminate()"], answer: "close()" },
            { question: "Which of the following is the correct syntax for multiple inheritance in C++?", options: ["class Child: public Parent1, public Parent2", "class Child extends Parent1, Parent2", "class Child: Parent1, Parent2", "class Child inherits Parent1, Parent2"], answer: "class Child: public Parent1, public Parent2" },
            { question: "Which of the following is not a type of casting in C++?", options: ["static_cast", "dynamic_cast", "void_cast", "reinterpret_cast"], answer: "void_cast" },
            { question: "Which of the following containers is part of the Standard Template Library (STL) in C++?", options: ["vector", "list", "map", "All of the above"], answer: "All of the above" },
            { question: "Which of the following is not a valid bitwise operator in C++?", options: ["&", "|", "~", "%"], answer: "%" }
        ],
    SQL : [
        { "question": "What does SQL stand for?", "options": ["Sequential Query Language", "None of the above", "Structured Query Language", "Structured Question Language"], "answer": "Structured Query Language" },
        { "question": "Which SQL statement is used to create a table?", "options": ["NEW TABLE", "TABLE CREATE", "CREATE TABLE", "MAKE TABLE"], "answer": "CREATE TABLE" },
        { "question": "Which command is used to delete data from a database?", "options": ["REMOVE", "DELETE", "DROP", "CLEAR"], "answer": "DELETE" },
        { "question": "How do you select all columns from a table named 'Employees'?", "options": ["SELECT * Employees", "SELECT * FROM Employees", "SELECT ALL FROM Employees", "SELECT Employees"], "answer": "SELECT * FROM Employees" },
        { "question": "Which SQL clause is used to filter records?", "options": ["FILTER", "WHERE", "HAVING", "SELECT"], "answer": "WHERE" },
        { "question": "What is the purpose of the GROUP BY clause?", "options": ["To sort data", "To combine data", "To filter rows", "To group rows sharing a property"], "answer": "To group rows sharing a property" },
        { "question": "Which function is used to count the number of rows in a result set?", "options": ["TOTAL()", "COUNT()", "ROWS()", "SUM()"], "answer": "COUNT()" },
        { "question": "How do you add a new column to an existing table?", "options": ["ADD COLUMN", "UPDATE TABLE", "INSERT COLUMN", "ALTER TABLE"], "answer": "ALTER TABLE" },
        { "question": "Which SQL statement is used to update data in a table?", "options": ["CHANGE", "UPDATE", "SET", "MODIFY"], "answer": "UPDATE" },
        { "question": "Which keyword is used to sort the result set?", "options": ["ORDER BY", "SORT BY", "GROUP BY", "ARRANGE BY"], "answer": "ORDER BY" },
        { "question": "What is the default sorting order of the ORDER BY clause?", "options": ["Ascending", "Descending", "None of the above", "Random"], "answer": "Ascending" },
        { "question": "Which command is used to remove a table from a database?", "options": ["DELETE TABLE", "DROP TABLE", "CLEAR TABLE", "REMOVE TABLE"], "answer": "DROP TABLE" },
        { "question": "How can you prevent SQL injection attacks?", "options": ["By escaping characters", "By using dynamic SQL", "By using prepared statements", "None of the above"], "answer": "By using prepared statements" },
        { "question": "Which SQL statement is used to retrieve data from a database?", "options": ["RETRIEVE", "GET", "SELECT", "FETCH"], "answer": "SELECT" },
        { "question": "What does the JOIN clause do?", "options": ["Combines rows from two or more tables", "Filters rows", "None of the above", "Sorts data"], "answer": "Combines rows from two or more tables" },
        { "question": "Which type of JOIN returns all records from both tables, even if there is no match?", "options": ["LEFT JOIN", "INNER JOIN", "OUTER JOIN", "RIGHT JOIN"], "answer": "OUTER JOIN" },
        { "question": "What is a primary key?", "options": ["A unique identifier for a table", "None of the above", "A key used to join tables", "A foreign key"], "answer": "A unique identifier for a table" },
        { "question": "Which SQL statement is used to create a view?", "options": ["VIEW CREATE", "NEW VIEW", "CREATE VIEW", "MAKE VIEW"], "answer": "CREATE VIEW" },
        { "question": "What does the term 'normalization' refer to in databases?", "options": ["None of the above", "Organizing data to reduce redundancy", "Creating backups", "Adding data to a database"], "answer": "Organizing data to reduce redundancy" },
        { "question": "What does the term 'foreign key' refer to?", "options": ["None of the above", "A primary key", "A key from another table", "A unique key"], "answer": "A key from another table" },
        { "question": "Which command is used to save changes in a transaction?", "options": ["COMMIT", "END", "SAVE", "FINISH"], "answer": "COMMIT" },
        { "question": "Which SQL function is used to find the highest value in a column?", "options": ["MAX()", "HIGHEST()", "TOP()", "GREATER()"], "answer": "MAX()" },
        { "question": "What is the purpose of the LIMIT clause?", "options": ["To filter data", "To restrict the number of rows returned", "To sort results", "To join tables"], "answer": "To restrict the number of rows returned" },
        { "question": "Which command is used to create a database?", "options": ["CREATE DATABASE", "NEW DATABASE", "DATABASE CREATE", "MAKE DATABASE"], "answer": "CREATE DATABASE" },
        { "question": "How do you change a value in a specific column of a table?", "options": ["CHANGE", "SET", "UPDATE", "MODIFY"], "answer": "UPDATE" },
        { "question": "Which keyword is used to add constraints to a table?", "options": ["ADD", "RESTRICT", "CONSTRAINT", "LIMIT"], "answer": "CONSTRAINT" },
        { "question": "Which of the following is NOT a SQL data type?", "options": ["VARCHAR", "INTEGER", "FLOAT", "TEXTFIELD"], "answer": "TEXTFIELD" },
        { "question": "What is the purpose of the HAVING clause?", "options": ["To filter groups", "To filter rows", "To join tables", "To sort data"], "answer": "To filter groups" },
        { "question": "How do you create an index on a table?", "options": ["CREATE INDEX", "ADD INDEX", "NEW INDEX", "INDEX TABLE"], "answer": "CREATE INDEX" },
        { "question": "Which SQL statement is used to retrieve unique values?", "options": ["SELECT UNIQUE", "SELECT DISTINCT", "SELECT DIFFERENT", "SELECT SPECIAL"], "answer": "SELECT DISTINCT" },
        { "question": "Which operator is used to search for a specified pattern in a column?", "options": ["FIND", "SEARCH", "LIKE", "MATCH"], "answer": "LIKE" },
        { "question": "What does the term 'data integrity' refer to?", "options": ["None of the above", "Speed of data retrieval", "Data storage", "Accuracy and consistency of data"], "answer": "Accuracy and consistency of data" },
        { "question": "What does the function ROUND() do?", "options": ["Rounds a number to the nearest integer", "Returns the average", "Finds the maximum", "None of the above"], "answer": "Rounds a number to the nearest integer" },
        { "question": "Which clause is used to specify the columns to be returned?", "options": ["RETURN", "SHOW", "SELECT", "DISPLAY"], "answer": "SELECT" },
        { "question": "What is a subquery?", "options": ["A special type of join", "A grouped query", "None of the above", "A query within another query"], "answer": "A query within another query" },
        { "question": "Which SQL function is used to concatenate strings?", "options": ["MERGE()", "CONCAT()", "APPEND()", "JOIN()"], "answer": "CONCAT()" },
        { "question": "Which command is used to start a transaction?", "options": ["OPEN", "NEW", "BEGIN", "START"], "answer": "BEGIN" },
        { "question": "What is a schema in SQL?", "options": ["None of the above", "A structure that contains objects", "A command", "A query type"], "answer": "A structure that contains objects" },
        { "question": "Which SQL statement is used to change the structure of a table?", "options": ["ALTER", "CHANGE", "UPDATE", "MODIFY"], "answer": "ALTER" },
        { "question": "What does the UNION operator do?", "options": ["None of the above", "Combines the result sets of two or more SELECT statements", "Sorts results", "Filters data"], "answer": "Combines the result sets of two or more SELECT statements" },
        { "question": "What is the purpose of the CREATE TABLE statement?", "options": ["None of the above", "To define a new table", "To remove a table", "To update a table"], "answer": "To define a new table" },
        { "question": "Which SQL statement is used to retrieve data from multiple tables?", "options": ["JOIN", "COMBINE", "MERGE", "SELECT"], "answer": "JOIN" },
        { "question": "What does the term 'data warehouse' refer to?", "options": ["A table structure", "A type of database", "None of the above", "A system used for reporting and data analysis"], "answer": "A system used for reporting and data analysis" },
        { "question": "Which SQL function is used to find the lowest value in a column?", "options": ["LOWEST()", "MIN()", "LEAST()", "BOTTOM()"], "answer": "MIN()" },
        { "question": "What does the term 'transaction' refer to in SQL?", "options": ["None of the above", "A single operation", "A type of database", "A sequence of operations performed as a single unit"], "answer": "A sequence of operations performed as a single unit" },
        { "question": "What does the acronym ACID stand for in database management?", "options": ["Atomicity, Clarity, Isolation, Durability", "Accuracy, Consistency, Isolation, Durability", "Atomicity, Consistency, Isolation, Durability", "None of the above"], "answer": "Atomicity, Consistency, Isolation, Durability" }
    ],
    
    CSS: [
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
        { question: "Which HTML attribute is used to define inline styles?", options: ["style", "class", "styles", "font"], answer: "style" },
        { question: "Which property is used to change the background color in CSS?", options: ["color", "background-color", "bgcolor", "bg-color"], answer: "background-color" },
        { question: "Which CSS property is used to change the text color of an element?", options: ["text-color", "color", "font-color", "text-style"], answer: "color" },
        { question: "How do you make text bold in CSS?", options: ["font-weight: bold;", "text-weight: bold;", "font-style: bold;", "font: bold;"], answer: "font-weight: bold;" },
        { question: "How do you create a comment in CSS?", options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"], answer: "/* comment */" },
        { question: "Which property is used to change the font size?", options: ["font-size", "text-size", "size", "font-style"], answer: "font-size" },
        { question: "Which property is used to set the spacing between lines of text?", options: ["line-spacing", "line-height", "spacing", "text-spacing"], answer: "line-height" },
        { question: "How do you select an element with id 'header' in CSS?", options: ["#header", ".header", "header", "id:header"], answer: "#header" },
        { question: "How do you select all elements of class 'intro' in CSS?", options: [".intro", "#intro", "intro", "class=intro"], answer: ".intro" },
        { question: "Which property is used to change the font of an element?", options: ["font-family", "font-style", "font-weight", "font"], answer: "font-family" },
        { question: "How do you make a list with no bullets?", options: ["list-style-type: none;", "list-type: none;", "bullet-style: none;", "list-style: no-bullet;"], answer: "list-style-type: none;" },
        { question: "Which CSS property is used to make text italic?", options: ["font-style: italic;", "text-style: italic;", "font-weight: italic;", "text-decoration: italic;"], answer: "font-style: italic;" },
        { question: "Which property is used to change the left margin of an element?", options: ["margin-left", "padding-left", "left-margin", "indent"], answer: "margin-left" },
        { question: "What is the default value of the position property?", options: ["static", "relative", "absolute", "fixed"], answer: "static" },
        { question: "How do you apply a border with a width of 1px, solid style, and black color?", options: ["border: 1px solid black;", "border-width: 1px solid black;", "border: black solid 1px;", "border-style: solid black 1px;"], answer: "border: 1px solid black;" },
        { question: "How do you make an element take up the full width of its container?", options: ["width: 100%;", "full-width: true;", "width: auto;", "container-width: 100%;"], answer: "width: 100%;" },
        { question: "Which CSS property controls the text size?", options: ["font-size", "text-size", "font", "size"], answer: "font-size" },
        { question: "Which CSS property controls the text alignment?", options: ["text-align", "align", "alignment", "text-align"], answer: "text-align" },
        { question: "How do you make text uppercased in CSS?", options: ["text-transform: uppercase;", "text-case: uppercase;", "font-transform: uppercase;", "transform: uppercase;"], answer: "text-transform: uppercase;" },
        { question: "Which property is used to add space between the border and the content?", options: ["padding", "margin", "border-spacing", "space-between"], answer: "padding" },
        { question: "Which property is used to add space between elements?", options: ["margin", "padding", "border-spacing", "space"], answer: "margin" },
        { question: "Which property is used to change the text color of an h1 element?", options: ["color", "text-color", "font-color", "h1-color"], answer: "color" },
        { question: "How do you make the background image repeat only horizontally?", options: ["background-repeat: repeat-x;", "background-repeat: horizontal;", "background-position: x;", "background-repeat-x: true;"], answer: "background-repeat: repeat-x;" },
        { question: "Which CSS property is used to set the background image?", options: ["background-image", "background", "image", "background-img"], answer: "background-image" },
        { question: "How do you add a shadow to an element in CSS?", options: ["box-shadow", "shadow", "element-shadow", "box-shadow-effect"], answer: "box-shadow" },
        { question: "How do you center an element horizontally with margin?", options: ["margin: 0 auto;", "margin: auto;", "center-margin;", "auto-margin: horizontal;"], answer: "margin: 0 auto;" },
        { question: "Which property is used to make a container a flex container?", options: ["display: flex;", "flex: container;", "container-flex;", "flex-display: true;"], answer: "display: flex;" },
        { question: "Which CSS property is used to control the overflow of content?", options: ["overflow", "scroll", "clip", "content-overflow"], answer: "overflow" },
        { question: "How do you set the width of an element to be proportional to its container?", options: ["width: 50%;", "width: half;", "container-width: 50%;", "auto-width: 50%;"], answer: "width: 50%;" },
        { question: "Which property is used to round the corners of an element?", options: ["border-radius", "corner-radius", "round-corner", "border-style"], answer: "border-radius" },
        { question: "How do you apply styles only when the user hovers over an element?", options: ["element:hover", "element:focus", "element:active", "element:clicked"], answer: "element:hover" },
        { question: "What is the correct syntax for applying multiple background images?", options: ["background-image: url(image1.jpg), url(image2.jpg);", "background: image1.jpg, image2.jpg;", "background: [image1.jpg, image2.jpg];", "background-image: [image1.jpg] [image2.jpg];"], answer: "background-image: url(image1.jpg), url(image2.jpg);" },
        { question: "Which CSS property is used to make a text underline?", options: ["text-decoration: underline;", "font-style: underline;", "text-style: underline;", "text-transform: underline;"], answer: "text-decoration: underline;" },
        { question: "How do you select every element inside a div?", options: ["div *", "div + *", "div:child", "div all"], answer: "div *" },
        { question: "Which property is used to control the transparency of an element?", options: ["opacity", "visibility", "transparent", "transparency"], answer: "opacity" },
        { question: "What value is used to fully hide an element with the 'display' property?", options: ["none", "hidden", "zero", "block"], answer: "none" },
        { question: "Which property is used to change the order of flex items in a flex container?", options: ["order", "flex-order", "item-order", "reorder"], answer: "order" },
        { question: "Which CSS property specifies the z-index?", options: ["z-index", "z-layer", "layer-index", "stacking-index"], answer: "z-index" },
        { question: "How do you create a grid layout in CSS?", options: ["display: grid;", "grid-layout: true;", "grid: layout;", "container-grid: on;"], answer: "display: grid;" },
        { question: "Which property is used to control the visibility of an element?", options: ["visibility", "display", "show", "opacity"], answer: "visibility" },
        { question: "What is the initial value of the 'flex-direction' property?", options: ["row", "column", "row-reverse", "column-reverse"], answer: "row" },
        { question: "Which property is used to create space between the flex items in a flex container?", options: ["justify-content", "align-content", "space-between", "flex-space"], answer: "justify-content" },
        { question: "Which CSS property is used to animate transitions between styles?", options: ["transition", "animation", "keyframes", "motion"], answer: "transition" },
        { question: "Which property is used to control the speed of an animation?", options: ["animation-duration", "transition-speed", "animation-speed", "duration"], answer: "animation-duration" },
        { question: "How do you control the alignment of flex items along the main axis in a flex container?", options: ["justify-content", "align-items", "align-content", "flex-alignment"], answer: "justify-content" },
        { question: "Which property is used to make an element not draggable?", options: ["user-select: none;", "drag: false;", "draggable: no;", "dragging: none;"], answer: "user-select: none;" },
        { question: "What is the default display value of a block element?", options: ["block", "inline", "none", "flex"], answer: "block" },
        { question: "How do you make a hyperlink in CSS that appears as a button?", options: ["a { display: inline-block; }", "a { display: button; }", "a { button-style: true; }", "a { style: button; }"], answer: "a { display: inline-block; }" },
        { question: "Which property is used to apply a 3D transformation to an element?", options: ["transform", "3d-transform", "3d", "transition"], answer: "transform" },
        { question: "Which property is used to specify the duration of a CSS transition?", options: ["transition-duration", "duration", "timing", "animation-duration"], answer: "transition-duration" },
        { question: "What is the default value of the 'flex-wrap' property?", options: ["nowrap", "wrap", "wrap-reverse", "inherit"], answer: "nowrap" },
        { question: "How do you set the width of an element to 100% of its parent container?", options: ["width: 100%;", "width: full;", "parent-width: 100%;", "auto-width: full;"], answer: "width: 100%;" },
        { question: "Which property is used to make text lowercase in CSS?", options: ["text-transform: lowercase;", "font-transform: lowercase;", "text-style: lowercase;", "font-style: lowercase;"], answer: "text-transform: lowercase;" },
        { question: "How do you make a CSS animation loop infinitely?", options: ["animation-iteration-count: infinite;", "animation-loop: true;", "loop-animation: on;", "animation-count: forever;"], answer: "animation-iteration-count: infinite;" },
        { question: "Which property is used to control the alignment of grid items?", options: ["align-items", "grid-align", "item-align", "align-grid"], answer: "align-items" },
        { question: "Which property is used to create a keyframe animation?", options: ["@keyframes", "@frames", "@animation", "@motion"], answer: "@keyframes" },
        { question: "What is the default display value of a table element?", options: ["table", "block", "inline", "inline-block"], answer: "table" },
        { question: "Which CSS property is used to clip an image?", options: ["clip", "image-clip", "clip-path", "path-clip"], answer: "clip-path" },
        { question: "Which value of the 'position' property is used to position an element relative to its nearest positioned ancestor?", options: ["absolute", "relative", "static", "fixed"], answer: "absolute" },
        { question: "Which CSS property is used to apply a filter to an image?", options: ["filter", "image-filter", "image-style", "filter-effect"], answer: "filter" },
        { question: "How do you change the space between letters in CSS?", options: ["letter-spacing", "text-spacing", "word-spacing", "line-spacing"], answer: "letter-spacing" },
        { question: "Which property is used to make the background image fixed?", options: ["background-attachment", "background-fixed", "image-attachment", "background-position"], answer: "background-attachment" }
    ],
    Python: [
        { question: "What is the output of: print(2 + 3)", options: ["2", "5", "23", "Error"], answer: "5" },
        { question: "Which of the following is not a Python feature?", options: ["Dynamic typing", "Memory management", "Use of pointers", "Interpreted"], answer: "Use of pointers" },
        { question: "Which data type is used to create a variable that should store text?", options: ["str", "int", "char", "boolean"], answer: "str" },
        { question: "Which method is used to find the length of a string in Python?", options: ["length()", "getSize()", "len()", "size()"], answer: "len()" },
        { question: "Which of the following is a valid keyword in Python?", options: ["include", "import", "using", "define"], answer: "import" },
        { question: "Which keyword is used to define a constant in Python?", options: ["constant", "final", "const", "None"], answer: "None" },
        { question: "What is the output of: print('A' + 'B')", options: ["65", "66", "AB", "Error"], answer: "AB" },
        { question: "Which exception is raised when dividing by zero in Python?", options: ["NullPointerException", "ZeroDivisionError", "ValueError", "IndexError"], answer: "ZeroDivisionError" },
        { question: "What is the size of an int data type in Python?", options: ["8 bits", "16 bits", "32 bits", "Variable size"], answer: "Variable size" },
        { question: "Which of the following is a valid constructor for a class 'Person'?", options: ["def Person(): pass", "void Person(): pass", "def __init__(self): pass", "Person(void): pass"], answer: "def __init__(self): pass" },
        { question: "Which of the following is the default value of a boolean variable?", options: ["null", "true", "false", "No default value"], answer: "false" },
        { question: "Which method is used to start a thread in Python?", options: ["run()", "execute()", "start()", "init()"], answer: "start()" },
        { question: "Which of the following is used for inheritance in Python?", options: ["extends", "inherits", "class", "def"], answer: "class" },
        { question: "Which keyword is used to prevent a class from being subclassed?", options: ["static", "final", "private", "abstract"], answer: "final" },
        { question: "Which of the following is not a primitive data type in Python?", options: ["int", "float", "boolean", "str"], answer: "str" },
        { question: "Which of the following is a correct syntax to declare a variable in Python?", options: ["x = 10", "int x = 10", "var x = 10", "10 = x"], answer: "x = 10" },
        { question: "Which operator is used to compare two values in Python?", options: ["==", "=", "!=", "==="], answer: "==" },
        { question: "Which loop is guaranteed to execute at least once?", options: ["for loop", "while loop", "do-while loop", "Infinite loop"], answer: "do-while loop" },
        { question: "Which of the following is not a valid access modifier in Python?", options: ["private", "protected", "public", "void"], answer: "void" },
        { question: "What is the default value of a local variable in Python?", options: ["null", "0", "false", "No default value"], answer: "No default value" },
        { question: "Which method is used to terminate a thread in Python?", options: ["terminate()", "stop()", "destroy()", "kill()"], answer: "stop()" },
        { question: "What is the output of: print(10 % 3)", options: ["0", "1", "2", "3"], answer: "1" },
        { question: "Which of the following is true about Python?", options: ["Python is platform-dependent", "Python supports multiple inheritance", "Python supports operator overloading", "Python is platform-independent"], answer: "Python is platform-independent" },
        { question: "Which function is used to convert a string into an integer in Python?", options: ["int()", "parseInt()", "str.toInt()", "String.valueOf()"], answer: "int()" },
        { question: "What is the default value of a static variable in Python?", options: ["0", "null", "false", "Depends on the variable type"], answer: "Depends on the variable type" },
        { question: "Which of the following loops in Python runs indefinitely?", options: ["for", "while", "do-while", "Infinite loop"], answer: "while" },
        { question: "What is the output of: print(list(range(5)))", options: ["0 1 2 3 4", "[0, 1, 2, 3, 4]", "0, 1, 2, 3, 4", "[0 1 2 3 4]"], answer: "[0, 1, 2, 3, 4]" },
        { question: "Which method is used to convert a string to uppercase in Python?", options: ["toUppercase()", "upper()", "toUpperCase()", "stringUpper()"], answer: "upper()" },
        { question: "What is the output of: print('Hello'.replace('l', ''))", options: ["Helo", "Heo", "Hello", "Error"], answer: "Heo" },
        { question: "Which of the following is a mutable data type in Python?", options: ["list", "tuple", "str", "int"], answer: "list" },
        { question: "What is the output of: print(len([1, 2, 3]))", options: ["2", "3", "1", "Error"], answer: "3" },
        { question: "Which operator is used for membership testing in Python?", options: ["in", "is", "==", "contains"], answer: "in" },
        { question: "What is the correct syntax to define a function in Python?", options: ["def functionName():", "functionName def():", "function functionName():", "def: functionName()"], answer: "def functionName():" },
        { question: "Which of the following is not a valid list method in Python?", options: ["append()", "insert()", "add()", "remove()"], answer: "add()" },
        { question: "What will be the output of: print([1, 2] + [3, 4])", options: ["[1, 2, 3, 4]", "[4, 3, 2, 1]", "[1, 2] + [3, 4]", "Error"], answer: "[1, 2, 3, 4]" },
        { question: "Which of the following is used to handle exceptions in Python?", options: ["try-catch", "if-else", "switch-case", "except"], answer: "try-catch" },
        { question: "Which of the following is not a reserved keyword in Python?", options: ["goto", "break", "global", "switch"], answer: "goto" },
        { question: "What is the return type of the function len() in Python?", options: ["int", "boolean", "None", "float"], answer: "int" },
        { question: "Which of the following is the base class for all classes in Python?", options: ["Base", "Object", "Main", "System"], answer: "Object" },
        { question: "What is the output of: print('Hello'[0])", options: ["H", "e", "Hello", "Error"], answer: "H" },
        { question: "Which of the following is not a Python built-in data type?", options: ["list", "dict", "array", "set"], answer: "array" },
        { question: "What is the output of: print(10 // 3)", options: ["3", "3.33", "4", "Error"], answer: "3" },
        { question: "Which method can be used to find the highest value of x and y?", options: ["max(x, y)", "highest(x, y)", "Math.max(x, y)", "maxValue(x, y)"], answer: "max(x, y)" },
        { question: "What is the output of: print(type([]))", options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"], answer: "<class 'list'>" },
        { question: "Which of the following is not a valid syntax for list comprehension?", options: ["[x for x in range(5)]", "[x if x > 0 for x in range(5)]", "[x*2 for x in range(5)]", "[x for x in range(5) if x > 0]"], answer: "[x if x > 0 for x in range(5)]" },
        { question:"Which function is used to read a file in Python?", options: ["read()", "open()", "readfile()", "getFile()"], answer: "open()" },
        { question: "What is the output of: print(bool(0))", options: ["True", "False", "1", "Error"], answer: "False" },
        { question: "Which of the following is a tuple?", options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"], answer: "(1, 2, 3)" },
        { question: "What is the correct way to start a Python script?", options: ["#!python", "#!/usr/bin/python", "#python", "##python"], answer: "#!/usr/bin/python" },
        { question: "Which of the following is not a valid way to create a set in Python?", options: ["set([1, 2, 3])", "{1, 2, 3}", "set{1, 2, 3}", "set()"], answer: "set{1, 2, 3}" },
        { question: "What will be the output of: print({1, 2} | {2, 3})", options: ["{1, 2, 3}", "{1, 2}", "{2, 3}", "Error"], answer: "{1, 2, 3}" },
        { question: "What is the output of: print('Hello' * 3)", options: ["HelloHelloHello", "Hello3", "Error", "Hello Hello Hello"], answer: "HelloHelloHello" },
        { question: "Which of the following functions can be used to convert a string into a float?", options: ["float()", "stringToFloat()", "convertToFloat()", "strToFloat()"], answer: "float()" },
        { question: "Which keyword is used to create a new class in Python?", options: ["class", "def", "new", "create"], answer: "class" },
        { question: "Which operator is used to check for identity in Python?", options: ["is", "==", "equals", "identical"], answer: "is" },
        { question: "What will be the output of: print('A' in 'ABC')", options: ["True", "False", "1", "0"], answer: "True" },
        { question: "Which of the following is the correct syntax for defining a lambda function?", options: ["lambda x: x + 1", "def lambda x: x + 1", "lambda: x + 1", "x: lambda + 1"], answer: "lambda x: x + 1" },
        { question: "What will be the output of: print('Hello World'.split())", options: ["['Hello', 'World']", "Hello World", "['Hello World']", "Error"], answer: "['Hello', 'World']" },
    ],
    
    RandomTechnical:  [
        { "question": "What does PHP stand for?", "options": ["Preprocessor Hypertext PHP", "Personal Home Page", "PHP Hypertext Preprocessor", "Private Hypertext Processor"], "answer": "PHP Hypertext Preprocessor" },
        { "question": "Which framework is commonly used with Python for web development?", "options": ["Laravel", "Django", "Ruby on Rails", "Express"], "answer": "Django" },
        { "question": "What is the primary language used in Node.js?", "options": ["JavaScript", "Ruby", "Python", "C#"], "answer": "JavaScript" },
        { "question": "Which language is known for its performance in building scalable applications?", "options": ["Java", "Go", "Python", "PHP"], "answer": "Go" },
        { "question": "Which of the following is a feature of Ruby on Rails?", "options": ["Convention over Configuration", "Performance", "Strict Typing", "None of the above"], "answer": "Convention over Configuration" },
        { "question": "Which command is used to create a new database in SQL?", "options": ["NEW DATABASE", "DATABASE CREATE", "CREATE DATABASE", "MAKE DATABASE"], "answer": "CREATE DATABASE" },
        { "question": "What does REST stand for in web services?", "options": ["Reliable State Transfer", "Representational State Transfer", "Resource State Transfer", "None of the above"], "answer": "Representational State Transfer" },
        { "question": "Which HTTP method is used to update an existing resource?", "options": ["PUT", "POST", "GET", "DELETE"], "answer": "PUT" },
        { "question": "What is the main advantage of using an ORM?", "options": ["Better security", "Reduced complexity", "Simplified database interactions", "Faster execution"], "answer": "Simplified database interactions" },
        { "question": "Which framework is often used with the .NET ecosystem?", "options": ["Django", "Laravel", "Spring", "Ruby on Rails"], "answer": "Spring" },
        { "question": "What is the primary purpose of middleware in web applications?", "options": ["To connect different applications", "To manage databases", "To handle user authentication", "To serve static files"], "answer": "To connect different applications" },
        { "question": "Which language is primarily used for building Android applications and server-side applications?", "options": ["Ruby", "Java", "C#", "Python"], "answer": "Java" },
        { "question": "Which of the following is a popular NoSQL database?", "options": ["MySQL", "PostgreSQL", "MongoDB", "SQLite"], "answer": "MongoDB" },
        { "question": "What does the acronym ACID stand for in database management?", "options": ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Clarity, Isolation, Durability", "Atomicity, Clarity, Isolation, Durability", "None of the above"], "answer": "Atomicity, Consistency, Isolation, Durability" },
        { "question": "In Node.js, what package manager is used for managing dependencies?", "options": ["pip", "npm", "composer", "bundler"], "answer": "npm" },
        { "question": "Which language is known for its strong concurrency support?", "options": ["Java", "Go", "Python", "C#"], "answer": "Go" },
        { "question": "What is the main purpose of the Express framework?", "options": ["Database management", "Building mobile applications", "Creating web servers and APIs", "Frontend development"], "answer": "Creating web servers and APIs" },
        { "question": "Which of the following languages is commonly used for server-side development?", "options": ["HTML", "CSS", "JavaScript", "SQL"], "answer": "JavaScript" },
        { "question": "What does JSON stand for?", "options": ["JavaScript Online Notation", "JavaScript Object Notation", "JavaScript Oriented Notation", "None of the above"], "answer": "JavaScript Object Notation" },
        { "question": "Which of the following is a feature of the Go programming language?", "options": ["Garbage collection", "Multi-threading", "Object-oriented", "None of the above"], "answer": "Garbage collection" },
        { "question": "Which command is used to run a Node.js application?", "options": ["node run app.js", "npm start", "node app.js", "run node app.js"], "answer": "node app.js" },
        { "question": "What is the primary role of a backend developer?", "options": ["Designing user interfaces", "Writing business logic", "Managing databases", "Both B and C"], "answer": "Both B and C" },
        { "question": "What is the main function of a web server?", "options": ["Serve static files only", "Host databases", "Process client requests and deliver responses", "Run client-side code"], "answer": "Process client requests and deliver responses" },
        { "question": "Which language is typically used for scripting in web development?", "options": ["Ruby", "Python", "PHP", "Java"], "answer": "PHP" },
        { "question": "What does the `async` keyword do in JavaScript?", "options": ["Defines a synchronous function", "Creates a promise", "Defines an asynchronous function", "None of the above"], "answer": "Defines an asynchronous function" },
        { "question": "Which HTTP method is used to retrieve data from a server?", "options": ["POST", "GET", "PUT", "DELETE"], "answer": "GET" },
        { "question": "What is the purpose of a load balancer?", "options": ["Hosting applications", "Serving static content", "Distributing traffic across multiple servers", "Managing databases"], "answer": "Distributing traffic across multiple servers" },
        { "question": "Which of the following is a commonly used web framework for PHP?", "options": ["Django", "Flask", "Laravel", "Spring"], "answer": "Laravel" },
        { "question": "Which SQL command is used to delete a table?", "options": ["REMOVE TABLE", "DELETE TABLE", "DROP TABLE", "CLEAR TABLE"], "answer": "DROP TABLE" },
        { "question": "What does the term 'containerization' refer to?", "options": ["Running applications in isolated environments", "Managing databases", "Serving static files", "None of the above"], "answer": "Running applications in isolated environments" },
        { "question": "What is the purpose of the `docker` command?", "options": ["To manage containerized applications", "To run web servers", "To build databases", "To write code"], "answer": "To manage containerized applications" },
        { "question": "What does the `console.log()` function do in JavaScript?", "options": ["Creates a dialog box", "Logs data to the console", "Writes to a file", "None of the above"], "answer": "Logs data to the console" },
        { "question": "Which language is known for its elegant syntax and is often used for web applications?", "options": ["Python", "JavaScript", "Ruby", "PHP"], "answer": "Ruby" },
        { "question": "Which database system is often used with the Ruby on Rails framework?", "options": ["SQLite", "PostgreSQL", "MySQL", "All of the above"], "answer": "All of the above" },
        { "question": "What does REST stand for in web services?", "options": ["Representational State Transfer", "Resource State Transfer", "Reliable State Transfer", "None of the above"], "answer": "Representational State Transfer" },
        { "question": "Which of the following is a commonly used web framework for Python?", "options": ["Django", "Laravel", "Express", "Ruby on Rails"], "answer": "Django" },
        { "question": "What is the purpose of middleware in a web application?", "options": ["To handle user authentication", "To connect different applications", "To manage databases", "To serve static files"], "answer": "To connect different applications" },
        { "question": "What is the primary language used in the .NET ecosystem?", "options": ["JavaScript", "C#", "Ruby", "Python"], "answer": "C#" },
        { "question": "What is the main advantage of using an ORM?", "options": ["Better security", "Reduced complexity", "Simplified database interactions", "Faster execution"], "answer": "Simplified database interactions" },
        { "question": "Which HTTP method is used to create a new resource?", "options": ["PUT", "GET", "POST", "DELETE"], "answer": "POST" },
        { "question": "Which command is used to create a new database in SQL?", "options": ["CREATE DATABASE", "NEW DATABASE", "DATABASE CREATE", "MAKE DATABASE"], "answer": "CREATE DATABASE" },
        { "question": "What is the function of a web server?", "options": ["To process client requests", "To store files", "To host a database", "All of the above"], "answer": "All of the above" },
        { "question": "Which of the following is a NoSQL database?", "options": ["MySQL", "PostgreSQL", "MongoDB", "SQLite"], "answer": "MongoDB" },
        { "question": "What does the acronym ACID stand for in database transactions?", "options": ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Clarity, Isolation, Durability", "Atomicity, Clarity, Integrity, Durability", "None of the above"], "answer": "Atomicity, Consistency, Isolation, Durability" },
        { "question": "Which framework is commonly used for building web applications in Java?", "options": ["Django", "Ruby on Rails", "Spring", "Flask"], "answer": "Spring" },
        { "question": "What is the primary purpose of the `async` keyword in JavaScript?", "options": ["To define a synchronous function", "To create a promise", "To define an asynchronous function", "None of the above"], "answer": "To define an asynchronous function" },
        { "question": "What does JSON stand for?", "options": ["JavaScript Object Notation", "JavaScript Online Notation", "JavaScript Organized Notation", "None of the above"], "answer": "JavaScript Object Notation" },
        { "question": "Which command is used to run a Node.js application?", "options": ["node run app.js", "npm start", "node app.js", "run node app.js"], "answer": "node app.js" },
        { "question": "What is the main role of a backend developer?", "options": ["Designing user interfaces", "Writing business logic", "Managing databases", "Both B and C"], "answer": "Both B and C" },
        { "question": "What does the term 'containerization' refer to?", "options": ["Running applications in isolated environments", "Managing databases", "Serving static files", "None of the above"], "answer": "Running applications in isolated environments" },
        { "question": "Which language is primarily used for server-side development?", "options": ["HTML", "CSS", "JavaScript", "SQL"], "answer": "JavaScript" },
        { "question": "What is the purpose of a load balancer?", "options": ["Hosting applications", "Serving static content", "Distributing traffic across multiple servers", "Managing databases"], "answer": "Distributing traffic across multiple servers" },
        { "question": "Which SQL command is used to delete a table?", "options": ["REMOVE TABLE", "DELETE TABLE", "DROP TABLE", "CLEAR TABLE"], "answer": "DROP TABLE" },
        { "question": "What is the primary function of a database index?", "options": ["To speed up data retrieval", "To ensure data integrity", "To create backups", "To store data"], "answer": "To speed up data retrieval" },
        { "question": "Which programming language is known for its concurrency features?", "options": ["Python", "Java", "Go", "C#"], "answer": "Go" },
        { "question": "What is a primary key in a database?", "options": ["A unique identifier for a record", "A foreign key", "A type of index", "None of the above"], "answer": "A unique identifier for a record" },
        { "question": "Which of the following is a JavaScript runtime built on Chrome's V8 engine?", "options": ["Django", "Node.js", "Ruby on Rails", "Flask"], "answer": "Node.js" },
        { "question": "What is the main function of the `git` command?", "options": ["To manage dependencies", "To track changes in code", "To serve web applications", "To connect to databases"], "answer": "To track changes in code" },
        { "question": "Which framework is often used for building RESTful APIs in Node.js?", "options": ["Django", "Express", "Flask", "Ruby on Rails"], "answer": "Express" },
        { "question": "What is the purpose of a session in web applications?", "options": ["To store user data temporarily", "To log errors", "To manage database connections", "None of the above"], "answer": "To store user data temporarily" },
        { "question": "Which SQL statement is used to update existing records in a table?", "options": ["UPDATE", "MODIFY", "CHANGE", "SET"], "answer": "UPDATE" },
        { "question": "What does the `SELECT` statement do in SQL?", "options": ["Inserts data", "Updates data", "Retrieves data", "Deletes data"], "answer": "Retrieves data" },
        { "question": "What is a web API?", "options": ["A protocol for building web applications", "A set of rules for data exchange", "A way to serve static content", "None of the above"], "answer": "A set of rules for data exchange" },
        { "question": "Which framework is used for building web applications in Ruby?", "options": ["Django", "Express", "Ruby on Rails", "Flask"], "answer": "Ruby on Rails" },
        { "question": "Which command is used to install a package in npm?", "options": ["npm install", "npm get", "npm start", "npm run"], "answer": "npm install" },
        { "question": "What does the `DELETE` HTTP method do?", "options": ["Removes a resource", "Updates a resource", "Retrieves a resource", "Creates a resource"], "answer": "Removes a resource" },
        { "question": "What is a SQL injection attack?", "options": ["A way to optimize queries", "An attack that involves inserting malicious SQL", "A method for database backup", "None of the above"], "answer": "An attack that involves inserting malicious SQL" },
        { "question": "Which of the following is a popular database management system?", "options": ["Apache", "MySQL", "Django", "Node.js"], "answer": "MySQL" },
        { "question": "What is the purpose of the `require` function in Node.js?", "options": ["To import modules", "To define variables", "To create functions", "None of the above"], "answer": "To import modules" },
        { "question": "What is a foreign key?", "options": ["A primary key in another table", "An index on a table", "A column that allows null values", "None of the above"], "answer": "A primary key in another table" },
        { "question": "What is the difference between `==` and `===` in JavaScript?", "options": ["`==` compares values, `===` compares values and types", "`==` compares types, `===` compares values", "There is no difference", "None of the above"], "answer": "`==` compares values, `===` compares values and types" },
        { "question": "Which command is used to create a new table in SQL?", "options": ["CREATE TABLE", "NEW TABLE", "TABLE CREATE", "ADD TABLE"], "answer": "CREATE TABLE" },
        { "question": "What is the purpose of `fetch` in JavaScript?", "options": ["To send HTTP requests", "To retrieve data from a database", "To manipulate the DOM", "None of the above"], "answer": "To send HTTP requests" },
        { "question": "What is the main purpose of using sessions in web applications?", "options": ["To log errors", "To track user activity", "To store user data", "To manage database connections"], "answer": "To store user data" },
        { "question": "What is a binary tree?", "options": ["A tree data structure with at most two children", "A type of database", "A web service", "None of the above"], "answer": "A tree data structure with at most two children" },
        { "question": "What does the `push` method do in an array?", "options": ["Adds an element to the end", "Removes the last element", "Reverses the array", "None of the above"], "answer": "Adds an element to the end" },
        { "question": "Which command is used to remove a package in npm?", "options": ["npm remove", "npm uninstall", "npm delete", "npm purge"], "answer": "npm uninstall" },
        { "question": "What is the purpose of a reverse proxy?", "options": ["To cache content", "To route requests to different servers", "To encrypt data", "All of the above"], "answer": "All of the above" },
        { "question": "What does the term 'scalability' refer to?", "options": ["The ability to handle growth", "The process of optimizing code", "The speed of an application", "None of the above"], "answer": "The ability to handle growth" },
        { "question": "Which of the following is a widely-used language for backend development?", "options": ["HTML", "CSS", "Java", "JavaScript"], "answer": "Java" },
        { "question": "What is the main purpose of a content delivery network (CDN)?", "options": ["To store databases", "To deliver content faster", "To host applications", "None of the above"], "answer": "To deliver content faster" },
        { "question": "Which programming language is often used for data science and machine learning?", "options": ["Java", "Ruby", "Python", "C#"], "answer": "Python" },
        { "question": "What is the main role of a database administrator (DBA)?", "options": ["Writing application code", "Managing database security", "Designing user interfaces", "All of the above"], "answer": "Managing database security" },
        { "question": "What is a RESTful API?", "options": ["An API that follows REST principles", "A type of database", "A programming language", "None of the above"], "answer": "An API that follows REST principles" },
        { "question": "Which of the following is an example of a relational database?", "options": ["MongoDB", "MySQL", "Cassandra", "DynamoDB"], "answer": "MySQL" },
        { "question": "What does the `map` method do in JavaScript?", "options": ["Creates a new array with the results of calling a function on every element", "Removes elements from an array", "Reverses an array", "None of the above"], "answer": "Creates a new array with the results of calling a function on every element" },
        { "question": "What is the purpose of CORS in web applications?", "options": ["To manage user sessions", "To handle cross-origin requests", "To optimize database queries", "None of the above"], "answer": "To handle cross-origin requests" },
        { "question": "Which of the following is a popular PHP framework?", "options": ["Django", "Flask", "Laravel", "Ruby on Rails"], "answer": "Laravel" },
        { "question": "What is the primary function of a web service?", "options": ["To serve static content", "To process client requests", "To store files", "None of the above"], "answer": "To process client requests" },
        { "question": "What is an advantage of using cloud databases?", "options": ["Scalability", "Automatic backups", "Remote access", "All of the above"], "answer": "All of the above" },
        { "question": "Which HTTP method is idempotent?", "options": ["GET", "POST", "PUT", "Both A and C"], "answer": "Both A and C" },
        { "question": "What does the term 'microservices' refer to?", "options": ["A software architecture style", "A type of database", "A programming language", "None of the above"], "answer": "A software architecture style" },
        { "question": "What is the main purpose of a logging framework?", "options": ["To optimize performance", "To track application behavior", "To manage database connections", "None of the above"], "answer": "To track application behavior" },
        { "question": "What is the purpose of an API key?", "options": ["To authenticate users", "To encrypt data", "To track usage", "Both A and C"], "answer": "Both A and C" },
        { "question": "What is the purpose of the `return` statement in a function?", "options": ["To exit the function", "To send a value back", "To declare variables", "Both A and B"], "answer": "Both A and B" },
        { "question": "What does the term 'serverless' mean?", "options": ["No servers are involved", "The server management is handled by the cloud provider", "A type of database", "None of the above"], "answer": "The server management is handled by the cloud provider" },
        { "question": "Which of the following is a commonly used API architecture?", "options": ["REST", "SOAP", "GraphQL", "All of the above"], "answer": "All of the above" },
        { "question": "What is a queue in programming?", "options": ["A data structure for managing data", "A method for sorting data", "A type of database", "None of the above"], "answer": "A data structure for managing data" },
        { "question": "What does the `await` keyword do in JavaScript?", "options": ["Pauses the execution of an async function", "Defines an asynchronous function", "Creates a promise", "None of the above"], "answer": "Pauses the execution of an async function" },
        { "question": "What is the purpose of the `docker-compose` command?", "options": ["To manage Docker containers", "To deploy applications", "To build images", "All of the above"], "answer": "All of the above" },
        { "question": "Which of the following is a benefit of using TypeScript?", "options": ["Static typing", "Better error handling", "Improved code readability", "All of the above"], "answer": "All of the above" },
        { "question": "What does the term 'data normalization' refer to?", "options": ["Organizing data to reduce redundancy", "Storing data in the cloud", "Encrypting data", "None of the above"], "answer": "Organizing data to reduce redundancy" },
        { "question": "What is the primary purpose of a reverse proxy server?", "options": ["To encrypt data", "To improve performance and security", "To manage user sessions", "None of the above"], "answer": "To improve performance and security" },
        { "question": "Which command is used to stop a running Docker container?", "options": ["docker stop", "docker terminate", "docker exit", "docker end"], "answer": "docker stop" },
        { "question": "What does the `console.error()` function do in JavaScript?", "options": ["Logs errors to the console", "Logs information to the console", "Exits the application", "None of the above"], "answer": "Logs errors to the console" },
        { "question": "What is the main role of a system architect?", "options": ["Writing application code", "Designing software systems", "Managing databases", "All of the above"], "answer": "Designing software systems" },
        { "question": "Which of the following is a Python web framework?", "options": ["Django", "Laravel", "Spring", "Ruby on Rails"], "answer": "Django" },
        { "question": "What is the primary function of the `try...catch` statement in JavaScript?", "options": ["To handle exceptions", "To define functions", "To loop through arrays", "None of the above"], "answer": "To handle exceptions" },
        { "question": "What does the `404` status code indicate?", "options": ["OK", "Created", "Not Found", "Bad Request"], "answer": "Not Found" },
        { "question": "What is the purpose of a data model?", "options": ["To define the structure of data", "To manage databases", "To create user interfaces", "None of the above"], "answer": "To define the structure of data" },
        { "question": "Which of the following is a front-end framework?", "options": ["Django", "Flask", "React", "Ruby on Rails"], "answer": "React" },
        { "question": "What is the purpose of the `clone` method in JavaScript?", "options": ["To create a copy of an object", "To remove an object", "To define a function", "None of the above"], "answer": "To create a copy of an object" },
        { "question": "What does the term 'big O notation' refer to?", "options": ["A way to analyze the efficiency of algorithms", "A method for sorting data", "A type of database", "None of the above"], "answer": "A way to analyze the efficiency of algorithms" },
        { "question": "Which command is used to run a migration in Laravel?", "options": ["php artisan migrate", "laravel migrate", "php migrate", "artisan migrate"], "answer": "php artisan migrate" },
        { "question": "What is the purpose of caching in web applications?", "options": ["To speed up data retrieval", "To store backups", "To enhance security", "None of the above"], "answer": "To speed up data retrieval" },
        { "question": "What is the main advantage of using a virtual machine?", "options": ["Isolated environments", "Faster performance", "Easier management", "None of the above"], "answer": "Isolated environments" }
    ],
  LinearAlgebra: [
        { "question": "What is the result of the dot product of vectors (1, 2) and (3, 4)?", "options": ["11", "10", "7", "12"], "answer": "11" },
        { "question": "What is the cross product of vectors (1, 0, 0) and (0, 1, 0)?", "options": ["(0, 0, 1)", "(0, 1, 0)", "(1, 0, 0)", "(0, 0, 0)"], "answer": "(0, 0, 1)" },
        { "question": "Which of the following is a scalar quantity?", "options": ["Force", "Velocity", "Speed", "Acceleration"], "answer": "Speed" },
        { "question": "What is the determinant of the 2x2 matrix [[1, 2], [3, 4]]?", "options": ["-2", "0", "2", "1"], "answer": "-2" },
        { "question": "What is the inverse of the matrix [[1, 0], [0, 1]]?", "options": ["[[0, 1], [1, 0]]", "[[1, 0], [0, 1]]", "[[-1, 0], [0, -1]]", "[[1, -1], [-1, 1]]"], "answer": "[[1, 0], [0, 1]]" },
        { "question": "What is the eigenvalue of the matrix [[2, 0], [0, 3]]?", "options": ["2", "3", "Both 2 and 3", "Neither 2 nor 3"], "answer": "Both 2 and 3" },
        { "question": "Which of the following operations can be applied to a matrix?", "options": ["Division", "Addition", "Subtraction", "Scalar Multiplication"], "answer": "Scalar Multiplication" },
        { "question": "What is the rank of the matrix [[1, 2], [3, 4]]?", "options": ["0", "1", "2", "3"], "answer": "2" },
        { "question": "If A is a 2x2 matrix, which operation is valid?", "options": ["A + A", "A ÷ A", "A^A", "A mod A"], "answer": "A + A" },
        { "question": "What is the identity matrix for a 3x3 matrix?", "options": ["[[1, 1, 1], [1, 1, 1], [1, 1, 1]]", "[[1, 0, 0], [0, 1, 0], [0, 0, 1]]", "[[0, 1, 0], [1, 0, 1], [0, 1, 0]]", "[[0, 0, 1], [1, 1, 0], [1, 0, 0]]"], "answer": "[[1, 0, 0], [0, 1, 0], [0, 0, 1]]" },
        { "question": "What is the eigenvector of the matrix [[2, 0], [0, 3]] corresponding to the eigenvalue 2?", "options": ["[1, 0]", "[0, 1]", "[2, 1]", "[1, 2]"], "answer": "[1, 0]" },
        { "question": "What is the dot product of vectors (2, 3, 4) and (1, 0, -1)?", "options": ["-2", "0", "10", "9"], "answer": "2" },
        { "question": "Which of the following is a valid tensor operation?", "options": ["Tensor multiplication", "Tensor addition", "Tensor cross product", "Tensor subtraction"], "answer": "Tensor addition" },
        { "question": "Which of the following is a tensor?", "options": ["A scalar", "A matrix", "A vector", "All of the above"], "answer": "All of the above" },
        { "question": "What is the cross product of vectors (1, 2, 3) and (4, 5, 6)?", "options": ["(-3, 6, -3)", "(3, -6, 3)", "(0, 0, 0)", "(6, 3, -6)"], "answer": "(-3, 6, -3)" },
        { "question": "What is the determinant of a 3x3 identity matrix?", "options": ["0", "1", "2", "3"], "answer": "1" },
        { "question": "What is the inverse of the matrix [[2, 1], [1, 2]]?", "options": ["[[2, 1], [1, 2]]", "[[0.5, -0.5], [-0.5, 0.5]]", "[[1, 0], [0, 1]]", "[[2, 0], [0, 2]]"], "answer": "[[0.5, -0.5], [-0.5, 0.5]]" },
        { "question": "What is the trace of the matrix [[1, 2], [3, 4]]?", "options": ["3", "4", "5", "6"], "answer": "5" },
        { "question": "What is the rank of the matrix [[1, 2, 3], [4, 5, 6], [7, 8, 9]]?", "options": ["0", "1", "2", "3"], "answer": "2" },
        { "question": "What is the result of the matrix multiplication of [[1, 2], [3, 4]] and [[5, 6], [7, 8]]?", "options": ["[[19, 22], [43, 50]]", "[[5, 6], [7, 8]]", "[[19, 43], [22, 50]]", "[[1, 2], [3, 4]]"], "answer": "[[19, 22], [43, 50]]" },
        { "question": "Which of the following matrices is singular?", "options": ["[[1, 2], [3, 4]]", "[[2, 0], [0, 2]]", "[[0, 1], [1, 0]]", "[[1, 0], [0, 1]]"], "answer": "[[1, 2], [2, 4]]" },
        { "question": "What is the result of the transpose of the matrix [[1, 2], [3, 4]]?", "options": ["[[1, 3], [2, 4]]", "[[2, 1], [4, 3]]", "[[4, 3], [2, 1]]", "[[1, 2], [3, 4]]"], "answer": "[[1, 3], [2, 4]]" },
        { "question": "Which of the following is a property of tensors?", "options": ["Addition is commutative", "Multiplication is associative", "Tensors are 1D arrays", "Tensors cannot be inverted"], "answer": "Addition is commutative" },
        { "question": "What is the Frobenius norm of the matrix [[1, 2], [3, 4]]?", "options": ["2", "5", "6", "7"], "answer": "5.477" },
        { "question": "What is the rank of the matrix [[0, 1, 2], [0, 0, 3], [0, 0, 0]]?", "options": ["0", "1", "2", "3"], "answer": "2" },
        { "question": "Which of the following matrices is diagonalizable?", "options": ["[[1, 2], [3, 4]]", "[[0, 1], [0, 1]]", "[[2, 0], [0, 3]]", "[[1, 1], [1, 1]]"], "answer": "[[2, 0], [0, 3]]" },
        { "question": "Which operation is performed to solve Ax = b?", "options": ["Matrix multiplication", "Matrix inversion", "Dot product", "Cross product"], "answer": "Matrix inversion" },
        { "question": "What is the characteristic equation of the matrix [[1, 2], [3, 4]]?", "options": ["λ² - 5λ + 2 = 0", "λ² - 5λ + 6 = 0", "λ² + 5λ + 6 = 0", "λ² - 5λ - 6 = 0"], "answer": "λ² - 5λ + 6 = 0" },
        { "question": "What is the determinant of the matrix [[1, 0], [0, 0]]?", "options": ["1", "0", "-1", "2"], "answer": "0" },
        { "question": "What is the outer product of vectors (1, 2) and (3, 4)?", "options": ["[[1, 3], [2, 4]]", "[[3, 4], [1, 2]]", "[[4, 1], [3, 2]]", "[[1, 2], [3, 4]]"], "answer": "[[1, 3], [2, 4]]" },
        { "question": "What is the diagonal matrix corresponding to the vector (1, 2, 3)?", "options": ["[[1, 2, 3], [0, 0, 0], [0, 0, 0]]", "[[1, 0, 0], [0, 2, 0], [0, 0, 3]]", "[[0, 1, 2], [1, 0, 3], [2, 3, 0]]", "[[3, 2, 1], [0, 0, 0], [0, 0, 0]]"], "answer": "[[1, 0, 0], [0, 2, 0], [0, 0, 3]]" }
    ],
BackendProgramming: [
    { "question": "What is the difference between synchronous and asynchronous programming?", "options": ["Synchronous waits for tasks to complete, asynchronous does not", "Asynchronous is faster than synchronous", "Synchronous uses threads, asynchronous uses callbacks", "Synchronous is used for I/O, asynchronous for calculations"], "answer": "Synchronous waits for tasks to complete, asynchronous does not" },
    { "question": "Which of the following is a relational database?", "options": ["MongoDB", "Redis", "MySQL", "Cassandra"], "answer": "MySQL" },
    { "question": "What does CRUD stand for in web development?", "options": ["Create, Read, Update, Delete", "Connect, Run, Upload, Download", "Cache, Reset, Undo, Deploy", "Compile, Run, Use, Debug"], "answer": "Create, Read, Update, Delete" },
    { "question": "Which HTTP method is used to retrieve data from a server?", "options": ["GET", "POST", "PUT", "DELETE"], "answer": "GET" },
    { "question": "In Node.js, which module is used to create a server?", "options": ["fs", "http", "url", "events"], "answer": "http" },
    { "question": "What is the purpose of a load balancer?", "options": ["To cache requests", "To distribute incoming network traffic across multiple servers", "To handle security threats", "To manage server databases"], "answer": "To distribute incoming network traffic across multiple servers" },
    { "question": "Which of the following is a NoSQL database?", "options": ["PostgreSQL", "SQLite", "MongoDB", "Oracle"], "answer": "MongoDB" },
    { "question": "What is the role of an API gateway?", "options": ["To route client requests to multiple microservices", "To monitor API performance", "To secure API requests", "To handle database connections"], "answer": "To route client requests to multiple microservices" },
    { "question": "Which of the following is a method of securing APIs?", "options": ["SSL", "OAuth", "FTP", "TCP"], "answer": "OAuth" },
    { "question": "Which Java framework is widely used for creating enterprise-level applications?", "options": ["Spring", "Flask", "Angular", "Vue"], "answer": "Spring" },
    { "question": "What does the '404 Not Found' HTTP status code mean?", "options": ["The server is not reachable", "The requested resource could not be found", "The request was successful", "The server is under maintenance"], "answer": "The requested resource could not be found" },
    { "question": "Which of the following is true about microservices?", "options": ["They are tightly coupled", "They use a single database for all services", "Each service can be independently deployed", "They do not require a service registry"], "answer": "Each service can be independently deployed" },
    { "question": "Which of the following is a characteristic of RESTful APIs?", "options": ["They rely on the SOAP protocol", "They use a fixed set of HTTP methods", "They must use XML for data exchange", "They are stateful"], "answer": "They use a fixed set of HTTP methods" },
    { "question": "What is the purpose of the 'session' in web development?", "options": ["To store user data across multiple pages", "To optimize server load", "To secure API endpoints", "To handle database queries"], "answer": "To store user data across multiple pages" },
    { "question": "Which technology is used to ensure secure communication over the internet?", "options": ["HTTP", "FTP", "SSL/TLS", "SMTP"], "answer": "SSL/TLS" },
    { "question": "Which of the following is true about Docker?", "options": ["It is a virtual machine", "It uses containers to package applications", "It requires a separate operating system for each container", "It is only used for front-end development"], "answer": "It uses containers to package applications" },
    { "question": "What is a database index?", "options": ["A database table", "A pointer to data in a table", "A backup of a database", "A security layer"], "answer": "A pointer to data in a table" },
    { "question": "What is the main advantage of using Redis?", "options": ["It is a distributed file system", "It provides a persistent storage solution", "It is an in-memory key-value store with high performance", "It is used for machine learning"], "answer": "It is an in-memory key-value store with high performance" },
    { "question": "What is the purpose of a 'JOIN' operation in SQL?", "options": ["To delete rows from a table", "To retrieve data from multiple tables", "To modify data in a table", "To create a new database"], "answer": "To retrieve data from multiple tables" },
    { "question": "Which command is used to update data in SQL?", "options": ["INSERT", "UPDATE", "ALTER", "SELECT"], "answer": "UPDATE" },
    { "question": "Which of the following is a benefit of using serverless architecture?", "options": ["No server maintenance required", "Servers are faster", "Less data storage", "It provides its own user interface"], "answer": "No server maintenance required" },
    { "question": "Which of the following is a key feature of GraphQL?", "options": ["Multiple endpoints", "Client-side joins", "Schema-less structure", "Query only the data you need"], "answer": "Query only the data you need" },
    { "question": "What is middleware in Express.js?", "options": ["A function that executes between receiving a request and sending a response", "A type of database", "A front-end library", "A back-end server"], "answer": "A function that executes between receiving a request and sending a response" },
    { "question": "Which of the following is an advantage of using HTTPS over HTTP?", "options": ["Faster load times", "Data encryption and secure communication", "Lower server costs", "Better support for multimedia"], "answer": "Data encryption and secure communication" },
    { "question": "What is the use of environment variables in backend development?", "options": ["To store static website content", "To configure application settings outside the codebase", "To define database schemas", "To manage user roles"], "answer": "To configure application settings outside the codebase" },
    { "question": "Which database operation is used to ensure data consistency?", "options": ["Replication", "Sharding", "Transactions", "Indexing"], "answer": "Transactions" },
    { "question": "What does the acronym 'JWT' stand for?", "options": ["Java Web Tools", "JSON Web Token", "JavaScript Web Token", "Java Widget Token"], "answer": "JSON Web Token" },
    { "question": "In which format are messages typically exchanged in a REST API?", "options": ["HTML", "JSON", "YAML", "XML"], "answer": "JSON" },
    { "question": "What is the purpose of a database schema?", "options": ["To structure how data is stored in a database", "To handle API requests", "To manage server logs", "To control network traffic"], "answer": "To structure how data is stored in a database" },
    { "question": "Which of the following is used to run multiple isolated applications on the same host?", "options": ["Virtual Machines", "Docker containers", "Cloud functions", "Server farms"], "answer": "Docker containers" },
    { "question": "What is the purpose of a proxy server?", "options": ["To speed up database queries", "To act as an intermediary for requests from clients", "To load balance traffic", "To encrypt data"], "answer": "To act as an intermediary for requests from clients" },
    { "question": "Which database system uses ACID properties?", "options": ["Redis", "CouchDB", "PostgreSQL", "Cassandra"], "answer": "PostgreSQL" },
    { "question": "What is the main function of caching in web development?", "options": ["To speed up page load times by storing frequently accessed data", "To prevent server errors", "To ensure secure communication", "To reduce code complexity"], "answer": "To speed up page load times by storing frequently accessed data" },
    { "question": "What is 'sharding' in databases?", "options": ["Breaking a database into smaller parts", "Encrypting data", "Creating backups", "Indexing data"], "answer": "Breaking a database into smaller parts" },
    { "question": "What does 'OAuth' provide?", "options": ["Caching", "Authentication and authorization", "Database optimization", "Server monitoring"], "answer": "Authentication and authorization" },
    { "question": "Which tool is used for API documentation?", "options": ["Git", "Swagger", "Webpack", "Babel"], "answer": "Swagger" },
    { "question": "What is the main advantage of using GraphQL over REST?", "options": ["It supports multiple data formats", "It offers better caching", "It allows fetching only the required data", "It requires no server-side implementation"], "answer": "It allows fetching only the required data" },
    { "question": "Which of the following is true about a monolithic architecture?", "options": ["It is easier to scale individual services", "All components are tightly coupled", "It is ideal for large applications", "It always uses microservices"], "answer": "All components are tightly coupled" },
    { "question": "Which HTTP status code indicates successful creation of a resource?", "options": ["200", "201", "301", "404"], "answer": "201" },
    { "question": "What is a database transaction?", "options": ["A sequence of operations performed as a single logical unit of work", "A backup operation", "A method of querying multiple databases", "A security layer"], "answer": "A sequence of operations performed as a single logical unit of work" },
    { "question": "Which of the following is a primary advantage of using microservices?", "options": ["Easier code management", "All services share the same database", "Better fault isolation", "More difficult to scale"], "answer": "Better fault isolation" },
    { "question": "Which of the following is a benefit of using version control systems like Git in backend development?", "options": ["Faster server response times", "Automatic scaling of servers", "Better collaboration and code tracking", "Improved database performance"], "answer": "Better collaboration and code tracking" },
    { "question": "Which of the following is true about REST APIs?", "options": ["They must always return XML", "They are stateless", "They do not use HTTP methods", "They require a schema"], "answer": "They are stateless" },
    { "question": "What is the primary function of a database index?", "options": ["To store large amounts of data", "To optimize query performance", "To enforce foreign key constraints", "To manage database transactions"], "answer": "To optimize query performance" },
    { "question": "What is the role of 'cookies' in web development?", "options": ["To store user preferences and session data", "To manage server-side logs", "To handle database queries", "To optimize website images"], "answer": "To store user preferences and session data" },
    { "question": "Which protocol is commonly used for email transmission?", "options": ["FTP", "SMTP", "SSH", "HTTP"], "answer": "SMTP" },
    { "question": "What is a major difference between REST and SOAP APIs?", "options": ["SOAP requires XML, REST supports multiple formats", "SOAP uses GET, REST uses POST", "SOAP is stateless, REST is stateful", "SOAP is simpler than REST"], "answer": "SOAP requires XML, REST supports multiple formats" }
],

    
};
let totalQuestions = 30;  // Adjust this to match the number of questions you're using
let currentQuestionIndex = 0;
let score = 0;
let questionsShuffled = [];
let selectedAnswers = [];
let incorrectAnswers = []; // Array to store incorrectly answered questions
let isOptionSelected = false; // Track if an option is selected
let isCountdownActive = false; // Track if countdown is active
let userDefinedTime = 10; // Default time for countdown
let timer;

// Shuffle Questions Function
function shuffleQuestions(language) {
    const shuffled = quizData[language].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, totalQuestions); // Use 30 questions
}

// Function to start the quiz based on the selected language
function startQuiz(language) {
    currentLanguage = language;
    questionsShuffled = shuffleQuestions(language);
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = []; // Reset selected answers

    // Hide the intro text and language buttons
    document.getElementById('intro-text').style.display = 'none';
    document.getElementById('language-buttons').style.display = 'none';

    // Clear previous performance section
    document.getElementById('performanceSection').style.display = 'none';
    
    // Show the first question
    showQuestion();
    
    // Scroll to the question section smoothly
    document.getElementById('quizSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Function to evaluate performance
function evaluatePerformance(score, totalAnswered) {
    let performanceMessage;
    if (score === totalAnswered) {
        performanceMessage = "Excellent! You answered all questions correctly.";
    } else if (score >= totalAnswered * 0.8) {
        performanceMessage = "Good job! You answered most questions correctly.";
    } else if (score >= totalAnswered * 0.5) {
        performanceMessage = "You're doing better! Keep it up.";
    } else {
        performanceMessage = "Improvement needed. Keep practicing!";
    }
    return performanceMessage;
}

// Review mode to check incorrect answers
function enterReviewMode() {
    const incorrectAnswersList = questionsShuffled.filter((question, index) => {
        return selectedAnswers[index] !== question.answer; // Find all incorrect answers
    });

    const quizSection = document.getElementById('quizSection');

    if (incorrectAnswersList.length > 0) {
        // Show incorrect questions and allow toggling of the correct answer
        quizSection.innerHTML = `
            <div class="performance-message">
                <h3>Review Incorrect Answers</h3>
                ${incorrectAnswersList.map((q, i) => `
                    <div class="review-question" onclick="toggleAnswer(${i})">
                        <strong>Q${i + 1}: ${q.question}</strong>
                        <div class="review-answer" id="answer-${i}" style="display:none;">
                            <p>Your Answer: ${selectedAnswers[questionsShuffled.indexOf(q)]}</p>
                            <p>Correct Answer: ${q.answer}</p>
                            <p>Explanation: ${q.explanation}</p> <!-- Display explanation -->
                        </div>
                    </div>
                `).join('')}
                <button class="continue-quiz-button" onclick="continueQuiz()">Return to Quiz</button>
            </div>
        `;
    } else {
        // If no incorrect answers, show a message
        quizSection.innerHTML = `
            <div class="performance-message">
                <h3>Review Incorrect Answers</h3>
                <p>Congratulations! You answered all questions correctly, so there's nothing to review!</p>
                <button class="continue-quiz-button" onclick="continueQuiz()">Return to Quiz</button>
            </div>
        `;
    }
}

// Function to show the final performance message
function showFinalPerformance() {
    const performanceMessage = evaluatePerformance(score, totalQuestions);
    const percentage = ((score / totalQuestions) * 100).toFixed(2); // Calculate final percentage

    const resultSection = document.getElementById('performanceSection');
    resultSection.innerHTML = `
        <div class="performance-message">
            <h3>Your Final Performance</h3>
            <p>${performanceMessage}</p>
            <p>Final Score: ${score} out of ${totalQuestions} (${percentage}%)</p>
            <button class="quiz-button" onclick="enterReviewMode()">Review Incorrect Answers</button>
            <button class="quiz-button" onclick="retakeIncorrectQuestions()">Retake Incorrect Questions</button> <!-- Retake button -->
        </div>
    `;
    resultSection.style.display = 'block'; // Show performance section
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Function to retake incorrect questions
function retakeIncorrectQuestions() {
    currentQuestionIndex = 0; // Reset question index for retake
    questionsShuffled = incorrectAnswers; // Use incorrect answers for the retake
    score = 0; // Reset score
    selectedAnswers = []; // Reset selected answers
    showQuestion(); // Show the first question from the incorrect ones
}

// Function to toggle answer display in review mode
function toggleAnswer(index) {
    const answerDiv = document.getElementById(`answer-${index}`);
    answerDiv.style.display = answerDiv.style.display === 'none' ? 'block' : 'none'; // Toggle visibility
}

// Function to show the question
function showQuestion() {
    const quizSection = document.getElementById('quizSection');
    const question = questionsShuffled[currentQuestionIndex]; // Use shuffled questions

    if (question) {
        // Prevent skipping the countdown
        if (isCountdownActive) return;

        // Start a user-defined countdown before showing the question
        let countdown = userDefinedTime;
        isCountdownActive = true; // Set countdown as active

        quizSection.innerHTML = `
            <div class="countdown-timer">
                <h3>Get ready! The next question will appear in <span id="countdown">${countdown}</span> seconds...</h3>
            </div>
        `;

        // Disable the quiz options during the countdown
        const countdownInterval = setInterval(function() {
            countdown--;
            document.getElementById('countdown').textContent = countdown;

            if (countdown === 0) {
                clearInterval(countdownInterval);
                isCountdownActive = false; // Countdown ends, reset active state

                // Display the question once the countdown finishes
                quizSection.innerHTML = `
                    <div class="quiz-question">
                        <h3>${currentQuestionIndex + 1}. ${question.question}</h3>
                        ${question.options.map(option => `
                            <div class="option" id="${option}" onclick="selectOption('${option}', '${question.answer}')">${option}</div>
                        `).join('')}
                        <div id="result-message"></div>
                    </div>
                `;
                updateProgressBar(currentQuestionIndex + 1, totalQuestions); // Update progress bar
                quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 160); // 1000ms = 1 second
    } else {
        showFinalPerformance(); // End quiz when no more questions
    }
}

// Progress bar initialization
function updateProgressBar(current, total) {
    const progressBar = document.getElementById('progressBar');
    const progress = (current / total) * 100;
    progressBar.style.width = `${progress}%`;
}

// Function to select an option
function selectOption(selected, correctAnswer) {
    if (isOptionSelected || isCountdownActive) return; // Prevent multiple selections or actions during countdown
    isOptionSelected = true; // Mark that an option is selected

    const resultMessage = document.getElementById('result-message');
    const currentQuestion = questionsShuffled[currentQuestionIndex];

    // Check the selected answer
    if (selected === correctAnswer) {
        score++;
        resultMessage.innerText = "Correct!!! ";
        resultMessage.style.color = "green";
    } else {
        resultMessage.innerText = `Incorrect ! The correct answer is: ${correctAnswer}`;
        resultMessage.style.color = "red";
        // Add to incorrectAnswers if the answer is wrong
        incorrectAnswers.push(currentQuestion);
    }

    // Move to the next question after 2 seconds
    setTimeout(() => {
        currentQuestionIndex++;
        isOptionSelected = false; // Reset option selection flag
        if (currentQuestionIndex % 5 === 0 && currentQuestionIndex < totalQuestions) {
            showIntermediatePerformance(); // Show performance after every 10 questions
        } else if (currentQuestionIndex < totalQuestions) {
            showQuestion(); // Show the next question after countdown
        } else {
            showFinalPerformance(); // Show final performance after all questions
        }
    }, 2000);
}

// Function to show intermediate performance after every 10 questions
function showIntermediatePerformance() {
    const quizSection = document.getElementById('quizSection');
    const performanceMessage = evaluatePerformance(score, currentQuestionIndex);  // Display up to the current question number
    const percentage = ((score / currentQuestionIndex) * 100).toFixed(2); // Calculate percentage

    quizSection.innerHTML = `
        <div class="performance-message">
            <h3>Your Performance Till Now</h3>
            <p>${performanceMessage}</p>
            <p>Current Score: ${score} out of ${currentQuestionIndex} (${percentage}%)</p>
            <button class="quiz-button" onclick="showQuestion()">Continue Quiz</button>
        </div>
    `;
}
let questionCount = 0; // Counter for the number of questions answered

function loadNextQuestion() {
    if (questionCount < totalQuestions) {
        // Load the next question here (placeholder example)
        document.getElementById('quizSection').innerHTML = `<p>Question ${questionCount + 1}: What is an example question?</p>`;
        
        // Show the continue button if 10 questions have been answered
        if (questionCount > 0 && questionCount % 10 === 0) {
            document.getElementById('continue-button').style.display = 'block';
        } else {
            document.getElementById('continue-button').style.display = 'none'; // Hide the button if not needed
        }
    } else {
        // End of quiz logic
        showPerformance();
    }
}

function continueQuiz() {
    // Hide the continue button and load the next question
    document.getElementById('continue-button').style.display = 'none';
    questionCount++; // Increment question count
    loadNextQuestion(); // Load the next question
}

function showPerformance() {
    // Logic to show performance summary
    document.getElementById('performanceSection').style.display = 'block';
    document.getElementById('performanceText').innerText = "You answered " + questionCount + " questions with a score of " + score + ".";

    // Check for perfect score and trigger fireworks
    if (score === totalQuestions) {
        showFireworks(); // Trigger fireworks on perfect score
    }
}
function logout() {
    // Clear any stored session data
    sessionStorage.clear();
    localStorage.clear();

    // Redirect to the login page
    window.location.href = 'login.html';
}
