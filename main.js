
let hsl = (h, s, l) => `hsl(${h},${s}%,${l}%)`
let closeEnough = 10
let dragTL = false
let dragBL = false
let dragTR = false
let dragBR = false
let drag = false
let mouseX=null
let mouseY=null
const widthPercent = 0.8;
let zoomLevel = 1;
let prtcls = []
let startPos = {};

let canvas = document.getElementById('mycanvas')
let canvas2 = document.getElementById('mycanvas2')
let ctx = canvas.getContext('2d')
let ctx2 = canvas2.getContext('2d')
let w = canvas.width = canvas2.width = window.innerWidth * widthPercent;
let h = canvas.height = canvas2.height = window.innerHeight * 0.9;

canvas.style.backgroundColor = 'transparent'
canvas2.style.backgroundColor = 'yellow'

ctx.lineWidth = 2
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.font = '10px Arial'

let camera = {
    x : 0,
    y : 0
}
let setting = {
    diff : 10
}

let drawCoords = (ctx, x, y, color = "green", w, h) => {
    ctx.save()
    ctx.translate(x, y)
    ctx.fillStyle = color
    ctx.fillRect(-45, -7, 30, 14)
    ctx.fillStyle = 'white'
    ctx.fillText(Math.floor(x), -30, 0)

    ctx.fillStyle = 'black'
    ctx.fillRect(w / 2 - 15, -14, 30, 14)
    ctx.fillStyle = 'white'
    ctx.fillText(Math.floor(w), w / 2, -7)

    ctx.rotate(Math.PI / 2)
    ctx.fillStyle = color
    ctx.fillRect(-45, -7, 30, 14)
    ctx.fillStyle = 'white'
    ctx.fillText(Math.floor(y), -30, 0)

    ctx.fillStyle = 'black'
    ctx.fillRect(h / 2 - 15, 0, 30, 14)
    ctx.fillStyle = 'white'
    ctx.fillText(Math.floor(h), h / 2, 7)

    ctx.restore()
}

let checkCloseEnough= (p1, p2) => {
    console.log(29,closeEnough)
    return Math.abs(p1 - p2) < closeEnough;
}

let mouseUp= ()=> {
    dragTL = dragTR = dragBL = dragBR = false;
}

let mouseDown= (e,mouse)=> {

//let mouse = getMouseCoords(canvas,this)
console.log(41, e, mouse,dragTL,dragTR,dragBL,dragBR,mouseX,mouseY)

}    

let drawHandles = (ctx, x, y, w, h,color = "red", sh) => {
    ctx.save()
    ctx.translate(x, y)
    ctx.fillStyle = color
    switch(sh)
      {
        case 'rect':
          ctx.fillRect(-10, -10, 15, 15)
          ctx.fillRect(w-5, h-5, 15, 15)
          ctx.fillRect(w-5, -10, 15, 15)
          ctx.fillRect(-10, h-5, 15, 15)
         break;
        case 'round':
          ctx.fillRect(-10, (w/2-10), 15, 15)
          ctx.fillRect(h-5,(w-15)/2, 15, 15)
          ctx.fillRect((h/2-10),-10, 15, 15)
          ctx.fillRect((h/2-10),h-5, 15, 15)
        break;
      }
    ctx.restore()
    //ctx.fillText(Math.floor(x), -30, 0)
}

