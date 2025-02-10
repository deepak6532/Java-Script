// function demo(day)
// {
//     let dayname;
    
//     switch(day)
//     {
//         case 1:
//         dayname = 'monday';
//         break
//         case 2:
//         dayname = 'tuesday';
//         break
//         case 3:
//         dayname = 'wednesday';
//         break
//         case 4:
//         dayname = 'thursday';
//         break
//         case 5:
//         dayname= 'friday';
//         break
//         case 6:
//         dayname= 'saturday';
//         break
//          case 7:
//         dayname= 'sunday';
//         break
            
//         default :
//         dayname = "invalid day number"
            
//     }
        
//     return dayname
// }

// let result = demo(4)

// console.log(result)



function year(m)
{
    let month;

    switch(m)
    {
        case 1:
            month = "January"
            break
        case 2:
            month = "Febuary"
            break
        case 3:
            month = "March"
            break
        case 4:
            month = "April"
            break
        case 5:
            month = "May"
            break
        case 6:
            month = "June"
            break
        case 7:
            month = "July"
            break
        case 8:
            month = "August"
            break
        case 9:
            month = "September"
            break
        case 10:
            month = "October"
            break
        case 11:
            month = "November"
            break
        case 12:
            month = "December"
            break
        default :
            month = "Invalid month number"
        }
        return month
    }
    
let result = year(5)
console.log(result)