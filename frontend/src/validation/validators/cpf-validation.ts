import { InvalidFieldError } from '../errors'
import { FieldValidation } from '../protocols'

export class CpfValidation implements FieldValidation {
  private readonly multipliers = [10, 9, 8, 7, 6, 5, 4, 3, 2]
  constructor (readonly field: string) {}

  validate (input: object): Error {
    const isValid = this.isValid(input[this.field])

    return (!input[this.field] || isValid) ? null : new InvalidFieldError()
  }

  private isValid (cpf: string): boolean {
    const cpfUnformatted = cpf.replaceAll('.', '').replace('-', '')
    console.log(cpfUnformatted)
    if (cpfUnformatted.length !== 11) return false
    if (cpfUnformatted === '00000000000') return false
    if (cpfUnformatted.split('').some((digit) => isNaN(Number(digit)))) return false

    const digitsArray = cpfUnformatted.split('').slice(0, 9)
    const verifiersDigits = cpfUnformatted.slice(9)
    if (!this.validation(digitsArray, verifiersDigits[0])) return false

    this.multipliers.unshift(11)
    digitsArray.push(verifiersDigits[0])
    if (!this.validation(digitsArray, verifiersDigits[1])) {
      this.multipliers.shift()
      return false
    }

    this.multipliers.shift()
    return true
  }

  private validation (digits: string[], verifier: string): boolean {
    const digitsSum = digits.reduce((product, current, index) => {
      return product + (Number(current) * this.multipliers[index])
    }, 0)

    const rest = (digitsSum * 10) % 11 === 10 || (digitsSum * 10) % 11 === 11 ? 0 : (digitsSum * 10) % 11
    if (rest !== Number(verifier)) return false

    return true
  }
}
