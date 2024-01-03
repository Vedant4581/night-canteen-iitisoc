
  let cont;
  if(dat.name===null){
    cont="HELLO"
  }else{
    cont=`${((dat.name.length)<7)?dat.name:(dat.name.slice(0,5)+"...")}`
  }