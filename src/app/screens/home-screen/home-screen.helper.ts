import { functionOrder } from "./home-screen.constant";

export const validateEquation = (equation) => {
  return /^[\d+\-*/^x\s()]+$/.test(equation);
};

export const calculateOutput = (initialInput, equations) => {
  let x = initialInput;
  try {
    functionOrder.forEach((id) => {
      const equation = equations[id.id];
      if (!validateEquation(equation)) {
        throw new Error(`Invalid equation at Function ${id}: ${equation}`);
      }
      x = eval(equation.replace(/x/g, x));
    });
  } catch (error) {
    console.error("Error calculating output:", error.message);
    return NaN;
  }
  return x;
};
