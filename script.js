const  selectContainer = document.getElementById('select-container');
const circle = document.getElementById('circle');
const childContainer = document.getElementById("child-container");
const butn = document.getElementById('butn')

//CIRCLE
    let circleTextArea = document.createElement('div');
    circleTextArea.className = 'area'

    let radiusInput = document.createElement('input');
    let circleText = document.createElement('h2')
    circleText.innerHTML = "AREA OF A RECTANGLE"
    radiusInput.name = 'radius'
    radiusInput.type = 'number'
    radiusInput.className = 'input'
    radiusInput.min = 1
    radiusInput.placeholder = 'Enter the radius'
    const circleBtn = document.createElement('button')
    const clrBtn = document.createElement('button');
    clrBtn.className = 'btn'
    clrBtn.innerHTML = 'Clear'
    circleBtn.className = 'btn'
    circleBtn.innerHTML = 'Calculate'
    circleBtn.addEventListener('click', calculateCircle)
    clrBtn.addEventListener('click', clear)

    let answerDiv = document.createElement('div');
    answerDiv.className = 'answer-container'

    circleTextArea.appendChild(radiusInput);
    circleTextArea.appendChild(circleBtn)
    childContainer.appendChild(circleTextArea)
    childContainer.appendChild(clrBtn)
    childContainer.appendChild(answerDiv);




    //TRIANGLE
    let triangleTextArea = document.createElement('div');
    triangleTextArea.className = 'area'
    let baseInput = document.createElement('input');
    baseInput.type = 'number'
    let heightInput = document.createElement('input');
    heightInput.type = 'number'
    baseInput.className = 'input'
    baseInput.placeholder = 'Enter the base'
    heightInput.className = 'input'
    heightInput.placeholder = 'Enter the height'
    const triangleBtn = document.createElement('button')
    triangleBtn.className = 'btn'
    triangleBtn.innerHTML = 'Calculate'
    triangleBtn.addEventListener('click', calculateTriangle)

    triangleTextArea.appendChild(baseInput);
    triangleTextArea.appendChild(heightInput);
    triangleTextArea.appendChild(triangleBtn)
    childContainer.appendChild(triangleTextArea)
    childContainer.appendChild(clrBtn)
    childContainer.appendChild(answerDiv);


    //SQUARE
    let squareTextArea = document.createElement('div');
    squareTextArea.className = 'area'
    let lengthInput = document.createElement('input');
    lengthInput.type = 'number'
    lengthInput.className = 'input'
    lengthInput.placeholder = 'Enter the length'
    const squareBtn = document.createElement('button')
    squareBtn.className = 'btn'
    squareBtn.innerHTML = 'Calculate'
    squareBtn.addEventListener('click', calculateSquare)

    squareTextArea.appendChild(lengthInput);
    squareTextArea.appendChild(squareBtn)
    childContainer.appendChild(squareTextArea)
    childContainer.appendChild(clrBtn)
    childContainer.appendChild(answerDiv);

    //RECTANGLE
    let rectangleTextArea = document.createElement('div');
    rectangleTextArea.className = 'area'
    let rectangleLengthInput = document.createElement('input');
    rectangleLengthInput.type = 'number'
    let breadthInput = document.createElement('input');
    breadthInput.type = 'number'
    rectangleLengthInput.className = 'input'
    breadthInput.className = 'input'
    rectangleLengthInput.placeholder = 'Enter the length'
    breadthInput.placeholder = 'Enter the breadth'
    const rectangleBtn = document.createElement('button')
    rectangleBtn.className = 'btn'
    rectangleBtn.innerHTML = 'Calculate'
    rectangleBtn.addEventListener('click', calculateRectangle)

    rectangleTextArea.appendChild(rectangleLengthInput);
    rectangleTextArea.appendChild(breadthInput);
    rectangleTextArea.appendChild(rectangleBtn)
    childContainer.appendChild(rectangleTextArea)
    childContainer.appendChild(clrBtn)
    childContainer.appendChild(answerDiv);

    //PARALLELOGRAM
    let parallelogramTextArea = document.createElement('div');
    parallelogramTextArea.className = 'area'
    let pBaseInput = document.createElement('input');
    pBaseInput.type = 'number'
    let pHeightInput = document.createElement('input');
    pHeightInput.type = 'number'
    pBaseInput.className = 'input'
    pBaseInput.placeholder = 'Enter the base'
    pHeightInput.className = 'input'
    pHeightInput.placeholder = 'Enter the height'
    const parallelogramBtn = document.createElement('button')
    parallelogramBtn.className = 'btn'
    parallelogramBtn.innerHTML = 'Calculate'
    parallelogramBtn.addEventListener('click', calculateParallelogram)

    parallelogramTextArea.appendChild(pBaseInput);
    parallelogramTextArea.appendChild(pHeightInput);
    parallelogramTextArea.appendChild(parallelogramBtn)
    childContainer.appendChild(parallelogramTextArea)
    childContainer.appendChild(clrBtn)
    childContainer.appendChild(answerDiv);

    triangleTextArea.style.display = 'none';
    squareTextArea.style.display = 'none'
    rectangleTextArea.style.display = 'none'
    parallelogramTextArea.style.display = 'none'


    selectContainer.addEventListener('change', toggle)

