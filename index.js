function arrfunction(){
    Object.defineProperty(this, "length",{
        value:0,
        writable:true,
        enumerable:false,
    })
    this.length=arguments.length
for(var i=0;i<arguments.length;i++){
    this[i]=arguments[i];
}
}

var newarr=new arrfunction(1,2,3);

console.log(newarr);

arrfunction.prototype.add=function(value){
    var index=this.length;
    this[index]=value;
    this.length++;
}

newarr.add(4);

console.log(newarr);
arrfunction.prototype.remove=function(){
    var index=this.length-1;
    delete this[index];
    this.length--;

}
newarr.remove();
console.log(newarr);

arrfunction.prototype.top=function(){
    var index=this.length-1;
    console.log(this[index]);
}
newarr.top();

arrfunction.prototype.print=function(){
    var bag =[]
    for(var i=0; i<this.length; i++){
        bag.push(this[i])
    }
    console.log(bag)
}
newarr.print()
arrfunction.prototype.printreverse=function(){
    var bag =[]
    for(var i=this.length-1; i>=0; i--){
        bag.push(this[i])
    }
    console.log(bag)
}
newarr.printreverse()

arrfunction.prototype.len=function (){
    console.log(this.length)
}
newarr.len();