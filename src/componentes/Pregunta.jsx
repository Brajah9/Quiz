const Pregunta = () => {
    let numero = Math.random()*10;
    let pregunta = '';
    numero = parseInt(numero);

    switch(numero) {
        case numero = 1: pregunta = 'What is my favorite childhood game?'
        
        break;
        case numero = 2: pregunta = 'What is my name and last name?'
        
        break;
        case numero = 3: pregunta = 'I love...?'
        
        break;
        case numero = 4: pregunta = 'My favorite day is...?'
        
        break
        case numero = 5: pregunta = 'What is my favorite childhood game?'
      
        break;
        case numero = 6: pregunta = 'What is my name and last name?'
        
        break;
        case numero = 7: pregunta = 'I love...?'
       
        break;
        case numero = 8: pregunta = 'My favorite day is...?'
    
        break;
        case numero = 9: pregunta = "What's my favorite hobby or activity?"
     
        break;
        case numero = 10: pregunta = "What's my favorite food or drink?"

        break;
        default: pregunta = 'What is my age? POSIBLE ERROR';
        
  }

    
    
    return (
        
        <>
            <p className="pregunta-p">{pregunta}</p>
        </>
    );
}

export default Pregunta;