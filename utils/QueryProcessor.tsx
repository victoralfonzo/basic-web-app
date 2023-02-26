export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("name")) {
    return ("playtest");
  }

  if (query.toLowerCase().includes("largest")){
    var index = query.indexOf("largest") + 9;
    var substring = query.substring(index, query.length-1);
    var split = substring.split(",");
    var n1 = parseInt(split[0]);
    var n2 =  parseInt(split[1]);
    var n3 = parseInt(split[2]);
    var largest = n1;
    if(n2 > n1){
      largest = n2;
    }
    if (n3 > largest){
      largest = n3;
    }
    return largest.toString();
  }

  if (query.toLowerCase().includes("plus")){
    var lower = query.toLowerCase()
    var index = lower.indexOf("plus");
    var left = parseInt(lower.substring(0, index).replace("what is", ""));
    var right = parseInt(query.substring(index+4, query.length-1));
    return (left+right).toString();
  }
  if (query.toLowerCase().includes("multiplied")){
    var lower = query.toLowerCase()
    var index = lower.indexOf("multiplied");
    var leftm = parseInt(lower.substring(0, index).replace("what is", ""));
    var rightm = parseInt(query.substring(index+13, query.length-1));
    return (leftm*rightm).toString();
  }
  if (query.toLowerCase().includes("cube")){
    var index = query.indexOf(":");
    var substring = query.substring(index+1, query.length-1);
    var split = substring.split(",");
    for(var i =0 ;i < split.length; i++){
      if (Math.sqrt(parseInt(split[i])) % 1 === 0 && Math.cbrt(parseInt(split[i])) % 1 === 0)
        return split[i];
    }
  }
  return "";
}
