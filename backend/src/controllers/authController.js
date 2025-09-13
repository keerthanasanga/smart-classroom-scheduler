export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (email === "admin@test.com" && password === "admin123") {
    return res.json({ message: "Login successful", token: "dummy-token" });
  }
  res.status(401).json({ message: "Invalid credentials" });
};
