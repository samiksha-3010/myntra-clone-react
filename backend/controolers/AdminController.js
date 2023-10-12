import UserModals from "../Modals/User.Modals.js";
import UserModal from "../Modals/User.Modals.js";
import jwt from "jsonwebtoken";

export const blockUser = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await UserModal.findByIdAndUpdate(
      userId,
      { isBlocked: true },
      { new: true }
    );

    if (user) {
      return res
        .status(200)
        .json({
          success: true,
          message: "User Blocked successfully",
          user: user,
        });
    }
    throw new Error("Internal Error,Please Try again later!");
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};

export const unBlockUser = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await UserModals.findByIdAndUpdate(
      userId,
      { isBlocked: false },
      { new: true }
    );

    if (user) {
      return res
        .status(200)
        .json({
          success: true,
          message: "User Blocked successfully",
          user: user,
        });
    }
    throw new Error("Internal Error,Please Try again later!");
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};

export const blockProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await ProductModals.findByIdAndUpdate(
      productId,
      { isBlocked: true },
      { new: true }
    );

    if (product) {
      return res
        .status(200)
        .json({
          success: true,
          message: "Product Blocked successfully",
          product: product,
        });
    }
    throw new Error("Internal Error,Please Try again later!");
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};

export const unBlockProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await ProductModals.findByIdAndUpdate(
      productId,
      { isBlocked: false },
      { new: true }
    );

    if (product) {
      return res
        .status(200)
        .json({
          success: true,
          message: "Product Blocked successfully",
          product: product,
        });
    }
    throw new Error("Internal Error,Please Try again later!");
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};

export const verifyProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await ProductModals.findByIdAndUpdate(
      productId,
      { isVerified: true },
      { new: true }
    );

    if (product) {
      return res
        .status(200)
        .json({
          success: true,
          message: "Product is Verified",
          product: product,
        });
    }
    throw new Error("Internal Error,Please Try again later!");
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};





export const getAllBuyers = async (req, res) => {
    try {
        const { token } = req.body;

        const decodedData = jwt.verify(token, process.env.JWT_SECRET)

        if (!decodedData) {
            return res.status(404).json({ status: "error", message: "Token not valid." })
        }

        // const userId = decodedData.userId;

        const buyers = await UserModals.find({ role: "Buyer" })

        if (buyers.length) {
            return res.status(200).json({ status: "success", user:buyers })
        }

        return res.status(404).json({ status: "error", message: "No users found." })

    } catch (error) {
        return res.status(500).json({ status: "error", error: error.message })
    }
}


export const getAllSellers = async (req, res) => {
    try {
        const { token } = req.body;

        const decodedData = jwt.verify(token, process.env.JWT_SECRET)

        if (!decodedData) {
            return res.status(404).json({ status: "error", message: "Token not valid." })
        }

        // const userId = decodedData.userId;

        const sellers = await UserModals.find({ role: "Seller" })

        if (sellers.length) {
            return res.status(200).json({ status: "success", user:sellers })
        }

        return res.status(404).json({ status: "error", message: "No users found." })

    } catch (error) {
        return res.status(500).json({ status: "error", error: error.message })
    }
}


export const getAllProducts = async (req, res) => {
    try {
      const products = await ProductModals.find({});
      if (products.length) {
        return res.status(200).json({ status: "Success", products: products });
      }
      return res
        .status(404)
        .json({ status: "error", message: "No products found!" });
    } catch (error) {
      return res.status(500).json({ status: "error", error: error.message });
    }
  };

  export const getVerifiedProducts = async (req, res) => {
    try {
      const products = await ProductModals.find({isVerified:"true"});
      if (products.length) {
        return res.status(200).json({ status: "Success", products: products });
      }
      return res
        .status(404)
        .json({ status: "error", message: "No products found!" });
    } catch (error) {
      return res.status(500).json({ status: "error", error: error.message });
    }
  };

  export const getUnVerifiedProducts = async (req, res) => {
    try {
      const products = await ProductModals.find({isVerified:"false"});
      if (products.length) {
        return res.status(200).json({ status: "Success", products: products });
      }
      return res
        .status(404)
        .json({ status: "error", message: "No products found!" });
    } catch (error) {
      return res.status(500).json({ status: "error", error: error.message });
    }
  };

  export const getBlockedProducts = async (req, res) => {
    try {
      const products = await ProductModals.find({isBlocked:"true"});
      if (products.length) {
        return res.status(200).json({ status: "Success", products: products });
      }
      return res
        .status(404)
        .json({ status: "error", message: "No products found!" });
    } catch (error) {
      return res.status(500).json({ status: "error", error: error.message });
    }
  };