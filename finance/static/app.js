console.log('Hello!');

// https://plot.ly/javascript/time-series/

Plotly.d3.csv("https://raw.githubusercontent.com/grantaguinaldo/ml_apps/master/finance/data_in/BRK-A.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'BRK-A Adjusted Close',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'Adj Close'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'BRK-A Close',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'Close'),
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Historicial Data for Berkshire Hathaway Inc. (BRK-A)',
  xaxis: {
    autorange: true,
    range: ['1980-03-17', '2019-08-30'],
    rangeselector: {buttons: [
        {
          count: 1,
          label: '1m',
          step: 'month',
          stepmode: 'backward'
        },
        {
          count: 6,
          label: '6m',
          step: 'month',
          stepmode: 'backward'
        },
        {step: 'all'}
      ]},
    rangeslider: {range: ['1980-03-17', '2019-08-30']},
    type: 'date'
  },
  yaxis: {
    autorange: true,
    range: [200, 350000],
    type: 'linear'
  }
};

Plotly.newPlot('chart', data, layout, {showSendToCloud: true});
});
