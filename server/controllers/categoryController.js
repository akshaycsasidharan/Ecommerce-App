import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }

    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category Already Exists",
      });
    }

    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(200).send({
      success: true,
      message: "new category created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Category",
    });
  }
};

export const updatecategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    console.log("Update Request:", { id, name });

    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );

    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    console.error("Error updating category:", error.message);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error in Category Update",
    });
  }
};

export const getCategory = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "All Categories List",
      category,
    });
  } catch (error) {
    console.error("Error updating category:", error.message);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error While Getting all categories",
    });
  }
};

export const singleCategory = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "get single category successfully",
      category,
    });
  } catch (error) {
    console.error("Error updating category:", error.message);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error While Getting all categories",
    });
  }
};

export const deletecategory = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "category deleted successfully",
    });
  } catch (error) {
    console.error("Error updating category:", error.message);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error While Getting all categories",
    });
  }
};
