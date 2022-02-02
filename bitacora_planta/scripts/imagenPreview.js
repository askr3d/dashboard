$(document).ready(function () {
    var resetContenedor = $("#contenedorFotos").html();
    $(document).on("change", "#agregarImagen", function(){
        contenedorFotos = $("#contenedorFotos");
        contenedorFotos.html(resetContenedor);

        var div;
        const imagenes = document.getElementById("agregarImagen").files;
        for(var index=0; index<imagenes.length; index++){
            const objectURL = URL.createObjectURL(imagenes[index]);
            const nombre = removeExtension(imagenes[index].name);
            div = addPreview(objectURL, nombre);
            contenedorFotos.append(div);
        }
        function removeExtension(nombre){
            posicionHasta = nombre.indexOf(".");
            nombre = nombre.slice(0, posicionHasta);
            return nombre;
        }
        function addPreview(src, nombre){
            div = document.createElement("div");
            div.setAttribute("class", "col-sm-3");
            figure = document.createElement("figure");
            img = document.createElement("img");
            img.setAttribute("src", src);
            img.setAttribute("class", "img-thumbnail");
            figcaption = document.createElement("figcaption");
            figcaption.setAttribute("class", "text-center");
            figcaption.append(nombre);
            figure.append(img);
            figure.append(figcaption);
            div.append(figure);
            return div;
        }
    });
});