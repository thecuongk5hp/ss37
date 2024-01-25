
    document.getElementById('input1').addEventListener('input', updateSumDOM);
    document.getElementById('input2').addEventListener('input', updateSumDOM);

    function updateSumDOM() {
      let input1Value = parseFloat(document.getElementById('input1').value) || 0;
      let input2Value = parseFloat(document.getElementById('input2').value) || 0;
      document.getElementById('output1').value = input1Value + input2Value;
    }

    document.getElementById('input1').addEventListener('input', updateSumEvent);
    document.getElementById('input2').addEventListener('input', updateSumEvent);

    function updateSumEvent() {
      let input1Value = parseFloat(document.getElementById('input1').value) || 0;
      let input2Value = parseFloat(document.getElementById('input2').value) || 0;
      document.getElementById('output2').value = input1Value + input2Value;
    }
