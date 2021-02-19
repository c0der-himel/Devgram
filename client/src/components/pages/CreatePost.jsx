const CreatePost = () => {
  return (
    <section className="Create-Post">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="create-post shadow-lg rounded-3 p-5">
              <div className="create-post-title text-center mb-5 px-5">
                <h1>Create Post</h1>
                <hr />
              </div>
              <div className="create-post-content">
                <form>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control"
                      placeholder="Enter Title"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="body" className="form-label">
                      Body
                    </label>
                    <textarea
                      id="body"
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Enter Body"
                    ></textarea>
                  </div>
                  <div className="input-group mb-3">
                    <input type="file" className="form-control" id="photo" />
                    <label className="input-group-text" htmlFor="photo">
                      Upload Photo
                    </label>
                  </div>
                  <div className="mt-4 d-grid">
                    <button className="btn btn-dark py-2">Post</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
