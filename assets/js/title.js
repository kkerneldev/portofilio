var titles = [
  "@",
  "@k",
  "@ke",
  "@ker",
  "@kern",
  "@kerne",
  "@kernel",
  "@kerneld",
  "@kernelde",
  "@kerneldev",
  "@kernelde",
  "@kerneld",
  "@kernel",
  "@kerne",
  "@kerne",
  "@kern",
  "@ker",
  "@ke",
  "@k",
  "@",
];

function changeTitle() {
  var index = 0;

  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
