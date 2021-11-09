function printerError(s) {
  return `${s.replace(/[a-m]/ig, '').length}/${s.length}`;
}