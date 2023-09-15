export interface categoryInterface{
    id:number,
    name:string,
    description:string
    status:string
   action:""
}

export const categoryData:Array<categoryInterface> =[
    {
        id:123,
        name:"Milk",
        description:"Lorem Ipsum is simply dummy text",
        status:"Active",
        action:"",
    },
    {
        id:124,
        name:"Fruits",
        description:"Lorem Ipsum is simply dummy text",
        status:"Active",
       action:""
    },
    {
        id:125,
        name:"Vegetable",
        description:"Lorem Ipsum is simply dummy text",
        status:"Inactive",
       action:""
    }
]