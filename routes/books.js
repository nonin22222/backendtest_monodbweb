const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/book');

router.get('/', async (req, res, next) => {
    try {
      const books = await Book.find().lean().exec();
      res.json(books);
    } catch (err) {
      next(err);
    }
  });



router.post('/',async (req,res,next)=>{
    try {
        const newBook = await Book.create(req.body);     
        res.status(201).json(newBook);
      } catch (err) {
        next(err);
      }
})

router.get('/:id',async (req,res,next)=>{
  try {
      const newBook = await Book.findById(req.params.id);     
      res.status(201).json(newBook);
    } catch (err) {
      next(err);
    }
})

router.put('/:id',async (req,res,next)=>{
  try {
      const newBook = await Book.findByIdAndUpdate(req.params.id,req.body);     
      res.status(201).json(newBook);
    } catch (err) {
      next(err);
    }
})

router.delete('/:id',async (req,res,next)=>{
  try {
      const newBook = await Book.findByIdAndDelete(req.params.id);     
      res.status(201).json(newBook);
    } catch (err) {
      next(err);
    }
})

router.get('/search-category/:category',async (req,res,next)=>{
  try {
      const search_categorys = await Book.find({category:req.params.category});    
      if (search_categorys.length === 0) {
        // ถ้าไม่มีข้อมูลที่ตรงกับประเภทที่ค้นหา
        return res.status(404).json({ message: 'ไม่พบข้อมูลที่ตรงกับประเภทที่ระบุ' });
      } 
      res.status(201).json(newBook);
    } catch (err) {
      next(err);
    }
})

module.exports= router;