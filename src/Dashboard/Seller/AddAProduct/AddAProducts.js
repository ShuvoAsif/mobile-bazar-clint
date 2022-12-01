import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AddAProducts = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_Imgbb_key;


    const handleAddAProduct = event => {


        event.preventDefault();
        const form = event.target;
        const name = form.productName.value;
        const catrgory = form.category.value;
        const condition = form.condition.value;
        const phoneNumber = form.phoneNumber.value;
        const purchaseYear = form.purchaseYear.value;
        const use_time = form.usedYear.value;
        const posted_time = form.date.value;
        const oigial_price = form.originalPrice.value;
        const resale_price = form.resalePrice.value;
        const location = form.location.value;
        const description = form.description.value;
        const image = form.img.value;


        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                }

                const product = {
                    name: name,
                    seller: user?.name,
                    catrgory,
                    condition,
                    phoneNumber,
                    purchaseYear,
                    location,
                    image,
                    resale_price,
                    oigial_price,
                    use_time,
                    posted_time,
                    seller_mail: user?.email,
                    description
                }


                /*
                 fetch('http://localhost:5000/addmobiles', {
                     method: 'POST',
                     headers: {
                         'content-type': 'application/json',
                         authorization: `bearer ${localStorage.getItem('accessToken')}`
                     },
                     body: JSON.stringify(product)
                 })
                     .then(res => res.json())
                     .then(result => {
                         console.log(result);
                         toast.success(`${product.name} is added successfully`);
                         navigate('/dashboard/myproducts')
                     })
                     */
                console.log(product)
            });


    }

    return (
        <div className='bg-zinc-100'>
            <form onSubmit={handleAddAProduct}>
                <h2 className="text-5xl text-center text-sky-900">Add a service</h2>
                <div className='grid grid-cols-1 mt-5 mx-10 gap-4'>
                    <input name="productName" type="text" placeholder="Product Name" className="input input-ghost w-full  input-bordered" required />
                    <select name='category' className="select select-info input-bordered w-full" required>
                        <option disabled selected>Select Category</option>
                        <option value='01' >Samsung</option>
                        <option value='02'>One Plus</option>
                        <option value='03'>Apple</option>
                    </select>
                    <select name='condition' className="select select-info  input-bordered w-full" required>
                        <option disabled selected>Select Condition</option>
                        <option value="xcellent">excellent</option>
                        <option value="good">good</option>
                        <option value="fair">fair</option>
                    </select>
                    <input name="originalPrice" type="text" placeholder="Original Price" className="input input-ghost w-full  input-bordered" required />
                    <input name="resalePrice" type="text" placeholder="Resale Price" className="input input-ghost w-full  input-bordered" required />
                    <input name="purchaseYear" type="text" placeholder="Year of Purchase" className="input input-ghost w-full  input-bordered" />
                    <input name="usedYear" type="text" placeholder="Used Of Years" className="input input-ghost w-full  input-bordered" required />
                    <input name="phoneNumber" type="number" placeholder="Phone Number" className="input input-ghost w-full  input-bordered" />
                    <input name="img" type="file" placeholder="Image" className="input input-ghost w-full  input-bordered" required />
                    <input name="location" type="text" placeholder="Location" className="input input-ghost w-full  input-bordered" required />
                    <input name="date" type="date" placeholder="Date" className="input input-ghost w-full  input-bordered" required />
                    <textarea name="description" className="textarea textarea-bordered  h-24 w-full" placeholder="Description" required></textarea>
                </div>
                <div className="form-control my-6 mx-36">
                    <input className='btn btn-secondary' type="submit" value="Add A Product" />
                </div>
            </form>
        </div>
    );
};

export default AddAProducts;