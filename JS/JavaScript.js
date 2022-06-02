

function calcular (tipo, valor)
{
  if (tipo === 'acao')
  {
    if(valor === 'C')
    {
      document.getElementById('Resultado').value = ''
    }

    if(valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.' )
    {
      document.getElementById('Resultado').value += valor
    }

    if(valor === '=')
    {
      var valor_visor = eval(document.getElementById('Resultado').value)
      document.getElementById('Resultado').value = valor_visor

    }


  }

  else if(tipo === 'valor')
  {
    document.getElementById('Resultado').value += valor
    document.getElementById('Resultado') += valor 
  }


}
