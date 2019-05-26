/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(data){
    console.log(changeArray(data));
    console.log(convertMonth(data[3]));
    console.log(sortDate(data[3]));
    console.log(dateformat(data[3]));
    console.log(maxName(data[1]))

}
dataHandling2(input);


function changeArray(data){
    name=data[1];
    name=name.split(" ");
    name[2]='Elsharawy';
    name=name.join(" ");
    data[1]=name; 

    region=data[2]
    region=region.split(" ");
    region.splice(0,0,"Provinsi");
    data[2]=region.join(" "); 

    data.splice(4,1,"Pria","SMA international Metro");

    return data
}


function maxName(name){
    name=name.slice(0,15);
    return name
}

function dateformat(date){
    date=date.split('/').join('-')
    return date
}

function convertMonth(date){
    var month='';
    number=date.split("/");
    number=number[1];
    switch(number){
        case '01':
        month='Januari';
        break;
        case '02':
        month='Februari';
        break;
        case '03':
        month='Maret';
        break;
        case '04':
        month='April'
        break;
        case '05':
        month='Mei';
        break;
        case '06':
        month='Juni';
        break;
        case '07':
        month='Juli';
        break;
        case '08':
        month='Agustus';
        break;
        case '09':
        month='September'
        break;
        case '10':
        month='Oktober'
        break;
        case '11':
        month='November'
        break;
        case '12':
        month='Desember'
        break;
        default:
        month='error'
        break;
    }
    return month
}
function sortDate(date){
    date=date.split("/");
    date.sort(function(a, b){return b-a});
    return date
}

/*function sortDate(date){
    var date=date.split('/')
    var sorted=[];
    var month=date[1];
        for (let char of date){
            sorted.push(Number(char));    
        }
    sorted=sorted.sort()
    sorted.reverse();
    result=[]
        for (let i of sorted){
            if (month==i){
                result.push("0"+i);
             }
            else{
                result.push(String(i));
            }
        }
    return result.reverse();
    }
*/

