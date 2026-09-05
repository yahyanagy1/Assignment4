import {
    getAllSales,
    getSaleById,
    createSale,
    updateSale,
    deleteSale
} from "./sale.service.js";

export const getSales = async (req, res) => {
    const sales = await getAllSales();

    res.status(200).json({
        message: "Sales fetched successfully",
        sales
    });
};

export const getSale = async (req, res) => {
    const sale = await getSaleById(req.params.id);

    res.status(200).json({
        message: "Sale fetched successfully",
        sale
    });
};

export const addSale = async (req, res) => {
    const result = await createSale(req.body);

    res.status(201).json({
        message: "Sale created successfully",
        result
    });
};

export const editSale = async (req, res) => {
    const result = await updateSale(req.params.id, req.body);

    res.status(200).json({
        message: "Sale updated successfully",
        result
    });
};

export const removeSale = async (req, res) => {
    const result = await deleteSale(req.params.id);

    res.status(200).json({
        message: "Sale deleted successfully",
        result
    });
};