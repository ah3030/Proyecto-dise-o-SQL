function handleFile() {
    const input = document.getElementById('inputFile');
    const file = input.files[0];
    const reader = new FileReader();
  
    reader.onload = function (e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
  
      // Realiza las operaciones necesarias con los datos del archivo Excel
      // Por ejemplo, puedes acceder a las hojas de cálculo utilizando workbook.Sheets
  
      // Ejemplo: Mostrar los datos de la primera hoja en la consola
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      console.log(jsonData);
    };
  
    reader.readAsArrayBuffer(file);
  }