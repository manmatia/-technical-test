import "./Buttom.css"

const Botom = () => {
    return (
    <div className="buttonHome">  
      <div className="mr-30 d-flex flex-row flex-lg-row justify-content-lg-start justify-content-center">
        <a href="/landing" target="_self">
          <button type="button" class="btn btn-outline-primary me-3">
            Go back
          </button>
        </a>
        <a href="/create" target="_self">
          <button type="button" class="btn btn-outline-success ms-3">
            + Create{" "}
          </button>
        </a>
      </div>
      </div>  
    );
  };
  
  export default Botom;
  