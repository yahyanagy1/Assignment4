import {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} from "./supplier.service.js";

export const getSuppliers = async (req, res) => {
  const suppliers = await getAllSuppliers();
  res.status(200).json({
    message: "Suppliers fetched successfully",
    suppliers,
  });
};

export const getSupplier = async (req, res) => {
  const supplier = await getSupplierById(req.params.id);
  res.status(200).json({
    message: "Supplier fetched successfully",
    supplier,
  });
};

export const addSupplier = async (req, res) => {
  const result = await createSupplier(req.body);
  res.status(201).json({
    message: "Supplier created successfully",
    result,
  });
};

export const editSupplier = async (req, res) => {
  const result = await updateSupplier(req.params.id, req.body);
  res.status(200).json({
    message: "Supplier updated successfully",
    result,
  });
};

export const removeSupplier = async (req, res) => {
  const result = await deleteSupplier(req.params.id);
  res.status(200).json({
    message: "Supplier deleted successfully",
    result,
  });
};