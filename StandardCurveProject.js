// selecting html elements
const sPeakArea = document.getElementById("sPeakArea");
const rPeakArea = document.getElementById("rPeakArea");
let eeValue = document.getElementById("eeValue");
//selecting all inputs
const allInputs = document.querySelectorAll(".allInputs");

//NaN & negative numbers being set to zero
let x, y;
function notANumber(x, y) {
  if (isNaN(x) || x < 0) {
    x = 0;
  } else if (isNaN(y) || y < 0) {
    y = 0;
  }
  console.log(x + y);
  portion(x, y);
}
//portion function eg x=1, y=2 -> 1/(1+2)*100
let portionValue;
function portion(x, y) {
  return (portionValue = (x / (x + y)) * 100);
}

//Reporting the %ee
let currentInput;
for (let i = 0; i < allInputs.length; i++) {
  currentInput = allInputs[i];
  currentInput.addEventListener("keyup", function () {
    allValueCollector(); //Collecting the peak area
    notANumber(sPeakAreaValue, rPeakAreaValue); //Calculating the %ee

    //Reporting the %ee
    if (portionValue > 49) {
      eeValue.textContent = ` ${portionValue.toFixed(0)}% S `;
    } else if (portionValue < 49 && portionValue.toFixed(0) >= 0) {
      eeValue.textContent = ` ${100 - portionValue.toFixed(0)}% R`;
    } else if (isNaN(portionValue)) {
      eeValue.textContent = "---"; //resetting it
    }
  });
}

// ================================================ Standard Curve ====================================================
//Selecting the HTML elements
const standardCurveGradient = document.querySelector("#standardCurveGradient");
const standardCurveIntercept = document.querySelector(
  "#standardCurveIntercept"
);
const standardCurveMolarMass = document.querySelector(
  "#standardCurveMolarMass"
);

const standardCurveExpectedPercentageConversion = document.querySelector(
  "#standardCurveExpectedPercentageConversion"
);
const standardCurveMaxPeakArea = document.querySelector(
  "#standardCurveMaxPeakAreaValue"
);
const standardCurvePeakArea = document.querySelector("#standardCurvePeakArea");
let standardCurveEquationConfirmation = document.querySelector(
  ".standardCurveEquationConfirmation"
);
let standardCurveCalculatedConcentration = document.querySelector(
  ".standardCurveCalculatedConcentration"
);
let standardCurveCalculatedMol = document.querySelector(
  ".standardCurveCalculatedMol"
);
let standardCurveCalculatedConversion = document.querySelector(
  ".standardCurveCalculatedConversion"
);
let standardCurveAnswersContainer = document.querySelector(
  ".standardCurveAnswersContainer"
);
//conversion DOM elements
const amineConcentrationConversionGradient = document.querySelector(
  "#amineConcentrationConversionGradient"
);
const amineConcentrationConversionIntercept = document.querySelector(
  "#amineConcentrationConversionIntercept"
);
const ketoneConcentrationConversionGradient = document.querySelector(
  "#ketoneConcentrationConversionGradient"
);
const ketoneConcentrationConversionIntercept = document.querySelector(
  "#ketoneConcentrationConversionIntercept"
);
const amineConcentrationConversionMaxPeakArea = document.querySelector(
  "#amineConcentrationConversionMaxPeakArea"
);
const ketoneConcentrationConversionMaxPeakArea = document.querySelector(
  "#ketoneConcentrationConversionMaxPeakArea"
);
const ketoneConcentrationConversionPeakArea = document.querySelector(
  "#ketoneConcentrationConversionPeakArea"
);
const amineConcentrationConversionPeakArea = document.querySelector(
  "#amineConcentrationConversionPeakArea"
);
let reportedConcentrationConversion = document.querySelector(
  ".reportedConcentrationConversion "
);
// Constants
const volumeRemoved = 0.00012;
const volumeExtracted = 0.0005;
const volumeOfTheReaction = 0.001;

//Collecting the user entered values
let standardCurveGradientValue;
let standardCurveInterceptValue;
let standardCurveMaxPeakAreaValue;
let standardCurvePeakAreaValue;
let standardCurveMolarMassValue;
let standardCurveExpectedPercentageConversionValue;
let sPeakAreaValue;
let rPeakAreaValue;
let amineConcentrationConversionGradientValue;
let amineConcentrationConversionInterceptValue;
let ketoneConcentrationConversionInterceptValue;
let ketoneConcentrationConversionGradientValue;
let amineConcentrationConversionMaxPeakAreaValue;
let ketoneConcentrationConversionMaxPeakAreaValue;
let ketoneConcentrationConversionPeakAreaValue;
let amineConcentrationConversionPeakAreaValue;

