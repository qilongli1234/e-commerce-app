import java.util.*;
public class Stack{

private int top;
int[] array;



  public Stack(int size){

    array=new int[size];
    top=-1;


  }

  void push(int x){

    top++;

    this.array[top]=x;



    
    

  }

  int pop() throws Exception{

   if(top==-1){


    throw new Exception();
   }

   int temp= this.array[top];
   
   top--;
   
   return temp;



  
  }




}