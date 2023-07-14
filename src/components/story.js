import './storystyles.scss';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import image1 from './icons_assets/Mario and Adrian A.jpg'
import image2 from './icons_assets/Mario and Adrian b.jpg'
const Story =()=>{
    return(
        <section id='story'>
           <article>
            <div className='container-fluid py-5' id='story-section'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                    <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum. Sed ut 
          perspiciatis unde omnis iste natus error sit voluptatem accusantium 
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
          inventore veritatis et quasi architecto beatae vitae dicta sunt 
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
          voluptatem sequi nesciunt.
        </p>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='image_cont'>
                       <img src={image1} alt='image1'></img>
                       <img src={image2} alt='image2' id='image-overlay'></img>
                    </div>

                </div>

            </div>
           </article>
        </section>
    );
}
export default Story;