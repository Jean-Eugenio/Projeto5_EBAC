class Contato {
  name: string
  phone: string[]
  email: string
  id: number

  constructor(name: string, phone: string[], email: string, id: number) {
    this.name = name
    this.phone = phone
    this.email = email
    this.id = id
  }
}

export default Contato
