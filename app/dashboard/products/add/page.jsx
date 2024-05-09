import React from 'react'
import styles from '../../../ui/dashboard/products/addProduct/addProuct.module.css'
import { addProduct } from '@/app/lib/action';

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Cultural or Regional</option>
          <option value="phone">Ingredients-Based</option>
          <option value="computer">Specialty Cakes</option>
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="layer" name="layer" />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default AddProductPage