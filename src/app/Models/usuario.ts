export class Usuario{

    public iconos:String[]=['fa fa-heart','fa fa-amazon','fa fa-bookmark','fa fa-bus','fa fa-code'
    ,'fa fa-cube','fa fa-user','fa fa-tint','fa fa-thumbs-up','fa fa-unlock'];

    public constructor(
        public emoji:string,
        public nombre:string,
        public apaterno:string,
        public amaterno:string,
        public sexo:string,
        public edad:string,
        public correo:string
    ){
        this.randomicon();
    }

    public randomicon(){
        this.emoji=this.iconos[Math.floor(Math.random()*10)].toString();
    }
}