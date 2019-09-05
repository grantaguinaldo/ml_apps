console.log('Hello!');

// https://plot.ly/javascript/time-series/

var actual_data = 'https://raw.githubusercontent.com/grantaguinaldo/ml_apps/master/finance/data_in/BRK-A.csv'

var opt2_ridge = 'https://raw.githubusercontent.com/grantaguinaldo/ml_apps/master/finance/data_out/opt2_y_pred_ridge_df.csv'

var opt2_lr = 'https://raw.githubusercontent.com/grantaguinaldo/ml_apps/master/finance/data_out/opt2_y_pred_lr_df.csv'

var opt2_knn = 'https://raw.githubusercontent.com/grantaguinaldo/ml_apps/master/finance/data_out/opt2_y_pred_knn_df.csv'

var opt1_ridge = 'https://raw.githubusercontent.com/grantaguinaldo/ml_apps/master/finance/data_out/opt1_y_pred_ridge_df.csv'

var opt1_lr = 'https://raw.githubusercontent.com/grantaguinaldo/ml_apps/master/finance/data_out/opt1_y_pred_lr_df.csv'

var opt1_knn = 'https://raw.githubusercontent.com/grantaguinaldo/ml_apps/master/finance/data_out/opt1_y_pred_knn_df.csv'


// Option 1 Ridge Regression
Plotly.d3.csv(opt1_ridge, function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'BRK-A Forecasted Close Value Using Ridge Regression',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'forecast'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'BRK-A Actual Close Value',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'actual'),
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Figure 1: Forecasted vs Actual Close Values (BRK-A) Using Ridge Regression',
  xaxis: {
    autorange: true,
    range: ['2011-05-01', '2019-08-30'],
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
    rangeslider: {range: ['2011-05-01', '2019-08-30']},
    type: 'date'
  },
  yaxis: {
    autorange: true,
    range: [200, 350000],
    type: 'linear'
  }
};

Plotly.newPlot('opt1_ridge_div', data, layout, {showSendToCloud: true});
});


// Option 1 Linear Regression
Plotly.d3.csv(opt1_lr, function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'BRK-A Forecasted Close Value Using Linear Regression',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'forecast'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'BRK-A Actual Close Value',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'actual'),
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Figure 2:  Forecasted vs Actual Close Values (BRK-A) Using Linear Regression',
  xaxis: {
    autorange: true,
    range: ['2011-05-01', '2019-08-30'],
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
    rangeslider: {range: ['2011-05-01', '2019-08-30']},
    type: 'date'
  },
  yaxis: {
    autorange: true,
    range: [200, 350000],
    type: 'linear'
  }
};

Plotly.newPlot('opt1_lr_div', data, layout, {showSendToCloud: true});
});

// Option 1 kNN Regression
Plotly.d3.csv(opt1_knn, function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'BRK-A Forecasted Close Value Using kNN Regression',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'forecast'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'BRK-A Actual Close Value',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'actual'),
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Figure 3:  Forecasted vs Actual Close Values (BRK-A) Using kNN Regression',
  xaxis: {
    autorange: true,
    range: ['2011-05-01', '2019-08-30'],
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
    rangeslider: {range: ['2011-05-01', '2019-08-30']},
    type: 'date'
  },
  yaxis: {
    autorange: true,
    range: [200, 350000],
    type: 'linear'
  }
};

Plotly.newPlot('opt1_knn_div', data, layout, {showSendToCloud: true});
});

// Option 1 Ridge Regression
Plotly.d3.csv(opt2_ridge, function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'BRK-A Forecasted Close Value Using Ridge Regression',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'forecast'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'BRK-A Actual Close Value',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'actual'),
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Figure 4: Forecasted vs Actual Close Values (BRK-A) Using Ridge Regression',
  xaxis: {
    autorange: true,
    range: ['2011-05-01', '2019-08-30'],
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
    rangeslider: {range: ['2011-05-01', '2019-08-30']},
    type: 'date'
  },
  yaxis: {
    autorange: true,
    range: [200, 350000],
    type: 'linear'
  }
};

Plotly.newPlot('opt2_ridge_div', data, layout, {showSendToCloud: true});
});


// Option 1 Linear Regression
Plotly.d3.csv(opt2_lr, function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'BRK-A Forecasted Close Value Using Linear Regression',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'forecast'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'BRK-A Actual Close Value',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'actual'),
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Figure 5:  Forecasted vs Actual Close Values (BRK-A) Using Linear Regression',
  xaxis: {
    autorange: true,
    range: ['2011-05-01', '2019-08-30'],
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
    rangeslider: {range: ['2011-05-01', '2019-08-30']},
    type: 'date'
  },
  yaxis: {
    autorange: true,
    range: [200, 350000],
    type: 'linear'
  }
};

Plotly.newPlot('opt2_lr_div', data, layout, {showSendToCloud: true});
});

// Option 1 kNN Regression
Plotly.d3.csv(opt2_knn, function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'BRK-A Forecasted Close Value Using kNN Regression',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'forecast'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'BRK-A Actual Close Value',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'actual'),
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Figure 6:  Forecasted vs Actual Close Values (BRK-A) Using kNN Regression',
  xaxis: {
    autorange: true,
    range: ['2011-05-01', '2019-08-30'],
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
    rangeslider: {range: ['2011-05-01', '2019-08-30']},
    type: 'date'
  },
  yaxis: {
    autorange: true,
    range: [200, 350000],
    type: 'linear'
  }
};

Plotly.newPlot('opt2_knn_div', data, layout, {showSendToCloud: true});
});
