module.exports = {
  anthenticator: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/users/login')
  }
}