export interface ProductDataInterface {
  id: any;
  name: String;
  packSize: Number | String;
  category: String;
  MRP: Number | String;
  Image: any;
  Status: String;
  action:""
}

const productData: Array<ProductDataInterface> = [
  {
    id: 123,
    name: "Amul Taaza",
    packSize: "500 ML",
    category: "Milk",
    MRP: "Rs 27",
    Image: require("../assets/images/mik.png"),
    Status: "Active",
    action:""
  },
  {
    id: 124,
    name: "Gokul Cow",
    packSize: "500 ML",
    category: "Milk",
    MRP: "Rs 27",
    Image: require("../assets/images/gokulCow.png"),
    Status: "Inactive",
    action:""
  },
  {
    id: 125,
    name: "Shimla Apple",
    packSize: "1 kg",
    category: "Fruits",
    MRP: "Rs 150",
    Image: require("../assets/images/Apple.png"),
    Status: "Active",
    action:""
  },

];

export default productData;
