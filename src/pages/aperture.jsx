import "./style.css";
import logo from "@/app/assets/img/IMAGE.png";
import adress from "@/app/assets/img/Frame (2).png";
import btnIcon from "@/app/assets/img/Frame (6).png";
import btnIcon1 from "@/app/assets/img/Rectangle (2).png";
import brands from "@/app/assets/img/Frame (4).png"
import social from "@/app/assets/img/Frame (5).png"

export default function HomePage() {
  return (
    <>
      <header>
        <div className="navbar">
          <img src={logo} alt="" />
          <div className="pages">
            <p>Business areas</p>
            <p>Featured images</p>
            <p>Gear cage</p>
            <p>Contact</p>
            <button>Get template</button>
          </div>
        </div>
        <section className="section1">
          <p>Photographer & Filmmaker</p>
          <h1 style={{ color: "white", fontSize: "45px", fontWeight: "400" }}>
            Aperture Studios
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <img className="adress" src={adress} alt="" />
        </section>
      </header>
      <section className="section2">
        <h2>What we do.</h2>
        <p>The areas that we are specialized in.</p>
        <div className="cards">
          <div className="card card1">
            <h3>Product Photography</h3>
            <p>
              Cras commodo consequat orci, in convallis risus egestas non. Nulla
              efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero
              ac, cursus quam.
            </p>
            <button>
              <img src={btnIcon} alt="" /> Read more
            </button>
          </div>
          <div className="card card2">
            <h3>Product Photography</h3>
            <p>
              Cras commodo consequat orci, in convallis risus egestas non. Nulla
              efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero
              ac, cursus quam.
            </p>
            <button>
              <img src={btnIcon} alt="" /> Read more
            </button>
          </div>
          <div className="card card3">
            <h3>Product Photography</h3>
            <p>
              Cras commodo consequat orci, in convallis risus egestas non. Nulla
              efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero
              ac, cursus quam.
            </p>
            <button>
              <img src={btnIcon} alt="" /> Read more
            </button>
          </div>
          <div className="card card4">
            <h3>Product Photography</h3>
            <p>
              Cras commodo consequat orci, in convallis risus egestas non. Nulla
              efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero
              ac, cursus quam.
            </p>
            <button>
              <img src={btnIcon} alt="" /> Read more
            </button>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="divsec3">
          <h3>Sunset at Mount Fuji</h3>
          <p style={{ width: "65%" }}>
            Duis tristique sed lorem a vestibulum. Cras commodo consequat orci,
            in convallis risus egestas non.
          </p>
          <img src={adress} alt="" />
        </div>
      </section>
      <section className="section4">
        <div className="right">
            <div>
            <p>The Gear cage</p>
            <h3>The tools that we use.</h3>
            <p>The say that no place is boring if you have had a good nights sleep and have a pocket full of unexposed film. While we do not shoot a lot of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</p>
            <button>
                <img src={btnIcon} alt="" />
                Check it out
            </button>
            </div>
        </div>
        <div className="left">
        </div>
      </section>
      <section className="section5">
        <div className="divsec5">
          <h3>Monstera Leafs</h3>
          <p style={{ width: "65%" }}>
          Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.
          </p>
          <img src={adress} alt="" />
        </div>
      </section>
      <section className="section6">
        <h2>Past clients</h2>
        <p>Trusted by your favourite companies</p>
        <img src={brands} alt="" />
      </section>
      <section className="section5 section7">
        <div className="divsec5">
          <h3>Star fall in the Himalayas</h3>
          <p style={{ width: "65%" }}>
          Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
          </p>
          <img src={adress} alt="" />
        </div>
      </section>
      <footer>
        <section>
            <h2>Need help with photography or videography?</h2>
            <p>We are here for you!</p>
            <button> <img src={btnIcon} alt="" /> Get in touch</button>
        </section>
        <div className="foot">
            <div className="section">
                <div className="right">
                    <img src={logo} alt="" />
                    <p>Photographers & videographers capturing the world around us.</p>
                </div>
                <div className="left">
                  <div>
                    <h3>Business areas</h3>
                    <p>Product Photography <br />
                    Architecture Photography <br />
                    Drone Photography <br />
                    Wildlife Photography</p>
                  </div>
                  <div>
                    <h3>Pages</h3>
                    <p>Gear cage <br />
                    Featured images <br />
                    Contact <br />
                    Style guide <br />
                    Instructions <br />
                    Changelog</p>
                    </div>  
                </div>          
            </div>
            <div className="footer">
                <div className="subscribe">
                    <div>
                        <h3>Subscribe to our newsletter</h3>
                        <p>Read about all the things we do.</p>
                    </div>
                    <div className="input" style={{backgroundColor:"white"}}>
                        <input style={{backgroundColor:"transparent",border:"none",outline:"none"}} type="text" />
                        <img src={btnIcon1} alt="" />
                    </div>
                </div>
                <div className="rights">
                    <p>© Aperture Photography, Inc. All rights reserved. <a style={{color:"#cococo"}}>Licensing</a></p>
                    <img src={social} alt="" />
                </div>
            </div>
        </div>
      </footer>
    </>
  );
}
