/* function Car(wheel, smth, engine, name) {

    this.wheel = wheel;
    this.color = smth;
    this.engine = engine;
    this.name = name;
    
    this.run = () => {
      console.log("we run")
      console.log(this)
    } 
    
    }
    
    
    const thing = new Car(4, "blue", "v12", "test")
    thing.run() */

    /* class Car {
        countWheels = 4
        color = ''
        engine = ''
        name = ''
      
        constructor(countWheels, color, engine, name){
          this.countWheels = countWheels
          this.color = color
          this.engine = engine
          this.name = name
        }

        run() {
            console.log("we run" + this.name)
        }

        givename() {
            console.log(this.name)
        }

        log() {
            console.log(this)
        }

      }

      
    const lol = new Car(4, "red", "v12", "smth")  
    lol.log() */

    //if u see this text, know i'm working about code here and ik i copied html and css, it's boring to do html and css


    

    (function(width, height, length, current, dx, dy, x, y, hasFood, newEl){     
    
        document.body.onkeydown = function(e){
            dx = (e.keyCode - 38) % 2, dy = (e.keyCode - 39) % 2;
        };
            
        var timer = setInterval(function () {
            x = (x + dx) < 0 ? width - 2 : (x + dx) % width; 
            y = (y + dy) < 0 ? height - 2 : (y + dy) % height;
            newEl = document.getElementsByClassName(y + '_' + x)[0]
            if(newEl.className.indexOf('s') > 0) {
                clearInterval(timer), alert('U lose! Score: ' + length)
            };
            if(newEl.className.indexOf('f') > 0) {
                newEl.className = newEl.className.replace(' f', ''), length++, hasFood = false;
            }
            newEl.className += ' s', newEl.setAttribute('data-n', current++);
        
            for(var i = 0, min = Infinity, item, items = document.getElementsByClassName('s'), len = items.length; i < len && len > length; i++)
                if(+items[i].getAttribute('data-n') < min)
                    min = +items[i].getAttribute('data-n'), item = items[i];
        
            if(!!item) item.className = item.className.replace(' s', '');
        
            for(var fItem, fX, fY; !hasFood; fX = Math.round(Math.random() * 10 % width), fY = Math.round(Math.random() * 10 % height))
                if(!!fX && !!fY && document.getElementsByClassName(fY + '_' + fX)[0].className.indexOf('s') < 0)
                    hasFood = true, document.getElementsByClassName(fY + '_' + fX)[0].className += ' f';
        }, 1000);
        
        })(10, 10, 3, 1, 1, 0, 0, 0, false, null);
    