var userData = 
  {
    username: "a",
    password: "b",
    accountNumber: "2222222220",
    nameAccount:"Pedro Perez"
  }
//   {
//     username: "c",
//     password: "d",
//     accountNumber: "111111110",
//     nameAccount:"Carlos Carrillo"
//   }
// ]

  var accountData = {
    balance: 100,
    transactions: []
  };

  // Función para mostrar la interfaz de la cuenta
  function showAccountInterface() {
    window.location.href = "http://127.0.0.1:5500/practica/practica2.html/hoja2.html";
    updateBalance();
    updateTransactionLog();
  }

  // Función para ocultar la interfaz de la cuenta
  function hideAccountInterface() {
    document.getElementById("account-container").style.display = "none";
  }

  // Función para iniciar sesión
  
  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

  var accountNumber = document.getElementById("account-number").value;
    if (username === userData.username && password === userData.password) {
        showAccountInterface();
    } else {
      alert("Usuario o contraseña son incorrectas");
    }
  }
  
  // Función para actualizar el saldo
  function updateBalance() {
    document.getElementById("balance").textContent = "Saldo: $" + accountData.balance;
  }

  // Función para agregar una transacción
  function addTransaction(type) {
    var amount = parseFloat(document.getElementById("transaction-amount").value);
    var reason = document.getElementById("transaction-reason").value;

    if (!isNaN(amount) && amount !== 0) {
      if (type === "deposit") {
        accountData.balance += amount;
      } else if (type === "withdraw") {
        accountData.balance -= amount;
      }

      var transaction = {
        amount: amount,
        reason: reason,
        type: type
      };

      accountData.transactions.push(transaction);

      updateBalance();
      updateTransactionLog();
    } else {
      alert("Ingrese un monto válido");
    }
  }

  // Función para actualizar el registro de transacciones
  function updateTransactionLog() {
    var transactionLog = document.getElementById("transaction-log");
    transactionLog.innerHTML = "";

    accountData.transactions.forEach(function(transaction) {
      var transactionItem = document.createElement("div");
      transactionItem.classList.add("transaction");

      if (transaction.type === "deposit") {
        transactionItem.classList.add("positive");
      } else if (transaction.type === "withdraw") {
        transactionItem.classList.add("negative");
      }

      transactionItem.textContent = transaction.reason + " - $" + transaction.amount;

      transactionLog.appendChild(transactionItem);
    });
  }

   // Obtener la fecha actual
   var fechaActual = new Date();

   // Obtener los componentes de la fecha
   var dia = fechaActual.getDate();
   var mes = fechaActual.getMonth() + 1; // Los meses empiezan en 0, por lo que se suma 1
   var anio = fechaActual.getFullYear();

   // Crear la representación de la fecha en un formato deseado
   var fechaFormateada = dia + "/" + mes + "/" + anio;

   // Mostrar la fecha y cuenta en un elemento HTML
   window.onload = function() {
     document.getElementById("fecha").innerHTML = fechaFormateada;
     document.getElementById("cuenta").innerHTML = userData.accountNumber;
     document.getElementById("nombre-usuario").innerHTML = userData.nameAccount;
    }