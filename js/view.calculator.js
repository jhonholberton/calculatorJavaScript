export const calculatorView = () => {
    // Selección del contenedor principal
    const container = document.querySelector("#container");

    // Contenedor de la calculadora
    const calculatorContainer = document.createElement("div");
    calculatorContainer.classList.add("calculator-container");
    // <div class="calculator-container"></div>

    // Display de la calculadora
    const display = document.createElement("input");
    display.type = "text";
    display.id = "display";
    display.value = "0";
    display.readOnly = true;
    // <input type="text" id="display" value="0" readonly>

    // Contenedor del display
    const calculatorDisplay = document.createElement("div");
    calculatorDisplay.classList.add("calculator-display");
    // <div class="calculator-display"></div>

    calculatorDisplay.append(display);
    // < class="calculator-display">
    //     <input type="text" id="display" value="0" readonly>
    // </div>

    // Key clear
    const keyClear = document.createElement("button");
    keyClear.classList.add("calculator-key", "key-clear");
    keyClear.id = "clear";
    keyClear.textContent = "AC";
    // <button class="calculator-key key-clear" id="clear">AC</button>

    // Key sign
    const keySign = document.createElement("button");
    keySign.classList.add("calculator-key", "key-sign");
    keySign.id = "changeSign";
    keySign.textContent = "+/-";
    // <button class="calculator-key key-sign" id="changeSign">+/-</button>

    // Key percent
    const keyPercent = document.createElement("button");
    keyPercent.classList.add("calculator-key", "key-percent");
    keyPercent.id = "percent";
    keyPercent.textContent = "%";
    keyPercent.addEventListener("click", fnPercentKey);

    // Key delete
    const keyDelete = document.createElement("button");
    keyDelete.classList.add("calculator-key", "key-delete");
    keyDelete.id = "delete";
    keyDelete.innerHTML = "&#8592;";

    // Key seven
    const keyseven = document.createElement("button");
    keyseven.classList.add("calculator-key", "key-seven");
    keyseven.id = "seven";
    keyseven.innerHTML = "7";


    // Key four
    const keyfour = document.createElement("button");
    keyfour.classList.add("calculator-key", "key-four");
    keyfour.id = "four";
    keyfour.innerHTML = "4";

     // Key one
     const keyone = document.createElement("button");
     keyone.classList.add("calculator-key", "key-one");
     keyone.id = "one";
     keyone.innerHTML = "1";

    // Key zero
    const keyzero = document.createElement("button");
    keyzero.classList.add("calculator-key", "key-zero");
    keyzero.id = "zero";
    keyzero.innerHTML = "0";

    // Key eight
    const keyeight = document.createElement("button");
    keyeight.classList.add("calculator-key", "key-eight");
    keyeight.id = "eight";
    keyeight.innerHTML = "8";

     // Key five
     const keyfive = document.createElement("button");
     keyfive.classList.add("calculator-key", "key-five");
     keyfive.id = "five";
     keyfive.innerHTML = "5";

    // Key two
    const keytwo = document.createElement("button");
    keytwo.classList.add("calculator-key", "key-two");
    keytwo.id = "two";
    keytwo.innerHTML = "2";

    // Key decimal
    const keydecimal = document.createElement("button");
    keydecimal.classList.add("calculator-key", "key-decimal");
    keydecimal.id = "decimal";
    keydecimal.innerHTML = ".";

    // Key add
    const keyadd = document.createElement("button");
    keyadd.classList.add("calculator-key", "key-add");
    keyadd.id = "add";
    keyadd.innerHTML = "+";

    // Key subtract
    const keysubtract = document.createElement("button");
    keyadd.classList.subtract("calculator-key", "key-subtract");
    keyadd.id = "subtract";
    keyadd.innerHTML = "-";

    // Key multiply
    const keymultiply = document.createElement("button");
    keyadd.classList.multiply("calculator-key", "key-multiply");
    keyadd.id = "multiply";
    keyadd.innerHTML = "*";

    // Key divide
    const keydivide = document.createElement("button");
    keyadd.classList.divide("calculator-key", "key-divide");
    keyadd.id = "divide";
    keyadd.innerHTML = "/";

    // Key nine
    const keynine = document.createElement("button");
    keyadd.classList.nine("calculator-key", "key-nine");
    keyadd.id = "nine";
    keyadd.innerHTML = "9";

    // Key six
    const keysix = document.createElement("button");
    keyadd.classList.six("calculator-key", "key-six");
    keyadd.id = "six";
    keyadd.innerHTML = "6";

    // Key three
    const keythree = document.createElement("button");
    keyadd.classList.three("calculator-key", "key-three");
    keyadd.id = "three";
    keyadd.innerHTML = "3";

    // Key equals
    const keyequals = document.createElement("button");
    keyadd.classList.equals("calculator-key", "key-equals");
    keyadd.id = "equals";
    keyadd.innerHTML = "0";

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
    calculatorKeysRowoperator.classList.add("calculator-keys-row");
    calculatorKeysRowoperator.append(keynine, keysix, keythree, keyequals);

    let calculatorKeysRowoperator = document.createElement("div");
    calculatorKeysRowoperator.classList.add("calculator-keys-row");
    calculatorKeysRowoperator.append(keyadd, keysubtract, keymultiply, keydivide);

    const calculatorKeys = document.createElement("div");
    calculatorKeys.classList.add("calculator-keys");
    calculatorKeys.append(calculatorKeysRow, calculatorKeysRow1, calculatorKeysRow2, calculatorKeysRow3, calculatorKeysRowoperator);

    calculatorContainer.append(calculatorDisplay, calculatorKeys);
    container.append(calculatorContainer);

}

    // <div class="calculator-keys-row">
    //     <button class="calculator-key key-clear" id="clear">AC</button>
    //     <button class="calculator-key key-sign" id="changeSign">+/-</button>
    //     <button class="calculator-key key-percent" id="percent">%</button>
    //     <button class="calculator-key key-delete" id="delete">&#8592;</button>
    // </div>
    // <div class="calculator-keys-row">
    //      <button class="calculator-key key-seven" id="seven">7</button>
    //      <button class="calculator-key key-four" id="four">4</button>
    //      <button class="calculator-key key-nine" id="one">1</button>
    //      <button class="calculator-key key-zero" id="zero">0</button>
    //</div>
    //<div class="calculator-keys-row">
    //        <button class="calculator-key key-eight" id="eight">8</button>
    //         <button class="calculator-key key-five" id="five">5</button>
    //        <button class="calculator-key key-two" id="two">2</button>
    //        <button class="calculator-key key-decimal" id="decimal">.</button>
    //</div>
    //<div class="calculator-keys-row">
    //       <button class="calculator-key key-nine" id="nine">9</button>
    //       <button class="calculator-key key-six" id="six">6</button>
    //       <button class="calculator-key key-three" id="three">3</button>
    //       <button class="calculator-key key-equals" id="equals">=</button>
    //</div>
    //<div class="calculator-keys-row">
    //        <button class="calculator-key key-add" id="add">+</button>
    //        <button class="calculator-key key-subtract" id="subtract">&minus;</button>
    //        <button class="calculator-key key-multiply" id="multiply">&times;</button>
    //        <button class="calculator-key key-divide" id="divide">&divide;</button>
    //</div>