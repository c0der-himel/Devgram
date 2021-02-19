const Home = () => {
  return (
    <section className="Home">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="home shadow-lg rounded-3 py-4 px-5 mb-5">
              <div className="home-img py-2">
                <h4>Bill Gates</h4>
                <img
                  className="img-fluid rounded-3 shadow-lg"
                  src="https://miro.medium.com/max/10000/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg"
                  alt="img"
                />
              </div>
              <div className="home-content py-2">
                <div className="post py-2">
                  <i className="bi bi-heart-fill text-danger"></i>
                  <h5>title</h5>
                  <p>this is javascript</p>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="add a comment"
                  />
                </div>
              </div>
            </div>
            <div className="home shadow-lg rounded-3 py-4 px-5 mb-5">
              <div className="home-img py-2">
                <h4>Bill Gates</h4>
                <img
                  className="img-fluid rounded-3 shadow-lg"
                  src="https://image.freepik.com/free-vector/programmer-coding-young-man-freelancer-working-program-code-with-laptop-geek-coding-software-vector-concept_53562-9214.jpg"
                  alt="img"
                />
              </div>
              <div className="home-content py-2">
                <div className="post py-2">
                  <i className="bi bi-heart-fill text-danger"></i>
                  <h5>title</h5>
                  <p>this is javascript</p>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="add a comment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
