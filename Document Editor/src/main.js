import './../scss/main.scss';
/**
 * @type Button     Getting element Button Bold in a Variable
 */
let btn_Bold = document.getElementById('btnBold');

/**
 * @type Button     Getting Button Italics in a Variable
 */
let btn_Italics = document.getElementById("btnItalics");

/**
 * @type Button     Getting element Button Underline in a Variable
 */
let btn_Underline = document.getElementById("btnUnderline");



/************************************************************************************************************ */
/**
 * 
 * @param {event} event     Function on clicking Bold Button
 */
let boldClickListener = (event) => {

    let selection = window.getSelection();
    let selectedText = selection.toString();
    let range = selection.getRangeAt(0);
    let parent = selection.anchorNode.parentElement;

    if (parent == "container") {
        let span = document.createElement('span');
        span.classList = 'makeBold';
        span.innerHTML = selectedText;
        console.log(span.innerText)
        range.deleteContents();
        range.insertNode(span);
    }
    else {

        if (!parent.classList.contains("makeBold") && !parent.classList.contains("makeNormal")) {

            let upperParent = parent.parentElement;
            if (!upperParent.classList.contains("makeBold") && !upperParent.classList.contains("makeNormal")) {

                let superParent = upperParent.parentElement;
                if (!superParent.classList.contains("makeBold")) {

                    if (superParent.classList.contains("makeNormal")) {

                        superParent.classList.remove('makeNormal');
                        superParent.classList.add('makeBold');
                        span.innerHTML = selectedText;
                        range.deleteContents();
                        range.insertNode(span);
                    }
                    else {
                        let span = document.createElement('span');
                        span.classList.add('makeBold');
                        span.innerHTML = selectedText;
                        range.deleteContents();
                        range.insertNode(span);
                    }

                }
                else {
                    superParent.classList.remove('makeBold');
                    superParent.classList.add('makeNormal');
                    span.innerHTML = selectedText;
                    range.deleteContents();
                    range.insertNode(span);
                }
            }
            else {
                if (upperParent.classList.contains("makeBold")) {
                    upperParent.classList.remove('makeBold');
                    upperParent.classList.add('makeNormal');
                    span.innerHTML = selectedText;
                    range.deleteContents();
                    range.insertNode(span);
                }
                else {
                    upperParent.classList.remove('makeNormal');
                    upperParent.classList.add('makeBold');
                    span.innerHTML = selectedText;
                    range.deleteContents();
                    range.insertNode(span);
                }
            }
        }
        else {
            if (parent.classList.contains("makeBold")) {
                parent.classList.remove('makeBold');
                parent.classList.add('makeNormal');
                span.innerHTML = selectedText;
                range.deleteContents();
                range.insertNode(span);
            }
            else {
                parent.classList.remove('makeNormal');
                parent.classList.add('makeBold');
                span.innerHTML = selectedText;
                range.deleteContents();
                range.insertNode(span);
            }
        }
    }
};

btn_Bold.addEventListener('click', boldClickListener);


/************************************************************************************************************ */
/**
 * 
 * @param {event} event     Function on clicking Italics Button
 */
let italicsClickListener = (event) => {
    let selection = window.getSelection();
    let selectedText = selection.toString();
    let range = selection.getRangeAt(0);
    let parent = selection.anchorNode.parentElement;

    if (parent == "container") {
        let span = document.createElement('span');
        span.classList.add('makeItalics');
        span.innerHTML = selectedText;
        console.log(span.innerText)
        range.deleteContents();
        range.insertNode(span);
    }
    else {

        if (!parent.classList.contains("makeItalics") && !parent.classList.contains("makeNotItalics")) {

            let upperParent = parent.parentElement;
            if (!upperParent.classList.contains("makeItalics") && !upperParent.classList.contains("makeNotItalics")) {

                let superParent = upperParent.parentElement;
                if (!superParent.classList.contains("makeItalics")) {

                    if (superParent.classList.contains("makeNotItalics")) {
                        superParent.classList.remove('makeNotItalics');
                        superParent.classList.add('makeItalics');
                        span.innerHTML = selectedText;
                        range.deleteContents();
                        range.insertNode(span);
                    }
                    else {
                        let span = document.createElement('span');
                        span.classList.add('makeItalics');
                        span.innerHTML = selectedText;
                        range.deleteContents();
                        range.insertNode(span);
                    }

                }
                else {

                    superParent.classList.remove('makeItalics');
                    superParent.classList.add('makeNotItalics');
                    span.innerHTML = selectedText;
                    range.deleteContents();
                    range.insertNode(span);
                }
            }
            else {
                if (upperParent.classList.contains("makeItalics")) {
                    upperParent.classList.remove('makeItalics');
                    upperParent.classList.add('makeNotItalics');
                    span.innerHTML = selectedText;
                    range.deleteContents();
                    range.insertNode(span);
                }
                else {
                    upperParent.classList.remove('makeNotItalics');
                    upperParent.classList.add('makeItalics');
                    span.innerHTML = selectedText;
                    range.deleteContents();
                    range.insertNode(span);
                }
            }
        }
        else {
            if (parent.classList.contains("makeItalics")) {
                parent.classList.remove('makeItalics');
                parent.classList.add('makeNotItalics');
                span.innerHTML = selectedText;
                range.deleteContents();
                range.insertNode(span);
            }
            else {
                parent.classList.remove('makeNotItalics');
                parent.classList.add('makeItalics');
                span.innerHTML = selectedText;
                range.deleteContents();
                range.insertNode(span);
            }
        }

    }



};

btn_Italics.addEventListener('click', italicsClickListener);


/************************************************************************************************************ */
/**
 * 
 * @param {event} event     Function on clicking Underline Button
 */
