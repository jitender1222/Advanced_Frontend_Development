## OOPS

In OOPS we actually follow the mechanism of blueprinting . 

We actually prepare the blueprint which is nothing but a mental model of how the real life entities would look like .

For example -> let's say we have a `product `

Product has a -> `Name Price Rating Description` these all are the `properties` for the product.

Product has also a `Behaviour` -> `Buying, Add To Cart, Wishlist ` etc.

**`Class`** ->  It is nothing but the `blueprint` of the mental model that we created . `OR`  Preparing the bluePrint of the mental model that we created is known as Class.

Example -> mental model of the product we created above.


**`Objects`** -> these are real life enitites that are prepared by using the same blueprint from which the class are created.


`Note` -> Properties of an object helps us to unqiuely identified 2 diff objects but their behaviour remain same.

In the above example -

The properties of the product is known as `data members`.

The behaviour of the product is known as `data members`.



## This Keyword

Except one case this always refers from where it calls .

For example 

```

let product={

    name: "IPhone13",
    price: 100000,
    rating: 4.8,
    desc: this is a new Iphone 13Pro Max

    display(){
        console.log(this)
    }
}

product.display();

```

Output -> 

    name: "IPhone13",

    price: 100000,

    rating: 4.8,

    desc: this is a new Iphone 13Pro Max

    display :[Function:display]



If we see carefully on the above code we call the method `display` and inside the display method we are printing `this` so in this case `this` refers to the calling side from were it calls in this case the call side is `product` that i m calling display in the context of product.

**`Exception case in `this` `**

inside the `arrow functions` **this** does not refers to the calling side instead it lexcially find the function if it is present or not. If not then it will return an empty object.

For example -> 

```

let product={

    name: "IPhone13",
    price: 100000,
    rating: 4.8,
    desc: this is a new Iphone 13Pro Max

    print:()=>{
        console.log(this)
    }
}

product.display();

```

```

Output -> {}

```

`How to resolve the above problem`

```

let product={

    name: "IPhone13",
    price: 100000,
    rating: 4.8,
    desc: this is a new Iphone 13Pro Max,

    display: function(){

    {
        let iphoneRed={
        name: "IPhone13",
        price: 100000,
            print:()=> {
            console.log(this);
            }
        }

        iphoneRed.print()
    }
 }
}

product.display();


```


Output -> 

    name: "IPhone13",

    price: 100000,

    rating: 4.8,

    desc: this is a new Iphone 13Pro Max

    display :[Function:display]


 In the above case `this` resolves lexically which means when iphone.Red call print so print is basically a `arrow function` and inside arrow function `this` does not work as expected so it goes lexcially to the display function and there find that is display function knows `this` as we can see display is a normal js function so it knows `this` and it will print the calling side .


 ## New Keyword

 when we use new keyword the new keyword will create a brand new empty plain js object .

 whenever we made an object `constructor ` is the first method that actually gets called. If we did not make any constructor then js calls the bydefault constructor. 

 Here `this` refers to the object that we made by using the `new` keyword.

 If we `return` a primitive value then there is no effect but if we return a object from a constructor then it return that object only.

 If we don't return anything from the constructor then it is equivalent to writing like `return this`. 

```


 class Product{

    constructor(n,p,d){
        this.name=n;
        this.price=p;
        this.desc=d;
    }

    display(){
        // print the content
    }


 }

 const p=new Product(dress,1000,this is a nice dress);

 console.log(p);


 ```

 here `this` will call to the brand new empty object so it will create a `key and value` pair inside the object key is `name` and value is `dress` and so on.

` Note` -> inside js we can't do constructor overloading.


### `Remember`

In other Programming languages like C++ or Java the objects are based on their classes we can also say that their is no linkage bw the class and the object.

Once the object is created and when we change anything inside the class it does not reflect those changes to that object.


**`In JS things behave differently objects are linked to their classes. `**


**`Prototypes`**


It is mechanism by which js objects inherites features from one another.

Whenever we create a object that objects get some properties from their prototypes.


Every object that we created has a `prototype` in it this `prototype` property is an object itself and we can add properties like data memebers member function after the creation of an object and because in js we did not make copies anything change in the prototype can reflect this change to the object.


### Underlying structure of JS Prototype

**`Inside the internal JS`**

Inside the `internal js environment ` we have an `entity` which is a `function` named as `object`.

We have one more `unnamed` entity.

On our first entity we have a property named as `prototype` which points to the `second` entity.

when we do `object.prototype` we refer to the `unnamed` entity.

Inside the `second` entity we have a lot of function written inside it like `to string value of isPrototype etc.` 

From the second entity their is a property which refers to the first entity named as `constructor`


**`Inside the external JS`**

This is the area in where we code .

Let's say we created a `function` named as` Product` so by default there is one more `entity` created which is an `object `.

To refer this object we can do `product.prototype` and to go back from this `object` there is a `constructor` which points back to the `first` entity .


`Note` -> There is a hidden relationship that exist b/w both of this hidden `objects`.



```

function Product(n){

    this.name=n;
}

let d= new Product("iphone");

Product.prototype.display=function() {
    console.log("name of the product is",this.name)
};

```

when we do `Product.prototype.display` we will adding a key `display` along with the function associated with it to the `unnamed` object.


when we create a new object by using `New` keyword there are 4 steps that will be executed.

1. It creates an empty object.

2. It does some kind of linkage. `(In this case the linkage is b/w the empty object that is created in the first step  and the unnamed object which refers to product.prototype )
`
3. Calls the function with `this` property assigned to the empty object it created before.

4. Then it starts executes the function. 

Note -> If the function doesn't return any specific object then it automatically return `this`.

Otherwise it `return` the object return by you.



  


