$(document).ready(function() {
  $('#calculate').click(function() {
    // Get input values
    var bars = parseInt($('#bars').val());
    var tempo = parseInt($('#tempo').val());
    var timeSignature = $('#time-signature').val();

    // Split time signature into numerator and denominator
    var numerator = parseInt(timeSignature.split('/')[0]);
    var denominator = parseInt(timeSignature.split('/')[1]);

    // Calculate duration
    var duration = (bars * numerator * 60) / (tempo * denominator);

    // Display result
    $('#result').html('Approximate duration: ' + duration.toFixed(2) + ' seconds');
  });
});
