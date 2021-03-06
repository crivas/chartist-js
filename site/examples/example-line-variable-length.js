new Chartist.Line('.ct-chart',
  {
    labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
    series: [
      [5, 4, 3, 7, 1, 10, 4, 14, 8, 6, 8],
      [14, 8, 9, 10, 3, 4, 2, 4],
      [3, 2, 9, 5, 4, 6, 7, 8, 10, 15, 5, 16, 5]
    ]
  },
  {
    allowVariableDataLengths: true,
    lineSmooth: false,
    showPoint: false,
    showLine: true
  }
);