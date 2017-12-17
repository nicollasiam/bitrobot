$(document).ready(function() {
  $('#btnUpdate').on('click', function() {
    console.log('AAHAHHH');
    body = { bitcoin_value: $('#bitcoin-value').val(),
             bitcoin_percentage: $('#bitcoin-percentage').val(),
             litecoin_value: $('#litecoin-value').val(),
             litecoin_percentage: $('#litecoin-percentage').val()}

    console.log(body);

    $.ajax({
      url: '',
      type: 'POST',
      data: body
    });
  });
})