let drawBG = context => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.scale(zoomLevel, zoomLevel);

    context.save()

    context.fillStyle = 'white'
    context.fillRect(0, 0, w / zoomLevel, h / zoomLevel)
    context.lineWidth = 0.3;
    context.strokeStyle = 'lightgray'
    context.fillStyle = 'black'

    for (let i = 1; i < w / zoomLevel; i++) {
        context.beginPath()
        if (i % 10 === 0) {
            context.moveTo(i, 0);
            context.lineTo(i, h)
            context.moveTo(i, 0);
        }
        context.closePath()
        context.stroke()
    }

    for (let i = 1; i < h / zoomLevel; i++) {
        context.beginPath()
        if (i % 10 === 0) {
            context.moveTo(0, i)
            context.lineTo(w, i)
            context.moveTo(0, i)
        }
        context.closePath()
        context.stroke()
    }


    context.lineWidth = 1
    context.strokeStyle = 'gray'

    context.beginPath()
    for (let i = 50; i < w / zoomLevel; i += 10) {
        if (i % 50 === 0) {
            context.moveTo(i, 0)
            context.lineTo(i, 30)
            context.fillText(` ${i}`, i, 30)
        } else {
            context.moveTo(i, 0)
            context.lineTo(i, 10)
        }

    }
    context.closePath()
    context.stroke()

    context.beginPath()
    for (let i = 50; i < h / zoomLevel; i += 10) {
        if (i % 50 === 0) {
            context.moveTo(0, i)
            context.lineTo(30, i)
            context.fillText(` ${i}`, 30, i)
        } else {
            context.moveTo(0, i)
            context.lineTo(10, i)
        }

    }
    context.closePath()
    context.stroke()
    context.restore()

    context.setTransform(1, 0, 0, 1, 0, 0);
}

drawBG(ctx2)

class Square {
    constructor(j) {
        this.x = j.x
        this.y = j.y
        this.w = j.width
        this.h = j.height
        this.shape=j.shape
        this.table=j.tableName     
        this.tableId=j.tableId
             
        this.bookings=j.bookings
        this.color = j.color
        this.lastName = j.lastName
        this.covers=j.covers
        this.children=j.children
        this.time=j.time
        this.url=j.url
        this.shift=0
        this.expandX = j.expandX
        this.expandY = j.expandY
        this.lockRatio = j.lockRatio
        
        if(this.url) {
            this.img = new Image();
            this.img.src = this.url;
            this.isImg = false;
            this.img.onload = () => {
                this.isImg = true;
            }
        }

        this.selected = false
        this.active = false
        this.resize = false
    }
    draw(context) {
        context.fillStyle = this.bookings?this.bookings[0].color:'green'
      
        if (this.active) {
            context.fillStyle = this.color;
            context.save()
            context.setLineDash([10, 5, 30, 5])
            context.beginPath()
            context.moveTo(this.x, this.y)
            context.lineTo(0, this.y)
            context.moveTo(this.x, this.y)
            context.lineTo(this.x, 0)
            context.moveTo(this.x, this.y)
            context.closePath()
            context.lineWidth = 0.5
            context.strokeStyle = this.activeColor
            context.stroke()

            
            drawCoords(context, this.x, this.y, this.activeColor, this.w, this.h)
            

            context.restore()
        }
        context.beginPath();

        switch (this.shape)
        {
            case 'rect':
                context.fillRect(this.x, this.y, this.w, this.h)
                break;
            case 'image':
                if(this.isImg) {
                    context.drawImage (this.img, this.x, this.y, this.w, this.h);
                }
                break;
            case 'roundRect':
                this.drawRoundedRect(context, 10)
                break;
            case 'octagonal':
                this.drawOctagon(context, this.x + this.w / 2, this.y + this.w / 2, this.w / 2)
                break;
            case 'round':
                context.arc(this.x + (this.w / 2), this.y + (this.h / 2), this.w / 2, 0, 2 * Math.PI, true);
                context.fillStyle = this.bookings? this.bookings[this.shift].color :'green'
                context.fill();
                break;
            case 'ecllipse':
                context.ellipse(this.x + (this.w / 2), this.y + (this.h / 2), this.w / 2, this.h / 2, 0, 0, 2 * Math.PI);
                context.fillStyle = this.bookings? this.bookings[this.shift].color :'green'
                context.fill();
                break;
        }
      context.font="20px Arial";
      context.textAlign="center"; 
      context.textBaseline = "middle";
      context.fillStyle = "#ffffff";          
      context.fillText(this.table,this.x+(this.w/2),this.y+(this.h/2)); 
      context.font="12px Arial";
      if( this.bookings)
      {
        //let booking=this.bookings[this.shift];
        //context.fillText(booking.lastName,this.x+(this.w/2),this.y+(this.h/2));  
        //context.font="12px Arial";
        //context.fillText(booking.children?booking.covers + '+' + booking.children:booking.covers,this.x+(this.w/2),this.y+this.h-30); 
        //context.fillText(booking.time,this.x+(this.w/2),this.y+this.h-10);     
      }
        if (this.selected || this.resize) {
            context.lineWidth = 2;
            context.strokeStyle = this.activeColor2
            context.strokeRect(this.x, this.y, this.w, this.h)
        }
      
      if (this.active) {
        // drawHandles(context, this.x, this.y, this.w, this.h, this.activeColor,this.shape);
        //mouseDown(this);
      }
    }

