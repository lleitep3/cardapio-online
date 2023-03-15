import { Product } from '@/entities/Product.entity'
import { Schema, model } from 'mongoose'

const ProductSchema = new Schema<Product>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  images: { type: [String], required: true },
  createdAt: { type: Date, required: true, default: new Date() },
})

export const ProductModel = model<Product>('Product', ProductSchema)