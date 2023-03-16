import { Cardapio, CardapioItem } from '@/app/entities/Cardapio.entity'
import { model, Schema } from 'mongoose'

const CardapioItemSchema = new Schema<CardapioItem>({
  id: { type: Number, required: false },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  images: { type: [String], required: true },
  order: { type: Number, required: true },
})

const CardapioSchema = new Schema<Cardapio & { updatedAt: Date }>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true, enum: ['active', 'inactive'] },
  items: { type: [CardapioItemSchema], required: true, minlength: 1 },
  createdAt: { type: Date, required: true, default: new Date() },
  updatedAt: { type: Date, required: true, default: new Date() },
})

export const CardapioModel = model<Cardapio>('Cardapio', CardapioSchema)