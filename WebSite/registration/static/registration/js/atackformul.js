class AttackFormul
{
constructor(names,atributmodifier,checkprof,modifier,damage)
{
this.names=names;
this.atributmodifier=atributmodifier;
this.checkprof=checkprof;
this.modifier=modifier;
this.damage=damage;
}
setCheckProf(checkprof)
{
    this.checkprof=checkprof;
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
setAtributmodifier(atributmodifier){
    this.atributmodifier=atributmodifier;
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
getCheckProf()
{
    return this.checkprof;
}
getAtribution()
{
    return this.atributmodifier;
}
getAllData()
{
    let String = `${this.names},${this.modifier},${this.damage}`;
    return String;
}
}