test('Add one new item to the list', () => {
  document.body.innerHTML = '<div><ul id="list"><li></li></ul></div>';
  const list = document.querySelectorAll('#list li');
  expect(list).toHaveLength(1);
});
