const r=t=>String(t??"").replace(/[&<>"']/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[i]),a=`
  body { font-family: Calibri, Arial, sans-serif; color: #1b2333; margin: 40px; line-height: 1.5; }
  .membrete { text-align: center; border-bottom: 2px solid #1b2333; padding-bottom: 10px; margin-bottom: 24px; }
  .membrete small { display: block; color: #555; }
  h1 { font-size: 20px; margin: 0 0 4px; }
  h2 { font-size: 16px; margin: 20px 0 8px; }
  table { width: 100%; border-collapse: collapse; margin: 8px 0; font-size: 13px; }
  th, td { border: 1px solid #999; padding: 6px 8px; text-align: left; vertical-align: top; }
  th { background: #eef1ef; }
  .firma { margin-top: 70px; display: flex; justify-content: space-around; text-align: center; }
  .firma div { width: 40%; border-top: 1px solid #000; padding-top: 6px; }
  .borrador { color: #b71c1c; font-weight: bold; text-align: center; margin-bottom: 12px; }
  .barra { background: #fff3e0; border: 1px solid #f26b1d; border-radius: 8px; padding: 10px 14px; margin-bottom: 18px; }
  .llenar { background: #fff59d; }
  @media print { .no-imprimir { display: none; } .llenar { background: none; } }
`;function n(t,i,{editable:o=!1}={}){const e=window.open("","_blank");return e?(e.document.write(`<!doctype html><html lang="es"><head><meta charset="utf-8">
    <title>${r(t)}</title><style>${a}</style></head>
    <body>
      ${o?`<div class="no-imprimir barra">Revisa y completa lo marcado en amarillo (puedes escribir sobre el documento).
             <button onclick="window.print()">Imprimir / Guardar PDF</button></div>`:""}
      <div contenteditable="${o}">
        <div class="membrete">
          <h1>Universidad de Guadalajara</h1>
          <small>Centro Universitario de los Valles · Coordinación de Investigación</small>
        </div>
        ${i}
      </div>
    </body></html>`),e.document.close(),e.focus(),o||setTimeout(()=>e.print(),300),!0):!1}export{r as e,n as i};