let underlineClickListener = (event) => {
    let selection = window.getSelection();
    let selectedText = selection.toString();
    let range = selection.getRangeAt(0);
    let parent = selection.anchorNode.parentElement;


    if (parent == "container") {
        let span = document.createElement('span');
        span.classList = 'makeUnderline';
        span.innerHTML = selectedText;
        console.log(span.innerText)
        range.deleteContents();
        range.insertNode(span);
    }
    else {

        if (!parent.classList.contains("makeUnderline") && !parent.classList.contains("makeNoUnderline")) {

            let upperParent = parent.parentElement;
            if (!upperParent.classList.contains("makeUnderline") && !upperParent.classList.contains("makeNoUnderline")) {

                let superParent = upperParent.parentElement;
                if (!superParent.classList.contains("makeUnderline")) {

                    if (superParent.classList.contains("makeNoUnderline")) {
                        superParent.classList.remove('makeNoUnderline');
                        superParent.classList.add('makeUnderline');
                        span.innerHTML = selectedText;
                        range.deleteContents();
                        range.insertNode(span);
                    }
                    else {
                        let span = document.createElement('span');
                        span.classList.add('makeUnderline');
                        span.innerHTML = selectedText;
                        range.deleteContents();
                        range.insertNode(span);
                    }

                }
                else {
                    if (superParent.classList.contains("makeUnderline")) {
                        superParent.classList.remove('makeUnderline');
                        superParent.classList.add('makeNoUnderline');
                        span.innerHTML = selectedText;
                        range.deleteContents();
                        range.insertNode(span);
                    }
                    else {
                        superParent.classList.remove('makeNoUnderline');
                        superParent.classList.add('makeUnderline');
                        span.innerHTML = selectedText;
                        range.deleteContents();
                        range.insertNode(span);
                    }
                }
            }
            else {
                if (upperParent.classList.contains("makeUnderline")) {
                    upperParent.classList.remove('makeUnderline');
                    upperParent.classList.add('makeNoUnderline');
                    span.innerHTML = selectedText;
                    range.deleteContents();
                    range.insertNode(span);
                }
                else {
                    upperParent.classList.remove('makeNoUnderline');
                    upperParent.classList.add('makeUnderline');
                    span.innerHTML = selectedText;
                    range.deleteContents();
                    range.insertNode(span);
                }
            }
        }
        else {
            if (parent.classList.contains("makeUnderline")) {
                parent.classList.remove('makeUnderline');
                parent.classList.add('makeNoUnderline');
                span.innerHTML = selectedText;
                range.deleteContents();
                range.insertNode(span);
            }
            else {
                parent.classList.remove('makeNoUnderline');
                parent.classList.add('makeUnderline');
                span.innerHTML = selectedText;
                range.deleteContents();
                range.insertNode(span);
            }
        }

    }

};

btn_Underline.addEventListener('click', underlineClickListener);


//getting content 
let align_Content = document.getElementById('containerText');


/************************************************************************************************************ */

/**
 * @type Button     Getting element Button left in a Variable
 */
let btn_Left = document.getElementById('btnLeft');


/**
 * 
 * @param {event} event     Function on clicking Left Align Button
 */
let alignLeft = (event) => {
    align_Content.style.textAlign = 'Left';
};

btn_Left.addEventListener('click', alignLeft);



/************************************************************************************************************ */

/**
 * @type Button     Getting element Button Center in a Variable
 */
let btn_Center = document.getElementById('btnCenter');


/**
 * 
 * @param {event} event     Function on clicking Center Align Button
 */
let alignCenter = (event) => {
    align_Content.style.textAlign = 'Center';
};

btn_Center.addEventListener('click', alignCenter);



/************************************************************************************************************ */
/**
 * @type Button     Getting element Button right in a Variable
 */
let btn_Right = document.getElementById('btnRight');


/**
 * 
 * @param {event} event     Function on clicking Right Align Button
 */
let alignRight = (event) => {
    align_Content.style.textAlign = 'Right';
};

btn_Right.addEventListener('click', alignRight);



/************************************************************************************************************ */
// Justify Align functioning
/**
 * @type Button     Getting element Button Justify in a Variable
 */
let btn_Justify = document.getElementById('btnJustify');

let alignJustify = (event) => {
    align_Content.style.textAlign = 'Justify';
};

btn_Justify.addEventListener('click', alignJustify);






/***************************************************************************************************************/
/**
 * @function OnSelectionChangeListener  Event handler for changing button style after selection & clicking
 */
function OnSelectionChangeListener() {
    let selection = document.getSelection();
    if (selection.rangeCount > 0) {

        /**
        * @type range     Getting range of selection
        *
        */
        let range = selection.getRangeAt(0);
        let node = range.commonAncestorContainer;

        btn_Bold.setAttribute('class', 'btnStyle');
        btn_Italics.setAttribute('class', 'btnStyle');
        btn_Underline.setAttribute('class', 'btnStyle');
        let nStyle = node.parentElement;
        if (nStyle != null) {
            if (nStyle.tagName == 'SPAN') {

                for (let i = 1; i <= 3; i++) {

                    if (nStyle.getAttribute('class') == 'makeBold') {
                        btn_Bold.setAttribute('class', 'boldOnClick');

                    } else if (nStyle.getAttribute('class') == 'makeItalics') {
                        btn_Italics.setAttribute('class', 'italicsOnClick');

                    } else if (nStyle.getAttribute('class') == 'makeUnderline') {
                        btn_Underline.setAttribute('class', 'underlineOnClick');
                    }
                    if (nStyle.tagName != 'SPAN') {
                        break;
                    }
                    nStyle = nStyle.parentNode;
                }
            }
        }


    }
};

document.onselectionchange = OnSelectionChangeListener;
