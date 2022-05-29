import { FormControl } from '@angular/forms';
import { ContactPerson } from 'src/models/ContactPerson';

export class FavoriteValidation{
    public static check(arr:ContactPerson[]){
        return (control:FormControl) =>{
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].DeliveryFlag == true) {
                    return null;
                }
            }
            return { myCheckError: "there is no favorite contact" };
          }
        }     
     }

