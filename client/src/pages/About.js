import React from 'react'
import Layout from './../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={"About Us-Deco Design"}>
        <div className="row contactus">
         <div className="col-md-6">
         <img src="/images/about.jpg" alt="contactus"
         style={{width:"100%"}} />
         </div>
         <div className="col-md-4">
           <p className="text-justify mt-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quibusdam dignissimos facere repellat quaerat cum placeat dicta. Dignissimos dicta temporibus quidem nemo ad tempore deserunt, perferendis sequi, minus aperiam saepe?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel reiciendis cupiditate dolorem quisquam alias? Rem corporis quas tenetur pariatur quam libero accusantium nemo. Voluptatem nobis dolorem dignissimos esse fugit blanditiis.
           </p>
         </div>
        </div>
    </Layout>
  )
}

export default About