    drawRoundedRect(context, radius) {
        context.beginPath();
        context.moveTo(this.x + radius, this.y);
        context.arcTo(this.x + this.w, this.y, this.x + this.w, this.y + this.h, radius);
        context.arcTo(this.x + this.w, this.y + this.h, this.x, this.y + this.h, radius);
        context.arcTo(this.x, this.y + this.h, this.x, this.y, radius);
        context.arcTo(this.x, this.y, this.x + this.w, this.y, radius);
        context.closePath();
        // context.stroke();
        context.fillStyle = this.color;
        context.fill();
    }

    drawOctagon(context, x, y, sideLength) {
        // context.beginPath();
        // context.moveTo(x + sideLength * Math.cos(0), y + sideLength * Math.sin(0));
        // for (let i = 1; i <= 8; i++) {
        //   const angle = i * (Math.PI / 4);
        //   context.lineTo(x + sideLength * Math.cos(angle), y + sideLength * Math.sin(angle));
        // }
        // context.closePath();
        // context.stroke();
        // context.fillStyle = this.color;
        // context.fill();
        let offset = 8
        let offsetAngle = 2 * Math.PI / 16;

        sideLength *= 1.08

        context.beginPath();
        context.moveTo(x + sideLength * Math.cos(offsetAngle), y + sideLength * Math.sin(offsetAngle));


        for (let side = 0; side <= offset; side++) {
            context.lineTo(x + sideLength * Math.cos(offsetAngle + side * 2 * Math.PI / offset), y + sideLength * Math.sin(offsetAngle + side * 2 * Math.PI / offset));
        }

        context.fillStyle = this.color;
        context.fill();

    }

    update() {
        this.x += 0.1
    }

    select() {
        this.selected = !this.selected
    }

    activate() {
        this.active = !this.active
    }

    activateResize() {
        this.resize = !this.resize;
    }
}





let getMouseCoords = (canvas, event) => {
    let canvasCoords = canvas.getBoundingClientRect()
    return {
        x: (event.pageX - canvasCoords.left) / zoomLevel,
        y: (event.pageY - canvasCoords.top) / zoomLevel
    }
}

let getOffsetCoords = (mouse, rect) => {
    return {
        x: mouse.x - rect.x,
        y: mouse.y - rect.y
    }
}





let arr = new Array(40).fill('empty').map(() => Math.floor(Math.random() * 100))

let cursorInRect = (mouseX, mouseY, rectX, rectY, rectW, rectH) => {
    let xLine = mouseX > rectX && mouseX < rectX + rectW
    let yLine = mouseY > rectY && mouseY < rectY + rectH

    return xLine && yLine
} 


// =============================================================
//                          HANDLERS
// =============================================================


window.addEventListener('resize', () => {
    w = canvas.width = canvas2.width = window.innerWidth * widthPercent;
    h = canvas.height = canvas2.height = window.innerHeight * 0.9;
    drawBG(ctx2)
})

canvas.addEventListener('click', e => {
    let mouse = getMouseCoords(canvas, e);
    console.log(JSON.stringify(getIt()))
})

