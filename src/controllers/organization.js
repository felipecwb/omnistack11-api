const organization = require('../services/organization')

async function list(request, response) {
  let orgs = await organization.findAll()
  return response.json(orgs)
}

async function get(request, response) {
  try {
    let org = await organization.findById(request.params.id)
    return response.json(org)
  } catch (error) {
    return response.status(404).json({ message: error.message })
  }
}

async function create(request, response) {
  const { name, email, whatsapp, city, uf } = request.body

  try {
    let org = await organization.create({ name, email, whatsapp, city, uf })
    return response.status(201).json(org)
  } catch (error) {
    return response.status(500).json({ message: error.message })
  }
}

async function update(request, response) {
  const { name, email, whatsapp, city, uf } = request.body

  try {
    let org = await organization.update(request.params.id, { name, email, whatsapp, city, uf })
    return response.status(202).json(org)
  } catch (error) {
    return response.status(404).json({ message: error.message })
  }
}

async function exclude(request, response) {
  try {
    let org = await organization.drop(request.params.id)
    return response.status(202).json(org)
  } catch (error) {
    return response.status(404).json({ message: error.message })
  }
}

// routes
const router = require('express').Router()

router.get('/', list)
router.get('/:id', get)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', exclude)

module.exports = router
