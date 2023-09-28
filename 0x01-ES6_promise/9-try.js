function divideFunction(numerator, denominator) {
  if (denominator === 0) throw new Error('cannot divide by 0');
  try {
    return numerator / denominator;
  } catch (error) {
    return error;
  }
}

function guardrail(mathFunction) {
  const responses = [];
  try {
    const response = mathFunction();
    responses.push(response);
  } catch (error) {
    responses.push(`Error: ${error.message}`);
  } finally {
    responses.push('Guardrail was processed');
  }
  return responses;
}

console.log(guardrail(() => divideFunction(10, 0)));
