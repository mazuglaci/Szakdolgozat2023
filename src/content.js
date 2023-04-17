const { detailedDiff } = require("deep-object-diff")
const objectToTable = require("object-to-table")
const { drawComplete, randomPersonObj, drawBackGround } = require("./canvas/personDrawer")
const keysList = require("./data/keysList")
const readExample = require("./data/readExample")
const readTask = require("./data/readTask")
const codeMirrorSetup = require("./helper/codeMirrorSetup")
const { objectEqual, flatObjectDiff } = require("./helper/functions")
const { parseByFormat } = require("./helper/serializeByFormat")

/**
 * @param {HTMLElement} containerDiv 
 * @param {{id:Number, text:String, type:String, source:String}} selectedItem 
*/
exports.loadExample = (containerDiv, selectedItem)  => {
    const descriptionDiv = containerDiv.querySelector("#descriptionArea")
    let taskHTML = readExample(selectedItem.source)
    descriptionDiv.innerHTML = taskHTML
    let codeDivs = [...descriptionDiv.querySelectorAll("div.example")]
    let codeMirror
    for(let codeDiv of codeDivs) {
        codeMirror = codeMirrorSetup(codeDiv, codeDiv.dataset.format, true)
        codeMirror.setValue(readExample(codeDiv.dataset.source))
    }
}

/**
 * @param {HTMLElement} containerDiv 
 * @param {{id:Number, text:String, type:String, format:String, source:String, friends:Boolean?}} selectedItem 
*/
exports.loadTask = (containerDiv, selectedItem)  => {
    let textOG, objOG
    if(selectedItem.id === "random") {
        objOG = randomPersonObj(selectedItem.friends ?? true)
    } else {
        const OG= readTask(selectedItem.source)
        objOG = OG.obj
        textOG = OG.text
    }
    console.log(objOG)
    
    const canvas = containerDiv.querySelector("#dataPictureArea canvas")
    drawWhenReady(canvas, objOG)
    
    const tableDiv = containerDiv.querySelector("#dataTableArea")
    let table = objectToTable(objOG)
    tableDiv.innerHTML = table

    const codeAreaDiv = containerDiv.querySelector("#codeArea")
    let codeArea = codeMirrorSetup(codeAreaDiv, selectedItem.format)

    const checkButton = containerDiv.querySelector("#checkArea #checkButton")
    const correctSpan = containerDiv.querySelector("#checkArea #correctSpan")
    const answerButton = containerDiv.querySelector("#checkArea #answerButton")
    checkButton.innerText = "Válasz ellenőrzése"
    const testEqual = () => {
        try {
            const objAnswer = parseByFormat(codeArea.getValue(), selectedItem.format)
            console.log(objAnswer)
            if(objectEqual(objAnswer, objOG)) {
                correctSpan.style.color = "green"
                correctSpan.innerText = "✔️ Helyes megoldás ✔️"
            } else {
                console.log(detailedDiff(objOG, objAnswer))
                correctSpan.style.color = "red"
                correctSpan.innerText = "❌ Hibás megoldás ❌\nKülönbségek:"
                flatObjectDiff(objOG, objAnswer).forEach(diff => {
                    correctSpan.innerText += `\n${diff}`
                })
            }
        } catch(e) {
            console.error(e)
            correctSpan.style.color = "red"
            correctSpan.innerText = "❌ Hibás szintaxis ❌"
        }
    }
    checkButton.addEventListener("click", testEqual)
    answerButton.innerText = "Megoldás mutatása"
    answerButton.addEventListener("click", () => {
        if(confirm("Beírt válasz felülírása a megoldással?")) {
            codeArea.setValue(textOG)
        }
    })
    if(selectedItem.id === "random") {
        answerButton.classList.add("hidden")
    }
}

/**
 * @param {HTMLElement} containerDiv 
 * @param {{id:Number, text:String, type:String, format:String, source:String}} selectedItem 
*/
exports.loadBackWardsTask = (containerDiv, selectedItem)  => {
    const canvas = containerDiv.querySelector("#dataPictureArea canvas")
    drawBackGround(canvas)
    
    const tableDiv = containerDiv.querySelector("#dataTableArea")
    if(!(selectedItem.friends ?? true)) {
        delete keysList.friends
    }
    let table = objectToTable(keysList)
    tableDiv.innerHTML = table

    const codeAreaDiv = containerDiv.querySelector("#codeArea")
    let codeArea = codeMirrorSetup(codeAreaDiv, selectedItem.format)

    const checkButton = containerDiv.querySelector("#checkArea #checkButton")
    const correctSpan = containerDiv.querySelector("#checkArea #correctSpan")
    const answerButton = containerDiv.querySelector("#checkArea #answerButton")
    checkButton.innerText = "Rajzolás"
    let objToDraw
    const testSyntax = () => {
        try {
            objToDraw = parseByFormat(codeArea.getValue(), selectedItem.format)
            console.log(objToDraw)
        } catch(e) {
            console.error(e)
            correctSpan.style.color = "red"
            correctSpan.innerText = "❌ Hibás szintaxis ❌"
            drawBackGround(canvas)
            return;
        }
        try {
            drawComplete(canvas, objToDraw)
        } catch(e) {
            console.error(e)
            correctSpan.style.color = "red"
            correctSpan.innerText = "❌ Hibás értékek ❌"
            drawBackGround(canvas)
            return;
        }
        correctSpan.style.color = "green"
        correctSpan.innerText = "✔️ Sikeres rajzolás ✔️"
    }
    checkButton.addEventListener("click", testSyntax)
    answerButton.classList.add("hidden")
}

function drawWhenReady(canvas, obj) {
    const toDrawDiv = document.querySelector("#toDraw")
    const images = [...toDrawDiv.querySelectorAll("img")]
    const imgCount = images.length
    let loadedCount = images.filter(img => img.complete).length
    if(loadedCount === imgCount) {
        drawComplete(canvas, obj)
    } else {
        for(let img of images) {
            img.addEventListener("load", () => {
                loadedCount++
                if(loadedCount === imgCount) {
                    drawComplete(canvas, obj)
                }
            })
        }
    }
}