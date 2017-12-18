$(document).ready(function() {
  $('#btnUpdate').on('click', function() {
    body = { bitcoin_value: $('#bitcoin-value').val(),
             bitcoin_percentage: $('#bitcoin-percentage').val(),
             litecoin_value: $('#litecoin-value').val(),
             litecoin_percentage: $('#litecoin-percentage').val()}


    $.ajax({
      url: '/refresh',
      type: 'POST',
      data: body,
      success: function(data) {
        console.log(data['bitcoin_value'],
                     data['bitcoin_percentage'],
                     data['litecoin_value'],
                     data['litecoin_percentage']);
        UpdateValues(data['bitcoin_value'],
                     data['bitcoin_percentage'],
                     data['litecoin_value'],
                     data['litecoin_percentage']);
      }
    });
  });

  function UpdateValues(bitcoin_value,
                        bitcoin_percentage,
                        litecoin_value,
                        litecoin_percentage) {

    $('#bitcoin-value-text').text(bitcoin_value);
    $('#bitcoin-percentage-text').text(bitcoin_percentage);

    $('#litecoin-value-text').text(litecoin_value);
    $('#litecoin-percentage-text').text(litecoin_percentage);
  }
})
