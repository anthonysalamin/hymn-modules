/**
 * UTILITY | initASCII
 * @build 02.10.21 @updated 23:32
 * Inserts a decorative ASCII art comment into the page’s HTML.
 */

export function initASCII() {
  const ascii = ` 
    
                       .#&&(                   
         #&&&&&&&&&&&&&&&&&&&&%           
     /&&&&&&&&&&&&&&&&&&&&&&&&&&&&        
     /&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&      
       &&&&&&&            &&&&&&&&&&&&    
                             &&&&&&&&&&   
                              ,&&&&&&&&&  
             .&&&&&&&&&&%      &&&&&&&&&  
        &&&&&&&&&&&&&&&&&&&&&&& &&&&&&&&& 
      &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
    &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
   &&&&&&&&&&             %&&&&&&&&&&&&&& 
   &&&&&&&&                  &&&&&&&&&&&  
  #&&&&&&&&                   &&&&&&&&&&  
   &&&&&&&&&                &&&&&&&&&&&&& 
   (&&&&&&&&&&          &&&&&&&&&&&&&&&&&&
     &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
      ,&&&&&&&&&&&&&&&&&&&&&&&&&, &&&&&&&&
         *&&&&&&&&&&&&&&&&&&,     &&&&&&&
         
         
    développé avec ❤️ par tonytony.ch
             
                    
         `;
  const commentNode = document.createComment(ascii),
    html = document.getElementsByTagName("html")[0];
  html.insertBefore(commentNode, html.firstChild);
}