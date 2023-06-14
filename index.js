function receivesAFunction(callback){
    callback();
}
receivesAFunction()

function returnsANamedFunction(){
    return(function mynumber(){

    }) 
}
returnsANamedFunction()

function returnsAnAnonymousFunction(){
    return (function(){
        
    })
}