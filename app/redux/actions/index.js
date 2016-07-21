export function addCounter(number) {
  console.log('I have been called');
  return ({
    type: 'ADD_COUNTER',
    payload: number,
  });
}

export function removeCounter(number) {
  return ({
    type: 'REMOVE_COUNTER',
    payload: number,
  });
}