canvas.addEventListener('dblclick', e => {
    let mouse = getMouseCoords(canvas, e);

    prtcls.forEach(e => {
        console.log(e.w)
          if (cursorInRect(mouse.x, mouse.y, e.x, e.y, e.w, e.h)) {
              e.resize = true
              e.offset = getOffsetCoords(mouse, e)
          } else {
              e.resize = false
          }
      })

})

function getIt(type = '')
{
    let json = [];
    if(type == 'tables') {
        
        prtcls.forEach(e => {
            json.push({
                "active":true,
                "tableId": e.tableId,
                "tableName": e.table,
                "width": e.w,
                "height": e.h,
                "shape": e.shape,
                "x": e.x,
                "y": e.y
            });
        })
    } else {
        prtcls.forEach(e => {
            json.push({
                name: e.table,
                xPos: e.x,
                yPos: e.y
            })
        })
    }

    return json;
}

canvas.addEventListener('mousemove', e => {
    let diff = {
        x : Math.round((e.pageX - startPos.x) / 10) * 10,
        y : Math.round((e.pageY - startPos.y) / 10) * 10,
    };
    if(e.which == 2) {
        camera.x = startPos.originX + diff.x;
        camera.y = startPos.originY + diff.y;
        camera.x = Math.max(0, camera.x);
        camera.y = Math.max(0, camera.y);
        drawBG(ctx2)
    } else {
        let mouse = getMouseCoords(canvas, e)

        let arr = prtcls.map(e => cursorInRect(mouse.x, mouse.y, e.x, e.y, e.w, e.h))
        !arr.every(e => e === false) ? canvas.classList.add('pointer') : canvas.classList.remove('pointer')
        prtcls.forEach(e => {
            if (e.selected) {
                let newX = Math.round((mouse.x - e.offset.x)/10)*10
                let newY = Math.round((mouse.y - e.offset.y)/10)*10
                if(e.resize) {
                    let diff = {
                        x : Math.round((mouse.x - e.startPos.x) / setting.diff) * setting.diff,
                        y : Math.round((mouse.y - e.startPos.y) / setting.diff) * setting.diff,
                    }

                    diff.x = e.expandX? diff.x : 0;
                    diff.y = e.expandY? diff.y : 0;

                    if(e.lockRatio) {
                        diff.y = diff.x * (e.h / e.w);
                    }

                    if(e.shape == 'round') {
                        e.w = e.startPos.originW + diff.x;
                        e.h = e.startPos.originH + diff.x;
                    } else {
                        e.w = e.startPos.originW + diff.x;
                        e.h = e.startPos.originH + diff.y;
                    }
    
                    e.w = Math.max(10, e.w)
                    e.h = Math.max(10, e.h)
                } else {
                    e.x = newX
                    e.y = newY
                }
    
            }
            cursorInRect(mouse.x, mouse.y, e.x, e.y, e.w, e.h) ?
                e.active != true ? e.activate() : false
                : e.active = false
        })
    }
})


canvas.addEventListener('mousedown', e => {
    if(e.which == 2) {
        canvas.classList.add('hand');
        startPos = {
            x : e.pageX,
            y : e.pageY,
            originX: camera.x,
            originY: camera.y
        }
    } else {
        let mouse = getMouseCoords(canvas, e)
        prtcls.forEach(e => {
          console.log(e.w)
            if (cursorInRect(mouse.x, mouse.y, e.x, e.y, e.w, e.h)) {
                e.selected = true
                e.offset = getOffsetCoords(mouse, e)
                if(e.resize) {
                    e.startPos = {
                        x : mouse.x,
                        y : mouse.y,
                        originW : e.w,
                        originH : e.h
                    }
                }
            } else {
                e.selected = false
            }
        })
    }
})

canvas.addEventListener('mouseup', e => {
    console.log("camera : ", camera)
    if(e.which == 2) {
        canvas.classList.remove('hand')
    } else {
        prtcls.forEach(e => {
            e.selected = false
        })
    }
})

