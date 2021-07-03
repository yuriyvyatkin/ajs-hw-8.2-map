import ErrorRepository from '../ErrorRepository';

test('Class "ErrorRepository" exists', () => {
  expect(new ErrorRepository()).toBeDefined();
});

const errorRepository = new ErrorRepository();

test('class "ErrorRepository" has the "errors" property with Map object', () => {
  expect(errorRepository.errors).toBeDefined();
  expect(errorRepository.errors instanceof Map).toBeTruthy();
});

errorRepository.errors.set(1, 'Описание ошибки с кодом 1');

test('class "ErrorRepository" has a working "translate" method', () => {
  expect(typeof errorRepository.translate).toBe('function');
  let output = errorRepository.translate(1);
  expect(output).toBe('Описание ошибки с кодом 1');
  output = errorRepository.translate(2);
  expect(output).toBe('Unknown error');
});
