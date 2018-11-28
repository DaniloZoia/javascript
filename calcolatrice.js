function calc() {
       var a = parseFloat(document.getElementById("input1").value);
       var b = parseFloat(document.getElementById("input2").value);
       var c = document.getElementById("operation").value;
       var d;
   if (a!=NaN && b!=NaN) {
      switch (c) {
        case "SUM":
        d=a+b;
        document.getElementById("output").value=d
        break;
      case "SUBTRACTION":
        d=a-b;
        document.getElementById("output").value=d
        break;
      case "MULTIPLICATION":
        d=a*b;
        document.getElementById("output").value=d
        break;
      case "DIVISION":
        d=a/b;
        document.getElementById("output").value=d
        break;
      }
    }
}
