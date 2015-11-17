/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {

      
      

      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

		
		
      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${Ytube}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.youtube.com", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ytube}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         var mySymbolObject = sym.getSymbol("Ytube");
         sym.$("Ytube").css("opacity","0.65");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ytube}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         var mySymbolObject = sym.getSymbol("Ytube");
         sym.$("Ytube").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gplus}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://plus.google.com", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gplus}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         var mySymbolObject = sym.getSymbol("gplus");
         sym.$("gplus").css("opacity","0.65");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gplus}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         var mySymbolObject = sym.getSymbol("gplus");
         sym.$("gplus").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fbook}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.facebook.com", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fbook}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         var mySymbolObject = sym.getSymbol("fbook");
         sym.$("fbook").css("opacity","0.65");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fbook}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // insert code to be run when the mouse hovers over the object
         var mySymbolObject = sym.getSymbol("fbook");
         sym.$("fbook").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${refresh}", "click", function(sym, e) {
         location.reload();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${refresh}", "mouseover", function(sym, e) {
         sym.play("ROTATION");
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element
         var mySymbolObject = sym.getSymbol("Text");
         sym.$("Text").css("opacity","0.65");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         var mySymbolObject = sym.getSymbol("Text");
         sym.$("Text").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         var mySymbolObject = sym.getSymbol("Text");
         sym.$("Text").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         var mySymbolObject = sym.getSymbol("Text");
         sym.$("Text").css("opacity","0.65");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://alexapo.worcestercomputing.com", "_blank");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${CPU}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         var mySymbolObject = sym.getSymbol("CPU");
         sym.$("CPU").css("opacity","0.65");
         sym.play(18000);
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${GPU}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         var mySymbolObject = sym.getSymbol("GPU");
         sym.$("GPU").css("opacity","0.65");
         sym.play(18000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Cooling}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         var mySymbolObject = sym.getSymbol("Cooling");
         sym.$("Cooling").css("opacity","0.65");
         sym.play(18000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'Desktops'
   (function(symbolName) {   
   
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Desktops}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         var mySymbolObject = sym.getSymbol("Desktops");
         sym.$("Desktops").css("opacity","0.65");
         sym.play(18000)

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Desktops");
   //Edge symbol end:'Desktops'

   //=========================================================
   
   //Edge symbol: 'Laptops'
   (function(symbolName) {   
   
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         // insert code here
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Laptops}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         var mySymbolObject = sym.getSymbol("Laptops");
         sym.$("Laptops").css("opacity","0.65");
         sym.play(18000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Laptops");
   //Edge symbol end:'Laptops'

   //=========================================================
   
   //Edge symbol: 'Software'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Software}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         var mySymbolObject = sym.getSymbol("Software");
         sym.$("Software").css("opacity","0.65");
         sym.play(18000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("Software");
   //Edge symbol end:'Software'

   //=========================================================
   
   //Edge symbol: 'Gaming'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Games}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         var mySymbolObject = sym.getSymbol("Games");
         sym.$("Games").css("opacity","0.65");
         sym.play(18000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Gaming");
   //Edge symbol end:'Gaming'

   //=========================================================
   
   //Edge symbol: 'Networks'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Networking}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         var mySymbolObject = sym.getSymbol("Networking");
         sym.$("Networking").css("opacity","0.65");
         sym.play(18000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Networks");
   //Edge symbol end:'Networks'

   //=========================================================
   
   //Edge symbol: 'Security'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Security}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         var mySymbolObject = sym.getSymbol("Securety");
         sym.$("Security").css("opacity","0.65");
         sym.play(18000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Security");
   //Edge symbol end:'Security'

   //=========================================================
   
   //Edge symbol: 'ContactG'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      
            
      Symbol.bindElementAction(compId, symbolName, "${contact2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("CPU").play(21000);
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("GPU").play(21000);
         sym.getComposition().getStage().getSymbol("Cooling").play(21000);
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("Desktops").play(21000);
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("Laptops").play(21000);
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("Gaming").play(21000);
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("Software2").play(21000);
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("Networks").play(21000);
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("Security2").play(21000);
         
         
         sym.getComposition().getStage().play("CONTACT");
         
         
         // Hide an element 
         sym.getSymbolElement().hide();
         
         
         
         
         
         
         

      });
      //Edge binding end



      

      Symbol.bindElementAction(compId, symbolName, "${contact2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("ContactG").play(18000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${contact2}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("ContactG").play(18500);

      });
      //Edge binding end

   })("ContactG");
   //Edge symbol end:'ContactG'

   //=========================================================
   
   //Edge symbol: 'AfterClick'
   (function(symbolName) {   
   
            Symbol.bindElementAction(compId, symbolName, "${Text}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://alexapo.worcestercomputing.com", "_blank");
         

      });
         //Edge binding end



      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${refresh}", "click", function(sym, e) {
         location.reload();
         
         

      });
      //Edge binding end

      

      

      
      
      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${refresh}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
         sym.getComposition().getStage().getSymbol("AfterClick").play(29500);
         
         

      });
      //Edge binding end      
      Symbol.bindElementAction(compId, symbolName, "${Text}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         var mySymbolObject = sym.getSymbol("Text");
         sym.$("Text").css("opacity","0.65");
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         var mySymbolObject = sym.getSymbol("Text");
         sym.$("Text").css("opacity","1");

      });
         //Edge binding end



      

      

      

            Symbol.bindElementAction(compId, symbolName, "${Text}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         var mySymbolObject = sym.getSymbol("Text");
         sym.$("Text").css("opacity","1");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element
         var mySymbolObject = sym.getSymbol("Text");
         sym.$("Text").css("opacity","0.65");

      });
         //Edge binding end



      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

            Symbol.bindElementAction(compId, symbolName, "${Ytube}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         var mySymbolObject = sym.getSymbol("Ytube");
         sym.$("Ytube").css("opacity","1");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ytube}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         var mySymbolObject = sym.getSymbol("Ytube");
         sym.$("Ytube").css("opacity","0.65");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ytube}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.youtube.com", "_blank");
         

      });
         //Edge binding end



      

      

            Symbol.bindElementAction(compId, symbolName, "${fbook}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // insert code to be run when the mouse hovers over the object
         var mySymbolObject = sym.getSymbol("fbook");
         sym.$("fbook").css("opacity","1");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fbook}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         var mySymbolObject = sym.getSymbol("fbook");
         sym.$("fbook").css("opacity","0.65");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fbook}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.facebook.com", "_blank");
         

      });
         //Edge binding end



      

      

            Symbol.bindElementAction(compId, symbolName, "${gplus}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         var mySymbolObject = sym.getSymbol("gplus");
         sym.$("gplus").css("opacity","1");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gplus}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         var mySymbolObject = sym.getSymbol("gplus");
         sym.$("gplus").css("opacity","0.65");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gplus}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://plus.google.com", "_blank");
         

      });
         //Edge binding end



      

      

   })("AfterClick");
   //Edge symbol end:'AfterClick'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-623152221");