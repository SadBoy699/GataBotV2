mundial _ DeveloperMode  =  'falso'  //verdadero o falso
mundial _ linkGC  =  [ 'https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ'  ,  'https://chat.whatsapp.com/DbXBmsydWBE1ZN3EoY0hRs'  ,  'https://chat.whatsapp.com/BW0P22xx7EGBTdH5IM851F'  ,  'https:// chat.whatsapp.com/FwEUGxkvZD85fIIp0gKyFC'  ,  'https://chat.whatsapp.com/H7NUXdrGlFg20ae3bqgwlb' ]  // No tiene utilidad
mundial _ channelYT  =  [ 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA' ]  // No tiene utilidad
mundial _ own = [ '40799619351' ,  ' 51993042301' , '529996125657' ] // Cambia los numeros por tu o tus numeros a los cuales te comtactaran y gestionaras el Bot      
mundial _ mods  =  [ '5219992095479'  ,  '972557048356' ]  // No tiene utilidad
mundial _ prems  =  [ '5219996125657'  ,  '5219991402134' ]  // No tiene utilidad

// Nota: Puedes contactarme si necesitas ayuda con algo al +994407312387 (Solo temas de la instalación)
// => Solo dudas sobre la instalación, temas generales contactarme al +593968585383 (Temas serios, si vas a intervenir al chat para molestar seras bloqueado/a)
// => NO ayudo a hacer Bots, ni crearlos, ni editarlos
// - Este es el Canal de The Shadow Brokers por si te interesa su canal de YouTube en https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA

mundial _ API  =  {  // Prefijo API
  // nombre: 'https://sitio web'
  amel : 'https://melcanz.com' ,
  bx : 'https://bx-hunter.herokuapp.com' ,
  nrtm : 'https://nurutomo.herokuapp.com' ,
  xequipo : 'https://api.xequipo.xyz' ,
  nzcha : 'http://nzcha-apii.herokuapp.com' ,
  bg : 'http://bochil.ddns.net' ,
  fdci : 'https://api.fdci.se' ,
  dzx : 'https://api.dhamzxploit.my.id' ,
  bsbt : 'https://bsbt-api-rest.herokuapp.com' ,
  zahir : 'https://zahirr-web.herokuapp.com' ,
  zeks : 'https://api.zeks.me' ,
  hardianto : 'https://hardianto-chan.herokuapp.com' ,
  pencarikode : 'https://pencarikode.xyz' , 
  LeysCoder : 'https://leyscoders-api.herokuapp.com' ,
  lol : 'https://api.lolhuman.xyz' ,
  pencarikode : 'https://pencarikode.xyz' ,
  Velgurind : 'https://velgurind.herokuapp.com' ,
  rey : 'https://servidor-api-rey.herokuapp.com' ,
  neoxr : 'https://api.neoxr.eu.org' ,
  hardianto : 'http://hardianto-chan.herokuapp.com'
}
mundial _ APIKeys  =  {  // APIKey aquí
  // 'https://sitio web': 'apikey'
  'https://melcanz.com' : 'DyotaMC05' ,
  'https://bx-hunter.herokuapp.com' : 'Ikyy69' ,
  'https://api.xteam.xyz' : '5bd33b276d41d6b4' ,
  'https://zahirr-web.herokuapp.com' : 'zahirgans' ,
  'https://bsbt-api-rest.herokuapp.com' : 'benniismael' ,
  'https://api.zeks.me' : 'apivinz' ,
  'https://hardianto-chan.herokuapp.com' : 'hardianto' ,
  'https://pencarikode.xyz' : 'país' , 
  'https://leyscoders-api.herokuapp.com' : 'MIMINGANZ' , 
  'https://servidor-api-rey.herokuapp.com' : 'apirey' ,
  'https://api.lolhuman.xyz' : 'rey2k21'
}

// Adhesivo WM
mundial _ nombre del paquete  =  'GataBot 🐈'
mundial _ autor  =  'Gata Dios'


//global.wait = '*Espera un momento..*'


mundial _ multiplicador  =  69  // Cuanto más alto, más difícil subir de nivel

let  fs  =  requerir ( 'fs' )
dejar  tiza  =  requerir ( 'tiza' )
dejar  archivo  =  requerir . resolver ( __nombre de archivo )
fs . watchFile ( archivo ,  ( )  =>  {
  fs . unwatchFile ( archivo )
  consola _ registro ( tiza . redBright ( "Actualizar 'config.js'" ) )
  eliminar  requiere . caché [ archivo ]
  requerir ( archivo )
} )
