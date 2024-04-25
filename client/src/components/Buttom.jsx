const Botom = () => {
    return (
      <div className="d-flex justify-content-sm-center justify-content-md-center">
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
    );
  };
  
  export default Botom;
  