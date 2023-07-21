let pattern = ""


for(i = 1; i <= 6;i++)

{
    for(j = 6; j>=i; j--){
    pattern = pattern +"*";

}
pattern =  pattern + "\n";
}
console.log(pattern);