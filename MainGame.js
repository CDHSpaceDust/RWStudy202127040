var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class shoot
{
    constructor(click_X,click_Y,S_color)
    {
        this.click_X = click_X;
        this.click_Y = click_Y;
        this.S_color = S_color;
    }
    draw()
    {
       
        context.beginPath();
        context.rect(this.click_X,this.click_Y,10,10);
        context.fillStyle = this.S_color;
        context.fill();
    }
}

class player
{
    constructor(pos_X,pos_Y,radious,P_color)
    {
        this.pos_X = pos_X;
        this.pos_Y = pos_Y;
        this.radious = radious;
        this.P_color = P_color;
    }
    draw()
    {
        context.beginPath();
        context.arc(this.pos_X,this.pos_Y,this.radious,0,2*Math.PI)
        context.fillStyle = this.P_color;
        context.fill();
    }
}
var C_player = new player(100,100,15,'red');
var C_Shoot = new shoot('black');
C_player.draw();
C_Shoot.draw();