function allValueCollector() {
  //for % yield
  standardCurveGradientValue = parseFloat(standardCurveGradient.value);
  standardCurveInterceptValue = parseFloat(standardCurveIntercept.value);
  standardCurveMaxPeakAreaValue = parseFloat(standardCurveMaxPeakArea.value);
  standardCurvePeakAreaValue = parseFloat(standardCurvePeakArea.value);
  standardCurveMolarMassValue = parseFloat(standardCurveMolarMass.value);
  standardCurveExpectedPercentageConversionValue = parseFloat(
    standardCurveExpectedPercentageConversion.value
  );

  //for %ee
  sPeakAreaValue = parseFloat(sPeakArea.value);
  rPeakAreaValue = parseFloat(rPeakArea.value);

  //for conversion
  amineConcentrationConversionGradientValue = parseFloat(
    amineConcentrationConversionGradient.value
  );
  ketoneConcentrationConversionGradientValue = parseFloat(
    ketoneConcentrationConversionGradient.value
  );
  amineConcentrationConversionInterceptValue = parseFloat(
    amineConcentrationConversionIntercept.value
  );
  ketoneConcentrationConversionInterceptValue = parseFloat(
    ketoneConcentrationConversionIntercept.value
  );
  amineConcentrationConversionMaxPeakAreaValue = parseFloat(
    amineConcentrationConversionMaxPeakArea.value
  );
  ketoneConcentrationConversionMaxPeakAreaValue = parseFloat(
    ketoneConcentrationConversionMaxPeakArea.value
  );
  ketoneConcentrationConversionPeakAreaValue = parseFloat(
    ketoneConcentrationConversionPeakArea.value
  );
  amineConcentrationConversionPeakAreaValue = parseFloat(
    amineConcentrationConversionPeakArea.value
  );

  //peak area and concentration shouldnt be negative
  standardCurveMaxPeakAreaValue < 0 ? 0 : standardCurveMaxPeakAreaValue;
  standardCurvePeakAreaValue < 0 ? 0 : standardCurvePeakAreaValue;
}

//looping through all inputs (again) to listen for event
for (let i = 0; i < allInputs.length; i++) {
  currentInput = allInputs[i];
  currentInput.addEventListener("keyup", function () {
    allValueCollector(); //collect all values from inputs

    //displaying the equation
    standardCurveInterceptValue > 0
      ? (standardCurveEquationConfirmation.textContent = `Your equation is: y = ${standardCurveGradientValue}x  + ${standardCurveInterceptValue}`)
      : (standardCurveEquationConfirmation.textContent = `Your equation is: y = ${standardCurveGradientValue}x  - ${
          -1 * standardCurveInterceptValue
        }`);

    //accounting for y=c circumstances
    if (isNaN(standardCurveGradientValue) || standardCurveGradientValue === 0) {
      standardCurveEquationConfirmation.textContent = `Your equation is: y =  ${standardCurveInterceptValue}`;
      if (
        isNaN(standardCurveInterceptValue) ||
        standardCurveInterceptValue === 0
      ) {
        standardCurveEquationConfirmation.textContent = `Your equation is: `;
      }
    }

    //accounting for y=mx circumstances
    if (
      isNaN(standardCurveInterceptValue) ||
      standardCurveInterceptValue === 0
    ) {
      standardCurveEquationConfirmation.textContent = `Your equation is: y =  ${standardCurveGradientValue}x`;
      if (
        isNaN(standardCurveGradientValue) ||
        standardCurveGradientValue === 0
      ) {
        standardCurveEquationConfirmation.textContent = `Your equation is: `;
      }
    }

    //Calculating the concentration
    //check for maximum peak area vs experimental peak area
    if (standardCurvePeakAreaValue <= standardCurveMaxPeakAreaValue) {
      //accounting for m=0 (report that m=0 and not calculate)
      if (
        isNaN(standardCurveGradientValue) ||
        standardCurveGradientValue === 0
      ) {
        standardCurveAnswersContainer.textContent = `Your gradient (m) cannot be zero. Refresh the page `;
      }

      //calculating concentration
      else {
        //account for y=NaN (unentered)
        if (isNaN(standardCurveInterceptValue)) {
          standardCurveInterceptValue = 0;
        }

        //do the calculation
        if (
          standardCurvePeakAreaValue >= 0 &&
          standardCurveMaxPeakAreaValue > 0
        ) {
          //Concentration from LC
          let standardCurveReportedConcentration =
            (standardCurvePeakAreaValue - standardCurveInterceptValue) /
            standardCurveGradientValue;
          standardCurveCalculatedConcentration.textContent = ` ${Number(
            standardCurveReportedConcentration.toFixed(4)
          )} ppm`;

          //extracted mol. correct in500MeCN/120crude
          let standardCurveExtractedMol =
            (standardCurveReportedConcentration * volumeExtracted) /
            (standardCurveMolarMassValue * 1000);
          console.log(standardCurveExtractedMol);

          //mol in 120 removed = mol extracted
          //conc removed = conc in reaction mixture

          //conc in rxn mixture ppm
          // let reactionMixtureConcentration =
          //   (standardCurveExtractedMol * 1000 * standardCurveMolarMassValue) /
          //   volumeRemoved;
          //   console.log(reactionMixtureConcentration);

          //Mol in reaction mixture
          let reactionMixtureMol =
            (standardCurveExtractedMol * volumeOfTheReaction) / volumeRemoved;
          standardCurveCalculatedMol.textContent = ` ${Number(
            (reactionMixtureMol * 1000000).toFixed(4)
          )} micro mol`;
          console.log(reactionMixtureMol);

          //Calculate the conversion
          let standardCurveCalculatedConversionValue =
            (reactionMixtureMol /
              standardCurveExpectedPercentageConversionValue) *
            100;
          standardCurveCalculatedConversion.textContent = ` ${Number(
            standardCurveCalculatedConversionValue.toFixed(4)
          )}%`;
        }
      }
    } else if (standardCurvePeakAreaValue > standardCurveMaxPeakAreaValue) {
      standardCurveAnswersContainer.textContent = `The peak area for your analyte is above the allowed peak area range. Refresh the page`;
    }
  });
}

