;function Tab(){
    this.index=0;
    this.btns=document.querySelectorAll(".dz-top div")
    this.contents=document.querySelectorAll(".dz-bottom > div")
    
}

Tab.prototype.init=function(){
    this.btns= Array.from(this.btns);
    this.contents=Array.from(this.contents);
    this.bindEvent()
}

Tab.prototype.bindEvent=function(){
    this.btns.forEach((item,index)=>{
        item.addEventListener("click",this.changeIndex.bind(this,index));
        item.addEventListener("click",this.changeClass.bind(this,index));
    })
    
}

Tab.prototype.changeIndex=function(index){
    this.index=index;
}

Tab.prototype.changeClass=function(index,evt){
    evt.preventDefault();

    $(this.contents).removeClass("active");
    $(this.contents[index]).addClass("active");
    // this.contents.forEach((item,index)=>{
    //     item.className=item.className.replace(/active/g,"")
    //     this.btns[index].className=""
    // })
    //     this.contents[index].className="active";
    //     this.btns[index].className="active"

}

var tab=new Tab();
tab.init()