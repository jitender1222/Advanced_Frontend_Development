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