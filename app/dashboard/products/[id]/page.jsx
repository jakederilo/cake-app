import React from 'react'
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";


const SingleProductPage = () => {
 


  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="product" fill />
        </div>
        Chocolate Cake
      </div>
      <div className={styles.formContainer}>
        <form action={''} className={styles.form}>
          <input type="hidden" name="id" value="" />
          <label>Title</label>
          <input type="text" name="title" placeholder="Chocolate" />
          <label>Price</label>
          <input type="number" name="price" placeholder="499" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="45" />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder="red"
          />
          <label>Layer</label>
          <textarea
            type="text"
            name="size"
            placeholder="2"
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={''}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};
 

export default SingleProductPage