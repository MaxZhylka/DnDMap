class AttackFormul
{
constructor(names,modifier,damage)
{
this.names=names;
this.modifier=modifier;
this.damage=damage;
}
setName(name){
    this.names=name;
}
setModifier(modifier){
    this.modifier=modifier;
}
setDamage(damage){
    this.damage=damage;
}
getName(){
    return this.names;
}
getModifier(){
    return this.modifier;
}
getDamage(){
    return this.damage;
}
getAllData()
{
    let String = `${this.names},${this.modifier},${this.damage}`;
    return String;
}
}