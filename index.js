//question 1
// document.addEventListener("DOMContentLoaded", function() {
//     const taskInput = document.getElementById("taskInput");
//     const addTaskBtn = document.getElementById("addTaskBtn");
//     const taskList = document.getElementById("taskList");

//     addTaskBtn.addEventListener("click", function() {
//         const taskText = taskInput.value.trim();
//         if (taskText !== "") {
//             addTask(taskText);
//             taskInput.value = "";
//         }
//     });

//     function addTask(taskText) {
//         const li = document.createElement("li");
//         li.textContent = taskText;
        
//         li.addEventListener("click", function() {
//             li.classList.toggle("complete");
//         });

//         const deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.addEventListener("click", function() {
//             taskList.removeChild(li);
//         });

//         li.appendChild(deleteBtn);
//         taskList.appendChild(li);
//     }
// });



//question3
//create a class BankAccount with private properties balance and accountNumber. implement methods deposit(amount) and withdrawn(amount) to modify the balance . Additionally, implement a method getBalance() to retrieve the balance. Ensure that the balance property can only be modified through the deposit and withdraw methods;


class BankAcount{
    constructor(accountNumber){
        this.balance = 0
        this.accountNumber = accountNumber
    }

    validAmount = (amount)=> amount > 0

    deposit(amount){
        if (!this.validAmount(amount)) {
            return(`Invalid Amount`)
        }

        return this.balance += amount
    }

    withdraw(amount){
        if (amount > this.balance) {
            return (`Insufficient Balance`)
        }

        return this.balance -= amount
    }

    getBalance(){
        return this.balance
    }
}

const userAccount = new BankAcount("2240890247") 

userAccount.deposit(5000)
userAccount.withdraw(1500)

console.log(`Acount Number: ${userAccount.accountNumber}`);
console.log(`Account Balance: $${userAccount.getBalance()}`);



//question 5
//Create a class called Animal with proprties like name, age, and species. implement methods like eat()and sleep() Then create subclasses like Dog, Cat and Bird inheriting from the Animal class. Show instances of where an animal is eating or sleeping


class Animal{
    constructor(name, age){

        this.name = name
        this.age = age
        this.species = species
    }

    eat(){
        return(`eating`)
    }

    sleep(){
        return(`sleeping`)
    }
}

class Animal extends creature{
    constructor(name){
        super(name, dog)
    }

    role(){
        return(`A barging dog`)
    }
}

class Animal extends beast{
    constructor(name){
        super(name, cat)
    }

    role(){
        return(`A jumping cat`)
    }
}

class Animal extends beast{
    constructor(name){
        super(name, bird)
    }

    role(){
        return(`A flying bird`)
    }
} 

const allAnimal = [new dog ("The dog food"), new cat ("The sleeping cat"), new bird ("A white bird flying")]

allAnimal.forEach(item)=>{
    console.log(`animal: ${item.name}, age: ${item.age}, species: ${item.species}`)
    console.log(item.age());
}

