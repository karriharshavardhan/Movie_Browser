import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta
              et enim id tincidunt. Aenean tristique lorem neque, et porttitor
              metus condimentum eu. Pellentesque id lorem consequat felis
              hendrerit sagittis non non erat. Suspendisse ac enim non nunc
              mollis pulvinar nec vestibulum felis. Donec auctor sapien nec nibh
              tincidunt, vitae vestibulum lacus commodo.
              ante.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
