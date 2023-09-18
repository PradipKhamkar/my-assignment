const sendError = require("../utils/sendError");
const cloudinary = require("cloudinary");
const productModel = require("../model/productModel");

const addProduct = async (req, res) => {
  try {
    const { name, packSize, category, mrp, status, image } = req.body;
    if (image) {
      const result = await cloudinary.v2.uploader.upload(image, {
        folder: "products",
      });
      const newProduct = await productModel.create({
        name,
        category,
        image: result.url,
        packSize,
        mrp,
        status,
      });
      res.status(201).json({
        success: true,
        message: "Product added successfully !!",
        newProduct,
      });
    } else {
      sendError("Product Image is Required !!");
    }
  } catch (error) {
    sendError(res, "filed to add product..!!", error.message);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const productsData = await productModel.find().populate("category", "name");
    res.status(200).json({
      success: true,
      productsData,
      message: "Product data retrieve successfully..!!",
    });
  } catch (error) {
    sendError(res, "failed to get product data", error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { image, name, packSize, mrp, category, status } = req.body;
    const { productId } = req.params;

    const isProductExit = await productModel.findById(productId);

    if (isProductExit) {
      const updatedDoc = await productModel.findByIdAndUpdate(
        isProductExit._id,
        {
          name,
          packSize,
          mrp,
          category,
          status,
        }
      );
      if (image?.trim().length !== 0) {
        const result = await cloudinary.v2.uploader.upload(image, {
          folder: "products",
        });
        updatedDoc.image = result.url;
        await updatedDoc.save();
      }

      res.status(200).json({
        success: true,
        message: "product update successfully",
      });
    } else {
      sendError(res, "invalid product id", error.message);
    }
  } catch (error) {
    sendError(res, "failed to update product", error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    if (productId) {
      const isProductExit = await productModel.findById(productId);
      if (isProductExit) {
        const deletedProduct = await productModel.findByIdAndDelete(productId);
        res.status(200).json({
          success: true,
          message: "Product deleted successfully..!!",
          deletedProduct,
        });
      } else {
        sendError(res, "Product not exit with id");
      }
    } else {
      sendError(res, "Product id missing");
    }
  } catch (error) {
    sendError(res, "failed to delete Product", error.message);
  }
};

module.exports = { addProduct, updateProduct, deleteProduct, getAllProducts };
