import { Router, type IRouter } from "express";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, projectType, message } = req.body;

    if (!name || !email || !projectType || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    console.log("New contact inquiry:", { name, email, projectType, message });

    return res.status(200).json({ 
      success: true,
      message: "Thank you for your inquiry. We will be in touch shortly." 
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ error: "Failed to process your request" });
  }
});

export default router;
