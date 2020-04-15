 // get the inputs
 const inputs = [].slice.call(document.querySelectorAll('input'));
        
 // listen for changes
 inputs.forEach(input => input.addEventListener('change', handleUpdate));
 
 function handleUpdate(e) {
   document.documentElement.style.setProperty(`--${this.id}`, this.value); 

   
 }
