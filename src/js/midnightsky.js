import './general.js';

class MidnightSky
{
    constructor()
    {
        /*
         Create a class called MidnightSky
- Part 1 - Create and draw stationary stars
    - Initialize instance variables for all of the ui elements in the constructor
        -   this.$canvas = 
        -   this.$context = 
        -   this.$animationFrame; 
    - Initilize some other instance variables that are data related in the constructor
        this.defaults = {
            star: {
                color: 'rgba(255, 255, 255, .5)',
                width: 3,
                randomWidth: true
            },
            line: {
                color: 'rgba(255, 255, 255, .5)',
                width: 0.2
            },
            position: {
                x: 0,
                y: 0
            },
            width: window.innerWidth,
            height: window.innerHeight,
            velocity: 0.1,
            length: 100,
            distance: 120,
            radius: 150,
            stars: []
        };
        this.config = JSON.parse(JSON.stringify(this.defaults));
        */
        this.$canvas=document.getElementById('imgCanvas');
        this.$context=this.$canvas.getContext('2d');
        
        this.animationFrame;
        this.defaults=
        {
            star:
            {
                color: 'rgba(255, 255, 255, .5)',
                width: 3,
                randomWidth: true,
                velocityY: 0.1,
                velocityX:0.1
            },
            line: 
            {
                color: 'rgba(255, 255, 255, .5)',
                width: 0.2
            },
            position: 
            {
                x: 0,
                y: 0
            },
           
            width: window.innerWidth,
            height: window.innerHeight,
            //velocity: 0.1,
            length: 150,
            distance: 120,
            radius: 150,
            stars: []
        };
        //stringify the deafult stuff to make a template of what a star should be
        //we can then create new stars without affecting out 'tempalte'
        this.config = JSON.parse(JSON.stringify(this.defaults));
        
        //this.stars=this.stars.bind(this);
        //this.config=this.defaults;
       //this.stars=this.config.stars;
        this.createCanvas=this.createCanvas.bind(this);
        this.createCanvas();
        this.setContext=this.setContext.bind(this);
        this.setContext();
        this.setInitialPosition=this.setInitialPosition.bind(this);
        this.setInitialPosition();
        this.createStar=this.createStar.bind(this);
        this.drawStar=this.drawStar.bind(this);
        this.animateStars=this.animateStars.bind(this);
        this.createStars=this.createStars.bind(this);
        this.highlight=this.highlight.bind(this);
        this.drawLines=this.drawLines.bind(this);
        this.createStars();
        this.drawStars();
        
        this.$canvas.addEventListener('mousemove',this.highlight(this.$context));
        //document.getElementById('imgCanvas').onmousemove=this.highlight();
        setInterval(this.animateStars,16);

    }
    createCanvas()
    {
        this.$canvas.width=Math.min(this.config.width);
        this.$canvas.height=Math.min(this.config.height);
        
        /*
         Write the method setCanvas
        -   set the width and the height of the canvas to the 
            width and the height in the config object
        -   bind the class to the method in the constructor
        -   call the method in the constructor
        */
    }
    setContext()
    {
        /*
        - Write the method setContext
        -   set the strokeStyle, fileStyle and lineWidth properties of the context
            based on corresponding values in the config object
        -   bind the class to the method in the constructor
        -   call the method in the constructor
        */
       this.$context.strokeStyle=this.config.line.color;
       this.$context.fileStyle=this.config.line.color
       this.$context.lineWidth=this.config.line.width;
    }
    setInitialPosition()
    {
        this.config.x=this.$canvas.width/2;
        this.config.y=this.$canvas.height/2;
        /*
        - Write the method setInitialPosition
        -   set the x and y position in the config object to 
            half of the canvas width and height respectively
        -   bind the class to the method in the constructor
        -   call the method in the constructor
        */
    }
    createStar()
    {   
        //use JSON as a template of what a star should be to create new starts
        let myStar=JSON.parse(JSON.stringify(this.defaults.star))
        //let myStar=this.config.star;
        myStar.x=Math.floor(Math.random() * this.$canvas.width);
        myStar.y=Math.floor(Math.random() * this.$canvas.height);
        myStar.velocityX=Math.random()*.2+.1;
        myStar.velocityY=Math.random()*.2+.1;
        //myStar.width=Math.floor(Math.random()*3+2);
        let color=Math.floor(Math.random()*10);
        switch(color)
        {
            case 1:
            color= "blueViolet";
            break;
            case 2:
            color="indigo";
            break;
            case 3:
            color="mediumslateblue";
            break;
            case 4:
            color="white";
            break;
            case 5:
            color="plum";
            break;
            case 5:
            color="coral";
            break;
            case 6:
            color="teal"
            break;
            case 7:
            color="crimson";
            break;
            case 8:
            color="Aquamarine";
            break;
            case 9:
            color="Fuchsia"
            break;
            case 10:
            color="SpringGreen"
            break;
            
        }
        myStar.color=color;
       // myStar.radius=Math.floor(Math.random() * 200) + 100;
        return myStar;
        /*
        - Write the method createStar
        -   make a copy of the default star characteristics
        -   add x to the star - random number relative to the canvas width
        -   add y to the star - random number relative to the canvas height
        -   add vx to the star - random velocity in the x direction
        -   add vy to the star - random velocity in the y direction
        -   add radius to the star - random size
        -   return the star
        -   bind the class to the method in the constructor
        */
    }
    createStars()
    {
        for(let i=this.config.stars.length;i<this.config.length;i++)
        {
            let myStar=this.createStar();
            this.config.stars.push(myStar);
            
        }
        this.drawLines();
        
        /*
          - Write the method createStars
        -   repeatedly call the method createStar and add the new star to the
            array of stars in the config object.  The number of stars is in the
            length property of the config object.
        -   bind the class to the method in the constructor
        -   call the method in the constructor
        */
    }
    drawStar(star)
    {
        
        this.$context.fillStyle=star.color;
        this.$context.fillRect(star.x,star.y,star.width,star.width);
        /*
         Write the method drawStar.  Pass in a star as a parameter
        -   it should draw one star
        -   bind the class to the method
        */

    }
    drawStars()
    {
        this.$context.clearRect(0,0,this.$canvas.width,this.$canvas.height);
        
        for (let i in this.config.stars)
       {
           this.drawStar(this.config.stars[i]);
       }
        /*
    -   Write the method drawStars.  It should
        -   clear the canvas
        -   repeatedly call the method drawStar
        -   bind the class to the method
        -   call the method in the constructor
        */

    }
    moveStar(star)
    {
        //console.log("moveStar")
        star.x=star.x+star.velocityX;
        star.y=star.y+star.velocityY;
        /*
         PART 2 - Animate the stars - you can do this with setInterval or an animation frame
    -   Write the method moveStar.  It should take a star as it's parameter and
        move the star based on it's x and y position as well as it's x and y velocities.
        When the star bumps into the edge of the canvas, it should reappear on the canvas
        in a reasonable place but don't worry too much about the physics!
        */
    }
    moveStars()
    {
        /*
        Write the method moveStars.  It should repeatedly call moveStar
        */
       
       for (let i in this.config.stars)
       {
           this.moveStar(this.config.stars[i]);
           

           if(this.config.stars[i].x>window.innerWidth||this.config.stars[i].y>window.innerHeight||
            this.config.stars[i].x<0||this.config.stars[i].y<0)
           {
               
               this.config.stars.splice(i,1);
           }
       }
    }
    animateStars()
    {
        
        this.$context.clearRect(0,0,this.$canvas.width,this.$canvas.height);
        this.createStars();
        this.moveStars();
        this.drawStars();
        /*
    -   Write the method animateStars.  It should 
        -   clear the canvas
        -   move the stars
        -   draw the stars
    -   Setup the animation in the constructor.  It should call animateStart every 1/60th 
        of a second.
    -   NOTICE THAT I CREATE A NEW OBJECT WHEN YOU RESIZE THE PAGE.  YOU'LL WANT TO CANCEL
        THE ANIMATION WHERE I'VE WRITTEN THAT COMMENT.
        */ 

    }
    /* Create a class called MidnightSky
  

  - PART 3 - Add lines between stars that are "close" to eachother and are near the mouse
    -   I've given you 2 methods highlight and drawLines that you can use.  Or you can write your own
    -   Write the method drawLines
    -   Call it in an appropriate place
    -   Write the method highlight
    -   Add a mousemove event handler to the canvas that references highlight.  
        drawLines takes the position of the mouse into account.      
*/
    highlight(e) {
        this.config.position.x = e.pageX - this.$canvas.offsetLeft;
        this.config.position.y = e.pageY - this.$canvas.offsetTop;
    }
    drawLines () {
        for (let i = 0; i < this.config.length; i++) {
            for (let j = 0; j < this.config.length; j++) {
                let iStar = this.config.stars[i];
                let jStar = this.config.stars[j];
                if ((iStar.x - jStar.x) < this.config.distance &&
                    (iStar.y - jStar.y) < this.config.distance &&
                    (iStar.x - jStar.x) > - this.config.distance &&
                    (iStar.y - jStar.y) > - this.config.distance) {
                    if ((iStar.x - this.config.position.x) < this.config.radius &&
                        (iStar.y - this.config.position.y) < this.config.radius &&
                        (iStar.x - this.config.position.x) > - this.config.radius &&
                        (iStar.y - this.config.position.y) > - this.config.radius) {
                        this.$context.beginPath();
                        this.$context.moveTo(iStar.x, iStar.y);
                        this.$context.lineTo(jStar.x, jStar.y);
                        this.$context.stroke();
                        this.$context.closePath();
                    }
                }
            }
        }
    }

    
}


let midnightsky;
window.addEventListener('load', () => midnightsky = new MidnightSky());
//window.addEventListener('resize', () => {
    // cancel the animation
   // midnightsky = new MidnightSky();
//});
