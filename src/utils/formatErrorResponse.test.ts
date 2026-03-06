import { describe, it, expect } from 'vitest'
import { formatErrorResponse, formatSuccessResponse } from './formatErrorResponse'

describe('formatErrorResponse', () => {
  it('should return a properly formatted error response', () => {
    const result = formatErrorResponse(
      400,
      'BAD_REQUEST',
      'Invalid input',
      '/test'
    )

    expect(result.status).toBe(400)
    expect(result.error).toBe('BAD_REQUEST')
    expect(result.message).toBe('Invalid input')
    expect(result.path).toBe('/test')
    expect(result.timestamp).toBeDefined()
  })
})

describe('formatSuccessResponse', () => {
  it('should return a properly formatted success response with data', () => {
    const mockData = { id: 1, name: 'Nathan' }

    const result = formatSuccessResponse(
      200,
      'Success',
      mockData,
      '/users'
    )

    expect(result.status).toBe(200)
    expect(result.message).toBe('Success')
    expect(result.data).toEqual(mockData)
    expect(result.path).toBe('/users')
    expect(result.timestamp).toBeDefined()
  })

  it('should allow null data', () => {
    const result = formatSuccessResponse(
      204,
      'No content',
      null,
      '/users'
    )

    expect(result.data).toBeNull()
  })
})