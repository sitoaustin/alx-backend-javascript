export default function guardrail(mathFunction) {
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
