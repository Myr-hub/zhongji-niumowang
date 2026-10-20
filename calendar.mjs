export function monthCells(year, month) {
  if (!Number.isInteger(year) || year < 1900 || year > 9999 ||
      !Number.isInteger(month) || month < 1 || month > 12)
    throw new RangeError('Invalid year or month');
  const offset = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  const count = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const cells = Array(offset).fill(null);
  for (let day = 1; day <= count; day++) cells.push(day);
  while (cells.length % 7) cells.push(null);
  return cells;
}
