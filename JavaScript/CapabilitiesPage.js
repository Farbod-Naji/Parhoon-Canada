// This file is responsible for adding the feature needed to page Capabilities

// ---------------------------------------------------------------------
// This code helps the list on listPage appeare more organized on ultra wide screens (2770px width up)
// It does this by adding a number of invisible element [span with class="tempSpan"] to the ul element
// This along with the "flex wrap" and "margin-right: auto" commands in CapabilitiesPage2.css to organize the elements in a consistent column sizes in every row
// Without this code, the spacing between li elements (done by "margin-right: auto") could be inconsistent on the final row 
// ---------------------------------------------------------------------

AdjustListElements();
window.addEventListener("resize", AdjustListElements);

function AdjustListElements(){
    console.clear();

    // get the needed elements from document
    var list = document.getElementById('JS-List');
    var listElement = document.getElementById('JS-List-Final-Element');
    var numOfListElements = list.getElementsByTagName("li").length

    // calculate the width of the elements
    var list_contentWidth = list.clientWidth;

    var listElement_contentWidth = listElement.clientWidth;
    var listElement_leftMargin = parseInt( getComputedStyle(listElement).marginLeft );
    var listElement_finalWidth = listElement_leftMargin + listElement_contentWidth;

    // calculate the number of number Of Columns and elements on the final rows
    var numOfColumns = Math.floor(list_contentWidth / listElement_finalWidth);

    var numOfElementsFinalRow = (numOfListElements % numOfColumns);

    // if the element is alone on the final row or the final row is filled already, no modifications needed
    var numOfElementsNeeded = 0;
    if ((numOfElementsFinalRow > 1) && (numOfElementsFinalRow != numOfColumns)) {
        var numOfElementsNeeded = numOfColumns - numOfElementsFinalRow;
    } 

    // get the number of empty spans added on last call of the functions
    var SpanElements = document.getElementsByClassName("tempSpan");
    var NumOfSpans = SpanElements.length;
    
    // if any span is needed to be added
    if (numOfElementsNeeded > NumOfSpans){
        function insertAfter(referenceNode, newNode) {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }
    

        for (let i = 0; i < numOfElementsNeeded; i++) {
            var temp = document.createElement("span");
            temp.innerHTML = "";
            temp.classList.add("tempSpan");
            insertAfter(listElement, temp);
        }

    }
    
    // if we already have the more empty spans than needed
    else if (numOfElementsNeeded < NumOfSpans){
        for (let i = 0; i < (NumOfSpans - numOfElementsNeeded); i++) {
            SpanElements[0].remove();
        }
    }
};