const uuid = require('uuid')
const connection = require('../database/connection')

const ENTITY = 'organizations'

async function findAll() {
  return await connection(ENTITY).select('*')
}

async function findById(id) {
  let orgs = await connection(ENTITY).select('*').where('id', id)
  if (orgs.length < 1) {
    throw new Error('Organization Not Found!')
  }

  return orgs[0]
}

async function create({ name, email, whatsapp, city, uf }) {
  let id = uuid.v4()
  let now = new Date()

  let org = {
    id, name, email, whatsapp, city, uf,
    created_at: now,
    updated_at: now
  }

  try {
    await connection(ENTITY).insert(org);
    return org
  } catch (error) {
    console.error(error)
    throw new Error('Could not save organization: ' + error.message)
  }
}

async function update(id, { name, email, whatsapp, city, uf }) {
  org = await findById(id)

  let newFields = { name, email, whatsapp, city, uf, updated_at: new Date() }

  try {
    await connection(ENTITY).where('id', id).update(newFields)

    return { ...org, ...newFields }
  } catch (error) {
    console.error(error)
    throw new Error('Could not update organization: ' + error.message)
  }
}

async function drop(id) {
  org = await findById(id)

  try {
    await connection(ENTITY).where('id', id).del()
    return org
  } catch (error) {
    console.error(error)
    throw new Error('Could not delete organization: ' + error.message)
  }
}

module.exports = {
  findAll, findById, create, update, drop
}
