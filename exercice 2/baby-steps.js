var arguments = process.argv.slice(2);
total = 0;
for(var i in arguments)
{
total += +(arguments[i]);
}
console.log(total)