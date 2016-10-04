var items = [
  { name: 'Washington D.C.', weather: 84, thingstodo: 'museums' },
  { name: 'Virginia Beach', weather: 78, thingstodo: 'beach'},
  { name: 'Ocean City', weather:80, thingstodo: 'beach'}
];

React.render(
  <JsonTable rows={ items } />,
  document.body
);
