export const findname = (array, playerID) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i].ID === playerID) {
      return array[i].name;
    }
  }
};
