function MonthName(number) {
  if (number >= 1 && number <= 12) {
    const months = [
      null,
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let result = '';
    months.forEach(function (mount, i) {
      if (i == number) {
        result = mount;
      }
    });
    return result;
  }
}
console.log(MonthName(3));
console.log(MonthName(12));
console.log(MonthName(6));