function toggle(){
    answerDiv.innerHTML = ""
    circleTextArea.style.display = 'none';
    triangleTextArea.style.display = 'none';
    squareTextArea.style.display = 'none'
    rectangleTextArea.style.display = 'none'
    parallelogramTextArea.style.display = 'none'

    if(selectContainer.value == 'circles'){
        circleTextArea.style.display = 'block'
    } else if(selectContainer.value == 'triangles'){
        triangleTextArea.style.display = 'block'
    }else if(selectContainer.value == 'squares'){
        squareTextArea.style.display = 'block'
    }else if(selectContainer.value == 'rectangles'){
    rectangleTextArea.style.display = 'block'
    }else if(selectContainer.vale = 'parallelograms'){
        parallelogramTextArea.style.display = 'block'
    }
}

    let inputs = document.querySelectorAll(".input");


function clear(){
    answerDiv.innerHTML = ""
    inputs.forEach(input => {
        input.value = ""
    })
}

//Calculations



    function calculateCircle(){ 
        answerDiv.innerHTML ="Area: " + ((22/7) * (radiusInput.value**2)).toFixed(2);
        if((radiusInput.value <= 0)||(radiusInput.value = "")){
            alert("Please input a valid number")
        }
    }
    function calculateTriangle(){
        answerDiv.innerHTML ="Area: " + ((1/2) * (baseInput.value) * (heightInput.value)).toFixed(2)
        if((baseInput.value <= 0)||(heightInput.value <= 0)){
            alert("Please input a valid number")
        }
        if((baseInput.value = "")||(heightInput.value = "")){
            alert("Both base and height are required")
        }
    }
    function calculateSquare(){
        answerDiv.innerHTML ="Area: " + (lengthInput.value**2).toFixed(2)
        if((lengthInput.value <= 0)||(lengthInput.value = "")){
            alert("Please input a valid number")
        }
    }
    function calculateRectangle(){
        answerDiv.innerHTML ="Area: " + ((rectangleLengthInput.value)*(breadthInput.value))
        if((rectangleLengthInput.value <= 0)||(breadthInput.value <= 0)){
            alert("Please input a valid number")
        }
        if((rectangleLengthInput.value = "")||(breadthInput.value = "")){
            alert("Both length and breadth are required")
        }
    }
    function calculateParallelogram(){
        answerDiv.innerHTML ="Area: " + ((pBaseInput.value)*(pHeightInput.value))
        if((pBaseInput.value <= 0)||(pHeightInput.value <= 0)){
            alert("Please input a valid number")
        }
        if((pBaseInput.value = "")||(pHeightInput.value = "")){
            alert("Both base and height are required")
        }
    }
    

