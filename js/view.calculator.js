import {funPercent, funNumber, funOperation, funClear, funDelete, funChange} from './key.controller.js';

export const calculatorView = () => {
    // Selección del contenedor principal
    const container = document.querySelector("#container");

    // Contenedor de la calculadora
    const calculatorContainer = document.createElement("div");
    calculatorContainer.classList.add("calculator-container");

    // Display de la calculadora
    const display = document.createElement("input");
    display.type = "text";
    display.id = "display";
    display.value = "0";
    display.readOnly = true;

    // Contenedor del display
    const calculatorDisplay = document.createElement("div");
    calculatorDisplay.classList.add("calculator-display");
    calculatorDisplay.append(display);

    // Key clear
    const keyClear = document.createElement("button");
    keyClear.classList.add("calculator-key", "key-clear");
    keyClear.id = "clear";
    keyClear.textContent = "AC";
    keyClear.addEventListener("click", funClear);

    // Key sign
    const keySign = document.createElement("button");
    keySign.classList.add("calculator-key", "key-sign");
    keySign.id = "changeSign";
    keySign.textContent = "+/-";
    keySign.addEventListener("click", funChange);


    // Key percent
    const keyPercent = document.createElement("button");
    keyPercent.classList.add("calculator-key", "key-percent");
    keyPercent.id = "percent";
    keyPercent.textContent = "%";
    keyPercent.addEventListener("click", funPercent);

    // Key delete
    const keyDelete = document.createElement("button");
    keyDelete.classList.add("calculator-key", "key-delete");
    keyDelete.id = "delete";
    keyDelete.innerHTML = "&#8592;";
    keyDelete.addEventListener("click", funDelete);

    // Key seven
    const keyseven = document.createElement("button");
    keyseven.classList.add("calculator-key", "key-seven");
    keyseven.id = "seven";
    keyseven.innerHTML = "7";
    keyseven.addEventListener("click", funNumber);
    
    // Key four
    const keyfour = document.createElement("button");
    keyfour.classList.add("calculator-key", "key-four");
    keyfour.id = "four";
    keyfour.innerHTML = "4";
    keyfour.addEventListener("click", funNumber);

    // Key one
    const keyone = document.createElement("button");
    keyone.classList.add("calculator-key", "key-one");
    keyone.id = "one";
    keyone.innerHTML = "1";
    keyone.addEventListener("click", funNumber);

    // Key zero
    const keyzero = document.createElement("button");
    keyzero.classList.add("calculator-key", "key-zero");
    keyzero.id = "zero";
    keyzero.innerHTML = "0";
    keyzero.addEventListener("click", funNumber);

    // Key eight
    const keyeight = document.createElement("button");
    keyeight.classList.add("calculator-key", "key-eight");
    keyeight.id = "eight";
    keyeight.innerHTML = "8";
    keyeight.addEventListener("click", funNumber);

     // Key five
     const keyfive = document.createElement("button");
     keyfive.classList.add("calculator-key", "key-five");
     keyfive.id = "five";
     keyfive.innerHTML = "5";
     keyfive.addEventListener("click", funNumber);

    // Key two
    const keytwo = document.createElement("button");
    keytwo.classList.add("calculator-key", "key-two");
    keytwo.id = "two";
    keytwo.innerHTML = "2";
    keytwo.addEventListener("click",funNumber);

    // Key decimal
    const keydecimal = document.createElement("button");
    keydecimal.classList.add("calculator-key", "key-decimal");
    keydecimal.id = "decimal";
    keydecimal.innerHTML = ".";
    keydecimal.addEventListener("click", funNumber);

    // Key add
    const keyadd = document.createElement("button");
    keyadd.classList.add("calculator-key", "key-add");
    keyadd.id = "add";
    keyadd.innerHTML = "+";
    keyadd.addEventListener("click", funNumber);

    // Key subtract
    const keysubtract = document.createElement("button");
    keysubtract.classList.add("calculator-key", "key-subtract");
    keysubtract.id = "subtract";
    keysubtract.innerHTML = "-";
    keysubtract.addEventListener("click", funNumber);

    // Key multiply
    const keymultiply = document.createElement("button");
    keymultiply.classList.add("calculator-key", "key-multiply");
    keymultiply.id = "multiply";
    keymultiply.innerHTML = "*";
    keymultiply.addEventListener("click", funNumber);

    // Key divide
    const keydivide = document.createElement("button");
    keydivide.classList.add("calculator-key", "key-divide");
    keydivide.id = "divide";
    keydivide.innerHTML = "/";
    keydivide.addEventListener("click", funNumber);

    // Key nine
    const keynine = document.createElement("button");
    keynine.classList.add("calculator-key", "key-nine");
    keynine.id = "nine";
    keynine.innerHTML = "9";
    keynine.addEventListener("click", funNumber);

    // Key six
    const keysix = document.createElement("button");
    keysix.classList.add("calculator-key", "key-six");
    keysix.id = "six";
    keysix.innerHTML = "6";
    keysix.addEventListener("click", funNumber);

    // Key three
    const keythree = document.createElement("button");
    keythree.classList.add("calculator-key", "key-three");
    keythree.id = "three";
    keythree.innerHTML = "3";
    keythree.addEventListener("click", funNumber);

    // Key equals
    const keyequals = document.createElement("button");
    keyequals.classList.add("calculator-key", "key-equals");
    keyequals.id = "equals";
    keyequals.innerHTML = "=";
    keyequals.addEventListener("click", funOperation);

    // Key row
    let calculatorKeysRow = document.createElement("div");
    calculatorKeysRow.classList.add("calculator-keys-row");
    calculatorKeysRow.append(keyClear, keySign, keyPercent, keyDelete);

    let calculatorKeysRow1 = document.createElement("div");
    calculatorKeysRow1.classList.add("calculator-keys-row");
    calculatorKeysRow1.append(keyseven, keyfour, keyone, keyzero);

    let calculatorKeysRow2 = document.createElement("div");
    calculatorKeysRow2.classList.add("calculator-keys-row");
    calculatorKeysRow2.append(keyeight, keyfive, keytwo, keydecimal);

    let calculatorKeysRow3 = document.createElement("div");
    calculatorKeysRow3.classList.add("calculator-keys-row");
    calculatorKeysRow3.append(keynine, keysix, keythree, keyequals);

    let calculatorKeysRowoperator = document.createElement("div");
    calculatorKeysRowoperator.classList.add("calculator-keys-row");
    calculatorKeysRowoperator.append(keyadd, keysubtract, keymultiply, keydivide);

    const calculatorKeys = document.createElement("div");
    calculatorKeys.classList.add("calculator-keys");
    calculatorKeys.append(calculatorKeysRow, calculatorKeysRow1, calculatorKeysRow2, calculatorKeysRow3, calculatorKeysRowoperator);

    calculatorContainer.append(calculatorDisplay, calculatorKeys);
    container.append(calculatorContainer);
}
