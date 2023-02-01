import { validator } from './utils/helper'

describe('phone validate', () => {
  const type = 'phonenumber'
  it('should return true if phone number format is correct, else false', () => {
    expect(validator(type, '29564939')).toEqual(true)
    expect(validator(type, '2956493')).toEqual(false)
    expect(validator(type, '295649391')).toEqual(false)
    expect(validator(type, '+371-29564939')).toEqual(false)
    expect(validator(type, '+371 29564939')).toEqual(false)
    expect(validator(type, '39564939')).toEqual(false)
    expect(validator(type, '37139564939')).toEqual(false)
    expect(validator(type, '+37139564939')).toEqual(false)
    expect(validator(type, '+29564939')).toEqual(false)
    expect(validator(type, '253*13*3')).toEqual(false)
    expect(validator(type, '295-856-57')).toEqual(false)
    expect(validator(type, '29-585-657')).toEqual(false)
  })
})

describe('email validate', () => {
  const type = 'email'
  it('should return true if email format is correct, else false', () => {
    expect(validator(type, 'example.example@example.com')).toEqual(true)
    expect(validator(type, 'example@example.com')).toEqual(true)
    expect(validator(type, 'example@exam.ple.com')).toEqual(true)
    expect(validator(type, 'e_xample@example.com')).toEqual(true)
    expect(validator(type, 'e_xample@exam.ple.com')).toEqual(true)
    expect(validator(type, 'exa@mple@example.com')).toEqual(false)
    expect(validator(type, 'e__xample@example.com')).toEqual(false)
    expect(validator(type, 'exam-ple@example.com')).toEqual(true)
  })
})

describe('password validate', () => {
  const type = 'password'
  it('should return true if password format is correct, else false', () => {
    expect(validator(type, 'Pa5$word')).toEqual(true)
    expect(validator(type, 'pa5$word')).toEqual(true)
    expect(validator(type, 'Pa55word')).toEqual(false)
    expect(validator(type, 'Pa5$w0rd')).toEqual(true)
    expect(validator(type, 'Pa45$word')).toEqual(true)
    expect(validator(type, 'pa5$wor@')).toEqual(true)
    expect(validator(type, '1234%^&*')).toEqual(true)
    expect(validator(type, '1a5$wo*d')).toEqual(true)
  })
})

describe('name validate', () => {
  const type = 'password'
  it('should return true if password format is correct, else false', () => {
    expect(validator(type, 'Pa5$word')).toEqual(true)
    expect(validator(type, 'pa5$word')).toEqual(true)
    expect(validator(type, 'Pa55word')).toEqual(false)
    expect(validator(type, 'Pa5$w0rd')).toEqual(true)
    expect(validator(type, 'Pa45$word')).toEqual(true)
    expect(validator(type, 'pa5$wor@')).toEqual(true)
    expect(validator(type, '1234%^&*')).toEqual(true)
    expect(validator(type, '1a5$wo*d')).toEqual(true)
  })
})