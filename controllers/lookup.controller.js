export function getRoles(_req, res) {
  res.send({
    roles: [
      "private_chef",
      "individual",
      "catering_business"
    ],
  })
}
