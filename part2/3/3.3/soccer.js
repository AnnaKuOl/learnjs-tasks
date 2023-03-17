let isDragging = false;
document.addEventListener('mousedown', (event) => {
    let draggableElem = event.target.closest('.draggable');
    if(!draggableElem) return;
    event.preventDefault();
    draggableElem.ondragstart = function() {
        return false;
    };
    let shiftX, shiftY;
    function startDrag(elem, clientX, clientY){
        if(isDragging) return;
        isDragging = true;
        document.addEventListener('mousemove', onMouseMove);
        elem.addEventListener('mouseup', onMouseUp);
        shiftX = clientX - elem.getBoundingClientRect().left;
        shiftY = clientY - elem.getBoundingClientRect().top;
        elem.style.position = 'fixed';
        moveAt(clientX, clientY)
    };
    function onMouseUp() {
        finishDrag();
    };
    
    function onMouseMove(event) {
        moveAt(event.clientX, event.clientY);
    }
    function moveAt(clientX, clientY){
        let newX = clientX - shiftX;
        let newY = clientY - shiftY;
        let newBottom = newY + draggableElem.offsetHeight;
        if( newBottom > document.documentElement.clientHeight){
            let docBottom = document.documentElement.getBoundingClientRect().bottom;
            let scrollTo = Math.min(docBottom- newBottom, 10);
            if(scrollTo < 0) scrollTo = 0;
            window.scrollBy(0, scrollTo);
            newY = Math.min(newY, document.documentElement.clientHeight - draggableElem.offsetHeight);
        }
        if(newY < 0) {
                let scrollTo = Math.min(-newY, 10);
                if(scrollTo < 0) scrollTo = 0;
                window.scrollBy(0, -scrollTo);
                newY = Math.max(newY, 0); 
        }
        if (newX < 0) newX = 0;
        if (newX > document.documentElement.clientWidth - draggableElem.offsetWidth) {
          newX = document.documentElement.clientWidth - draggableElem.offsetWidth;
        }
    
        draggableElem.style.left = newX + 'px';
        draggableElem.style.top = newY + 'px';
        
    }
    function finishDrag() {
        if(!isDragging) return;    
        isDragging = false;
    
        draggableElem.style.top = parseInt(draggableElem.style.top) + pageYOffset + 'px';
        draggableElem.style.position = 'absolute';
    
        document.removeEventListener('mousemove', onMouseMove);
        draggableElem.removeEventListener('mouseup', onMouseUp);
    }
    startDrag(draggableElem, event.clientX, event.clientY);


    
})