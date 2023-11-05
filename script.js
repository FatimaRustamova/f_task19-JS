const serfiyyat = function( mesafe, zaman ){

    const suret = mesafe / zaman;

    let yanacaq;

    if( suret >= 0 && suret < 60 ){
        yanacaq = 6;
    }
    else if( suret >= 60 && suret < 90 ){
        yanacaq = 9;
    }
    else if( suret >= 90 && suret < 120 ){
        yanacaq = 8;
    }
    else {
        yanacaq = 10;
    }

    const miqdar = (mesafe * yanacaq) / 100;

    const YanacaqSerfiyyati = ` ${mesafe} km yolu ${zaman} saat muddetine getmek ucun, sizin ortalama suretiniz ${suret} km/saat olmalidir. Size lazim olacaq yanacaq miqdari ${miqdar} litr, ortalama yanacaq sərfiyyati isə ${yanacaq} l/100 km olacaq ` ;

    return YanacaqSerfiyyati;
}

console.log( serfiyyat( 150 , 2 ));