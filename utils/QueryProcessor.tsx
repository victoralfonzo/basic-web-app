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


  return "";
}
