export default function guardrail(mathFunction) {
  const responses = [];
  responses.push([mathFunction(), 'Guardrail was processed']);
  return responses;
}