canvas.addEventListener("contextmenu", e => {
    //event.preventDefault();
  console.log(e)
});


canvas.addEventListener('wheel', handleScroll);

function handleScroll(event) {
  event.preventDefault(); // Prevent default scroll behavior

  const zoomSpeed = 0.1; // Adjust this value to control the zoom speed
  const scrollDelta = Math.sign(event.deltaY); // Get the scroll direction (1 for zoom in, -1 for zoom out)

  // Calculate the new zoom level
  zoomLevel -= scrollDelta * zoomSpeed;

  // Limit the zoom level to a specific range if desired
  // For example, you can use:
  zoomLevel = Math.max(0.5, Math.min(zoomLevel, 8));

//   // Apply the zoom level to the canvas
//   ctx2.clearRect(0, 0, canvas.width, canvas.height);
//   ctx2.scale(zoomLevel, zoomLevel);

  // Redraw your canvas content here
  // ...
  drawBG(ctx2)

  // Reset the canvas scale to avoid cumulative scaling
//   ctx2.setTransform(1, 0, 0, 1, 0, 0);
}


// =============================================================
//                          MAIN LOOP
// =============================================================

function animate() {
    ctx.clearRect(0, 0, w, ctx.canvas.height)
    ctx.scale(zoomLevel, zoomLevel);

    ctx.fillStyle = 'white'
    prtcls.forEach(e => {
        e.select = true
        e.draw(ctx)
    })
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    window.requestAnimationFrame(animate)
}

animate()

initTables()
// ================================================================
//                          Logic Part
// ================================================================

function getVirtualHallData() {
    let tables = getIt('tables');
    virtualHallJSON[0]['tables'] = tables;

    console.log("Virtual Hall Json Data :  ", virtualHallJSON)
}


function initTables() {
    let tableDiv = document.getElementById('tables-div');
    tableDiv.innerHTML = tables.filter(t => t.virtualHallId == null).map((t, i) => `
        <div id="${t.tableId}" name="${t.tableName}" type="${i != 1? 'rect' : 'round'}" class="card ${i != 1? '' : 'round'}" draggable="true" ondragstart="dragCard(event)">
            <span>${t.tableName}</span>
        </div>
    `)


    // let json=tablesDetail.map(t => ({
    //     ...t,
    //     width: t.w,
    //     height: t.h,
    //     tableName: t.shape
    // }));

    let json = virtualHallJSON[0]['tables'];
    prtcls = new Array(json.length).fill().map((a,idx) => new Square(json[idx]))

}

function setShape(type = 'rect') {
    prtcls.forEach(e => {
        if(e.resize) {
            if(type == 'color') {
                e.color = document.getElementById('color').value;
            } else {
                e.shape = type;
                if(type == 'round') {
                    e.h = e.w;
                }
            }
        }
    })
}

// ================================================================
//                          Drag card Part
// ================================================================
function allowDropCard(ev) {
    ev.preventDefault();
}
  
function dragCard(ev) {
    // ev.dataTransfer.setData("card", { 
    //     id : ev.target.id,
    //     name: ev.target.name
    // });
    ev.dataTransfer.setData("card", ev.target.id);
    ev.dataTransfer.setData("cardName", ev.target.getAttribute('name'));
    ev.dataTransfer.setData("cardType", ev.target.getAttribute('type'));
}

function dropCard(ev) {
    ev.preventDefault();
    let id = ev.dataTransfer.getData("card");
    let name = ev.dataTransfer.getData("cardName");
    let type = ev.dataTransfer.getData("cardType");
    let json = {...defaultParelData};

    document.getElementById(id).remove()


    let canvasCoords = canvas.getBoundingClientRect()

    json['tableId'] = id;
    json['tableName'] = name;
    json['shape'] = type;
    json['x'] = (event.pageX - canvasCoords.left) / zoomLevel;
    json['y'] = (event.pageY - canvasCoords.top) / zoomLevel;

    let newPrtcls = new Square(json);
    prtcls.push(newPrtcls)
}