function main(workbook: ExcelScript.Workbook
    , data: string, pattern: string, flags: string) {
    //CREAMOS UNA EXPRESION REGULAR
    let regExp = new RegExp(pattern, flags);
    //BUSCAMOS LOS ELEMENTOS CON LA MASCARA
    let matches = data.match(regExp);
    if (matches) {
        let imagenes: Array<string> = new Array<string>();
        for (var img of matches) {
            // if (img.toString().indexOf("data-src") != -1) {
            var datos = img.split('src="');
            if (datos.indexOf("http")) {
                var imagen = datos[1].split('"')[0];
                imagenes.push(imagen);
            }
            // }
        }
        return imagenes;
    } else {
        return [];
    }
}