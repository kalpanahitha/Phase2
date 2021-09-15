import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  item?:any[];
 z:any={};
 msg:string='';
  constructor() {    

this.item= [ 
  {"id":1101,"iname":"idli","price":20},
        {"id":1201,"iname":"dosa","price":30},
        {"id":1301,"iname":"palav","price":222},
        {"id":1402,"iname":"noodles","price":100},
        {"id":1401,"iname":"poori","price":400},
           
];
  }
getitembyID(id:number){
  this.z=JSON.parse(JSON.stringify(this.item?.find(z=>z.id==id)));
  this.msg=`The selected item is successfully ordered`;
}



  ngOnInit(): void {
  }

}

