//Todos los documentos de la colección inventory presentados con otra estructura
db.peliculas.find( {} ).pretty()

//Mostrar todas las películas dirigidas por Quentin Tarantino. (Uso de $eq).
db.peliculas.find( {Director: {$eq: "Quentin Tarantino"}} ).pretty()

//Mostrar películas que aún no he visto, que el director sea Steven Spielberg, y que sean anteriores al año 2000.
db.peliculas.find( {Fecha : {"$lte" : new Date(2000,0,2)}, Vista: false, Director: { $eq: "Steven Spielberg" } } ).pretty()

//Mostrar todas las películas que me he visto, sean para mayores de 18, no incluyan a Will Smith, fueron publicadas después del 2002.
db.peliculas.find( { Vista: true, Edad: {$eq: 18}, ActoresEstrella: {$ne: "Will Smith"}, Fecha : {"$gte" : new Date(2002,0,2)} } ).pretty()

//Las películas que hayan rodado Brad Pitt o Tom Hanks, sean de la categoria aventura, el año sea entre el 2004 y el 2015.
db.peliculas.find( { $or: [{ActoresEstrella: "Brad Pitt"}, {ActoresEstrella: "Tom Hanks"}], Categoria: {$eq: "Aventura"}, Fecha: {$lte: new Date (2015,0,2), $gte: new Date (2004,0,2)} } ).pretty()

//Sacar las películas cuyos directores sean Quentin Tarantino o Steven Spielberg, pero que no actúen en ella Samuel L. Jackson o Matt Damon, sean anteriores a 2016, y sea para personas iguales o mayores a 12 años, rodada antes de 2002
db.peliculas.find( { $or: [{Director: "Quentin Tarantino"}, {Director: "Steven Spielberg"}], $nor: [{ActoresEstrella: "Samuel L. Jackson"}, {ActoresEstrella: "Matt Damon"}], Fecha : {"$lt" : new Date(2002,0,2)}, Edad: {$gte: 12} } ).pretty()

//Mostrar en pantalla todas aquellas películas que sean de drama y el público de 0 a 12 años, la fecha de estreno sea superior a 2006 y las haya visto.
db.peliculas.find( { Categoria: {$eq: "Drama"}, Edad: {$gte: 0, $lte: 12}, Fecha: {$gte: new Date(2006,1,1)}, Vista: true} ).pretty()

//Mostras las películas que fueron publicadas en 1990 o antes, tengan una valoración mayor a 8.5, no sea la categoria aventura, y que aparezcan en ella Al Pacino o Henry Fonda. 
db.peliculas.find( { Fecha: {$lte: new Date(1990,1,1)}, Valoracion: {$gt: 8.8}, Categoria: {$ne: "Aventura"}, $or: [{ActoresEstrella: "Al Pacino"}, {ActoresEstrella: "Henry Fonda"}] } ).pretty()

//Películas rodadas por Morgan Freeman, del género drama o crimen, que no he visualizado y fueron rodadas antes del 2005.
db.peliculas.find( { ActoresEstrella: {$eq: "Morgan Freeman"}, $or: [{Categoria: "Crimen"}, {Categoria: "Drama"}], Vista: false, Fecha: {$lte: new Date(2005,1,1)} } ).pretty()

//Películas cuyo director sea Robert Zemeckis, aparezcan en ellas Tom Hanks o Christopher Lloyd, las haya visto, tenga una valoración superior a 8.4 y sean anteriores a 1995.
db.peliculas.find( { Director: {$eq:"Robert Zemeckis"}, $or: [{ActoresEstrella: "Tom Hanks"}, {ActoresEstrella: "Christopher Lloyd"}], Vista: true, Valoracion: {$gte: 8.4}, Fecha: {$lt: new Date(1995,1,1)} } ).pretty()