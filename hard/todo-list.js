/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){

    this.arz=[]


  }

  get(a){
    if(a>=this.arz.length){
      return null
    }


    return this.arz[a]
  }

  clear(){
    this.arz=[]
  }

  getAll(){
    return this.arz
  }

  update(a,b){

    if(a>=this.arz.length){
      return
    }
    this.arz[a]=b
  }

  add(a){

    this.arz.push(a)
  }

  remove(a){

    if(a>this.arz.length-1){
      return null

    }

    console.log(this.arz)
   for(var g=a+1;g<this.arz.length;g++){



  
    this.arz[g-1]=this.arz[g]

      
   }

   
   console.log(this.arz.length)

   this.arz.splice(this.arz.length-1)

   console.log(this.arz)





   


  }

}


const u= new Todo()

u.add("task1")
u.add("task2")
u.add("task3")
u.update(1,"updated task 2") //3
u.get(3)
console.log(u.getAll())


module.exports = Todo;
