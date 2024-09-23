function printHello(){
    console.log("hello")
    // return <h1>Hello Angcon</h1>
}

function bye(){
    console.log("bye")
    // return <h4>Bye</h4>
}

export default function Button(){
    return (
    <>
        <button onClick={printHello}>Click me</button>    
        <p onClick={bye}>This is a testing</p>
    </>
    )
}