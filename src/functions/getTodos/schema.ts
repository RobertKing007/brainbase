export default {
  type: "object",
  properties: {
    userId: { type: 'number' },
    id: { type: 'number' },
    title: { type: 'string' },
    completed: { type: 'boolean' }
  }
} as const;