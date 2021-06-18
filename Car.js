class Car{
   constructor(speed){
        this.x = random([100,210,320,440,550,660,770,880,990,1100,1210]);
        this.y = height-random([150,250,350,950,1050,1150,1750,1850,1950]);
        this.spt = createSprite(this.x,this.y);
        this.spt.shapeColor = "blue";
        this.spt.scale=0.5;

        if(this.y==height-250 || this.y==height-1050 || this.y==height-1850)
        {
            speed=-speed;
        }
        this.spt.velocityX = speed;
        if(carGroup1.isTouching(player.spt))
        {
            player.spt.x=width/2;
            player.spt.y=height-75
        }

        if(logGroup1.isTouching(player.spt))
        {
         player.spt.x=player.spt.x-3;
        }
        else if((player.spt.y>height-1550 && player.spt.y<height-1300) ||
                (player.spt.y<height-550 && player.spt.y>height-850)||
                (player.spt.y>height)||
                (player.spt.x<0)||
                (player.spt.x>width))
                {
                    player.spt.x = width/2;
                    player.spt.y = height-75;
                }

    }
   
}


