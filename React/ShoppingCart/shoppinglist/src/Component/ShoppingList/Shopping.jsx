import Header from "../Header/Header";
import Input from "../Input/Input";
import ListItems from "../ListItems/ListItems";

const Shopping=()=>{

    const ShoppingItems=[
        { id:1 ,name:"Apples",quantity:"10",price:100},
        { id:2 ,name:"Banana",quantity:"20",price:200},
        // { id:3 ,name:"Grapes",quantity:"30",price:300},
        // { id:4 ,name:"Guava",quantity:"90",price:80}
    ]

    return (
        <>
        <Header />
        <Input />
        <ListItems items={ShoppingItems}/>
        </>
    )
}

export default Shopping;