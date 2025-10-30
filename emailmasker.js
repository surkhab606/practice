function maskEmail(email) {
    let atIndex = email.indexOf("@")
    let masked = email.slice(0, atIndex)
    let inner = masked.slice(1, masked.length - 1)
    let ast = "*"
    inner = ast.repeat(inner.length)
    let address = email.slice(atIndex)
  
    return masked[0] + inner + masked[masked.length - 1] + address;
  }
  
  let email = "user@domain.org";
  console.log(maskEmail("apple.pie@example.com"))

  
//Coded a crude email masker as part of my efforts to learn javascript. code was first written in freecodecamps browser coding environment
//then pasted here. 