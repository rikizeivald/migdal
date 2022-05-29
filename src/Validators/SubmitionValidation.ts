import { FormControl } from '@angular/forms';
import { ContactPerson } from 'src/models/ContactPerson';


export class SubmitionValidation{
    public static check(arr:ContactPerson[]){
        return(control:FormControl)=>{
            for(let i=0;i<arr.length;i++)
             if(control.value==arr[i].Type){
                    return null;
            }
            return {submitError: 'חייב להיות איש קשר מאותו הסוג'}
        }
    }
}