const upper=(Title, Paragraph,Cbtn)=>{
  let div= document.createElement("div")
  div.className="up"
  div.innerHTML=`<h1>${Title}</h1>
                  <p>${Paragraph}</p>
                  <button>${Cbtn}</button>
  `
  return div
}
export{upper}