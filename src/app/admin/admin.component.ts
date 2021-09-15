import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  item?:any[];
  z:any={};
  msg?:string;
  constructor(){
     this.item=[
        {"id":1101,"iname":"idli","price":20},
        {"id":1201,"iname":"dosa","price":30},
        {"id":1301,"iname":"palav","price":222},
        {"id":1402,"iname":"noodles","price":100},
        
    
        {"id":1401,"iname":"poori","price":400},
        
    
    ];
   
    this.msg=`count of item:${this.item?.length}`;
  }
  getitembyID(id:number){
    this.z=JSON.parse(JSON.stringify(this.item?.find(z=>z.id==id)));
  }
  deleteitembyID(ID:number){
  var i=Number(this.item?.findIndex(z=>z.id==ID));
  this.item?.splice(i,1);
  this.msg=`count of people:${this.item?.length}`;
  }
  additem(){
    this.item?.push(this.z);
    this.msg=`count of people:${this.item?.length}`;
  }
  edititembyID(ID:number){
    var i=Number( this.item?.findIndex(z=>z.id===ID));
    this.item?.splice(i,1,this.z);
  }
  ngOnInit(): void {
  }
}
