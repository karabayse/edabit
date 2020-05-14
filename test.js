function correctStream(user, correct) {
  let outputArr = [];
  if(!user  || !correct) return

      let result;

    user.forEach((e1,i) => correct.forEach(e2 => {

           if(e1.length > 1 && e2.length){
              result = compare(e1,e2);
           }else if(e1 !== e2 ){
              result = false
           }else{
              result = true
           }
      })
    )

    return result

  console.log(outputArr);
}

correctStream(["cat", "blue", "skt", "umbrells", "paddy"], ["cat", "blue", "sky", "umbrella", "paddy"]);
