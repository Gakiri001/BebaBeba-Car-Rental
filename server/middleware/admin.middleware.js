// export const isAdmin = (req, res, next) => {
//   // Assuming you have a way to check if the user is an admin
//   const user = req.user;
//   if (user && user.role === "Admin") {
//     next();
//   } else {
//     res.status(403).json({ success: false, message: "Access denied" });
//   }
// };