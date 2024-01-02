//create a constructor with a name
// player should have a name as well as a lvl set to 1 by default and points set to 0 by default
function Player(name){
    this.name= name;
    this.lvl = 1;
    this.points = 0;
}
// create a method prototype called gain XP 
// note when incrementing the exp later the argument can be put in like gainxp(arg)
Player.prototype.gainXp=function(xp){
//that takes number from 1-10 and adds it to the players points
    this.points += xp;
//if the current points are >= 10 then add 1 to the lvl and decremetn the points by 10
// note that the use of this is also in the methods and consturctor
    if (this.points >= 10){
        this.lvl++;
        this.points -= 10;
    }
//adding addtional titles when some levels up
    if (this.lvl >= 2){
        this.name = this.name + " trainee"
    }

    if (this.lvl >= 10){
        this.name = this.name + "boss"
    }
}
// create antoher protype method called describe that displays the playre stats (name,lvl, points)

Player.prototype.story= " ";
Player.prototype.describe= function(){
    return this.name +" is level"+ " "+ this.lvl+" "+ "with " +this.points+" experience";
}

const player1 = new Player("Bob");
const player2 = new Player("Alice");

player1.gainXp(8);
player2.gainXp(9);
player1.gainXp(5);

console.log(player1.describe())
console.log(player2.describe())
// added a function to see who will win 
function whowillwin(playerX,playerY){
   combatant1 = playerX.lvl;
   combatant2= playerY.lvl;

   if (combatant1< combatant2){
    return "combatant 1 lose";
}
    else
return "combatant 1 wins ";
    
    
}

player1.story= "a badass man that has a blazing sword who loves anime the best man "
player2.story= "perhaps a great travel a man with many tales"
console.log(whowillwin(player1,player2))

console.log(player1.story)
console.log(player2.story)
