1. Browsers do not understand REACT
2. CDN REACT - where react library is hosted
    
    ![image.png](attachment:64f7540b-edc7-4a66-8fa2-fd46c0dfc0c2:image.png)
    

1.   a. Creating Element job is done by REACT which is first link job
    1. Creating Root job is done by ReactDOM which is second link

```html
				const heading = React.createElement('h1',{},"Hello World from React");
				
				
				console.log(heading) //Object
				 
				 //This basically returns Object and that ReactDOM takes the object and keeps
				   it inside the root
				
        const root = ReactDOM.createRoot(document.querySelector('.root'));

        root.render(heading); //It keeps heading element inside root tag
                              //If there any tag that is present inside root tag this 
                              heading tag will replace that
        
        //While the object is rendering it converts into HTML and into DOM
```

1. React have three attributes one is tag, other is attribute like id or class, other is message
2. The most costliest thing in browser is that removing and adding nodes inside the DOM tree to prevent that JS libraries came into the picture
3. Order of files matter a lot



/*
- App
 -Header
  -Logo
  -Nav-items

 -Body
  -Search
  -Restaurant Container
   -Restaurant Card
    - Img
    - Name of Res,Star Rating, Cuisines,Delivery time


 -Footer
  -Copyright
  -Links
  -Address
*/