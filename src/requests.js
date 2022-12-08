/** @format */

import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODRjM2ZhM2Y0MTg2YWJlMjc2MjU5ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDMzNjgxMCwiZXhwIjoxNjcwNTk2MDEwfQ.bmFwXPz7cBptFL_4T9cLJ-fU7xb7PU_X8mmgJdo36Ao'

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
})
