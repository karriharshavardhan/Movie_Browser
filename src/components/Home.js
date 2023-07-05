import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to react 201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta
              et enim id tincidunt. Aenean tristique lorem neque, et porttitor
              metus condimentum eu. Pellentesque id lorem consequat felis
              hendrerit sagittis non non erat. Suspendisse ac enim non nunc
              mollis pulvinar nec vestibulum felis. Donec auctor sapien nec nibh
              tincidunt, vitae vestibulum lacus commodo. Cras a elit id mauris
              lacinia faucibus et sed mauris. Suspendisse auctor felis et elit
              pretium cursus. Nulla cursus lectus et ex bibendum, a sagittis
              orci imperdiet. Proin sed enim ac mauris feugiat semper. Sed
              convallis felis eget velit fermentum, id feugiat quam elementum.
              Curabitur vel dictum eros. Sed porttitor ante a imperdiet
              vulputate. Fusce a neque molestie, lobortis nisl et, accumsan
              ante.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
