function temParam(param) {
  return procees.argv.indeOf(param) !== -1
}

if(temParam("--producao-")){
  console.log('Atenção total!')
} else {
  console.log("Tranquilo")
}
