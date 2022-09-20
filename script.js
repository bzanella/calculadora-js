      function calcular( type, value ){

        if(type === 'action'){
          if(value === 'c'){
            //limpar o visor
            document.getElementById('result').value = '' 
          }
          //concatenação para exibiçao da operação
          if(value === '*' || value === '/' || value === '-' || value === '+' || value === '.'){
            document.getElementById('result').value += value
          }
          //retorna a operação
          if(value === '='){
            var field_value = document.getElementById('result').value
            document.getElementById('result').value = eval(field_value)
          }
        }else if(type === 'value'){

          document.getElementById('result').value += value 
          
        }
      }