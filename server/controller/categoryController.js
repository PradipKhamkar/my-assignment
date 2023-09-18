const categoryModel = require("../model/categoryModel");
const sendError = require("../utils/sendError");

const addCategory = async (req, res) => {
  try {
    const { name, description, status } = req.body;
    const newCategory = await categoryModel.create({
      name,
      description,
      status,
    });
    res.status(201).json({
      success: true,
      message: "New category added",
      newCategory,
    });
  } catch (error) {
    sendError(res, "failed to add category", error.message);
  }
};

const getAllCategory = async (req, res) => {
  try {
    const categoriesData = await categoryModel.find();
    res.status(200).json({
      success: true,
      categoriesData,
      message: "Category data retrieve successfully..!!",
    });
  } catch (error) {
    sendError(res, "failed to get category data", error.message);
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name, description, status } = req.body;
    const { categoryId } = req.params;

    const isCategoryExit = await categoryModel.findById(categoryId);

    if (isCategoryExit) {
      const updatedCategory = await categoryModel.findByIdAndUpdate(
        isCategoryExit._id,
        {
          name,
          description,
          status,
        }
      );
      res.status(200).json({
        success: true,
        message: "category update successfully",
      });
    } else {
      sendError(res, "invalid category id", error.message);
    }
  } catch (error) {
    sendError(res, "failed to update category", error.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    if (categoryId) {
      const isCategoryExit = await categoryModel.findById(categoryId);
      if (isCategoryExit) {
        const deletedCategory = await categoryModel.findByIdAndDelete(
          categoryId
        );
        res.status(200).json({
          success: true,
          message: "Category deleted successfully..!!",
          deletedCategory,
        });
      } else {
        sendError(res, "Category not exit with id");
      }
    } else {
      sendError(res, "category id missing");
    }
  } catch (error) {
    sendError(res, "failed to delete category", error.message);
  }
};

module.exports = {
  addCategory,
  updateCategory,
  deleteCategory,
  getAllCategory,
};
