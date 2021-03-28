

 


    

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
        }, 200);
        
        })(10, 10, 3, 1, 1, 0, 0, 0, false, null);  

      
   /*   class snake {

        
          

            constructor(width, height, length, current, dx, dy, x, y, hasFood, newEl) {
              this.width = width;
              this.height = height;
              this.length = length;
              this.current = current;
              this.dx = dx;
              this.dy = dy;
              this.x = x;
              this. y = y;
              this.hasFood = hasFood;
              this.newEl = newEl;
            }

        }
            document.body.onkeydown = function(e){
                dx = (e.keyCode - 38) % 2, dy = (e.keyCode - 39) % 2;
            }; 

        
            var timer = setInterval  snake(10, 10, 3, 1, 1, 0, 0, 0, false, null) 
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
         300;
         */
        //it does't work
     
        