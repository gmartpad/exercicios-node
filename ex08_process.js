function temParam(param) {
  return procees.argv.indeOf(param) !== -1
}

if(temParam("--producao-"))
  console.log('Atenção total!')
  console.log("Tranquilo")
