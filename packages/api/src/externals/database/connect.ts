import { config } from "@configs/config"
import mongoose from "mongoose"

export const connect = async () => {
  try {
    await mongoose.connect(config.mongoUrl)
    console.log('MongoDB connected')
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
