// Variables de ejemplo
var userData = {
    username: "u",
    password: "c",
    accountNumber: "1234567890"
  };

  var accountData = {
    balance: 0,
    transactions: []
  };

  // Función para mostrar la interfaz de la cuenta
  function showAccountInterface() {
    document.getElementById("account-container").style.display = "block";
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

    if (username === userData.username && password === userData.password && accountNumber === userData.accountNumber) {
      showAccountInterface();
    } else {
      alert("Usuario, contraseña o número de cuenta incorrectos");
    }
  }
  
  // window.onload = function showAccountInterface()

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