//Percentage Conversion Part
currentInput;
for (let i = 0; i < allInputs.length; i++) {
  currentInput = allInputs[i];
  currentInput.addEventListener("keyup", function () {
    allValueCollector(); //Collecting the peak area

    let amineConcentrationConversionValue =
      (amineConcentrationConversionPeakAreaValue -
        amineConcentrationConversionInterceptValue) /
      amineConcentrationConversionGradientValue;
    let ketoneConcentrationConversionValue =
      (ketoneConcentrationConversionPeakAreaValue -
        ketoneConcentrationConversionInterceptValue) /
      ketoneConcentrationConversionGradientValue;

    console.log(
      amineConcentrationConversionValue,
      ketoneConcentrationConversionValue
    );
    reportedConcentrationConversion.textContent = `${portion(
      amineConcentrationConversionValue,
      ketoneConcentrationConversionValue
    ).toFixed(5)}% ketone converted `;
    if (isNaN(portionValue)) {
      reportedConcentrationConversion.textContent = "--- % ketone converted"; //resetting it
    }
  });
}
// toggle
const showMore = document.querySelectorAll(".showMore");
const menu = document.querySelectorAll(".menu");
const block = document.querySelectorAll(".block");
const fullConversionBlock = document.querySelector(".fullConversionBlock");
const fullEEBlock = document.querySelector(".fullEEBlock");
const fullConcentrationBlock = document.querySelector(
  ".fullConcentrationBlock"
);

//from menu to block calculations
for (let i = 0; i < showMore.length; i++) {
  let activeShowMore = showMore[i];
  activeShowMore.addEventListener("click", function () {
    //menu removal function
    function showMoreRemoval() {
      showMore.forEach((element) => {
        element.classList.remove("displayBlock");
      });
    }
    if (activeShowMore.classList.contains("convExpansion")) {
      fullConversionBlock.classList.toggle("displayBlock");
      showMoreRemoval();
    } else if (activeShowMore.classList.contains("eeExpansion")) {
      fullEEBlock.classList.toggle("displayBlock");
      showMoreRemoval();
    } else if (activeShowMore.classList.contains("concentrationConversion")) {
      fullConcentrationBlock.classList.toggle("displayBlock");
      showMoreRemoval();
    }
  });
}

// from calculations to menu
for (let i = 0; i < menu.length; i++) {
  let activeMenu = menu[i];
  activeMenu.addEventListener("click", function () {
    block.forEach((element) => {
      element.classList.remove("displayBlock");
    });
    showMore.forEach((element) => {
      element.classList.add("displayBlock");
    });
  });
}
