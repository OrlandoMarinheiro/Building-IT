function goBack() {
    window.history.back();
  }
  

// codigo para os popups

// Função para abrir o popup

function abrirPopupContactos() {

  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';

  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup-contactos').style.display = 'block';
  
}

function fecharPopupContactos() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup-contactos').style.display = 'none';
}


function abrirPopupCriarChave() {

  var overlay = document.getElementById('overlay');
  overlay.style.display = 'block'; // Exibe o overlay escurecido

  document.getElementById('popup').style.display = 'block';
}


function abrirPopupChaveEnviada() {
  document.getElementById('popup-contactos').style.display = 'none';
  document.getElementById('chave-enviada').style.display = 'block';

  // Define um temporizador para fechar o popup após 3 segundos
  setTimeout(function() {
    document.getElementById('chave-enviada').style.display = 'none';
    window.location.reload(); // Recarrega a página após 3 segundos
  }, 3000); // 3000 milissegundos = 3 segundos
}



function abrirPopupScan() {
  document.getElementById('popup-scan').style.display = 'block';
  var overlay = document.getElementById('overlay');

  overlay.style.display = 'block'; // Exibe o overlay escurecido
}


function fecharPopupScan() {
  var popup = document.querySelector('.popup-scan');
  var overlay = document.getElementById('overlay');
  
  popup.style.display = 'none';
  overlay.style.display = 'none';
}


function adicionar() {
  document.getElementById('popup-scan').style.display = 'none';
  
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'block'; // Exibe o overlay escurecido
  
  var componentPopup = document.querySelector('.component');
  componentPopup.style.display = 'block'; // Exibe o popup "component"

  // Aguarda 4 segundos antes de abrir o próximo popup
  setTimeout(function() {
    
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'block'; // Exibe o overlay escurecido

    var componentPopup = document.querySelector('.component');
    componentPopup.style.display = 'none'; // Oculta o popup "component"

    // Exibe o próximo popup (substitua "popup-scan-conluida" pelo ID do próximo popup)
    var nextPopup = document.querySelector('.popup-scan-conluida');
    nextPopup.style.display = 'block';

    // Aguarda mais 3 segundos e atualiza a página
    setTimeout(function() {
      window.location.reload();
    }, 3000);
  }, 4000); // 4 segundos de espera

}



function notificarAdmin() {

  var popup = document.querySelector('.popup-fuga-de-agua');
  var overlay = document.getElementById('overlay');
  
  popup.style.display = 'none';
  overlay.style.display = 'none';

  var popupComponent = document.querySelector('.component');
  var overlay = document.getElementById('overlay');
  
  popupComponent.style.display = 'block';
  overlay.style.display = 'block';

  setTimeout(function() {
    popupComponent.style.display = 'none';
    overlay.style.display = 'none';
  }, 3000); // 3000 milissegundos = 3 segundos
}


function mostrarPopupFugaDeAgua() {
  var popup = document.querySelector('.popup-fuga-de-agua');
  var overlay = document.getElementById('overlay');
  
  popup.style.display = 'block';
  overlay.style.display = 'block';
}


function fecharPopupFugaDeAgua() {
  var popup = document.querySelector('.popup-fuga-de-agua');
  var overlay = document.getElementById('overlay');
  
  popup.style.display = 'none';
  overlay.style.display = 'none';
}


function mostrarPopupConclus() {
  var popupConclus = document.querySelector('.popup-conclus');
  var overlay = document.getElementById('overlay');
  
  popupConclus.style.display = 'block';
  overlay.style.display = 'block';

  setTimeout(function() {
    popupConclus.style.display = 'none';
    overlay.style.display = 'none';
  }, 3000); // 3000 milissegundos = 3 segundos
}


document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.getElementById('overlay');
  const popup = document.getElementById('popup-confirmao-do');
  const voltarButton = document.getElementById('voltar-button');
  const colocarLavarButton = document.getElementById('colocar-lavar-button');

  function selectProg() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
  }

  function hidePopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  }

  function colocarLavar() {
    window.location.href = '../maquina_de_lavar/maquina_lavar.html';
  }

  voltarButton.addEventListener('click', hidePopup);
  colocarLavarButton.addEventListener('click', colocarLavar);

  window.selectProg = selectProg;
});

function mostrarPopupFugaDeGas() {
  var popup = document.querySelector('.popup-fuga-de-gas');
  var overlay = document.getElementById('overlay');
  
  popup.style.display = 'block';
  overlay.style.display = 'block';
}

function fecharPopupFugaDeGas() {
  var popup = document.querySelector('.popup-fuga-de-gas');
  var overlay = document.getElementById('overlay');
  
  popup.style.display = 'none';
  overlay.style.display = 'none';
}


function mostrarPopupSuporte() {
  var popupConclus = document.querySelector('.popup-suporte');
  var overlay = document.getElementById('overlay');
  var textarea = document.querySelector('.rectangle-2');
  var alert = document.getElementById("error-message");

  if(textarea.value === ""){
    alert.innerText = "Por favor escreva uma mensagem.";
    document.getElementById("error-message").style.display = "block";
    textarea.disabled = true;

    setTimeout(function() {
      alert.style.display = 'none';
      overlay.style.display = 'none';
      textarea.disabled = false;
    }, 3000); // 4000 milissegundos = 4 segundos

  } else {
    popupConclus.style.display = 'block';
    overlay.style.display = 'block';

    textarea.value = ''; // Limpar a caixa de texto

    setTimeout(function() {
      popupConclus.style.display = 'none';
      overlay.style.display = 'none';
    }, 4000); // 4000 milissegundos = 4 segundos
  }
  

}





function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "martarepolho233@gmail.com" && password === "martinha233") {
    window.location.href = "../Homepage/homepage.html";
  } else if (email === "" || password === "") {
    document.getElementById("error-message").innerText = "Por favor introduza um email e uma password.";
    document.getElementById("error-message").style.display = "block";
  } else {
    document.getElementById("error-message").innerText = "Email e password incorretos";
    document.getElementById("error-message").style.display = "block";
  }
}