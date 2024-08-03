import './Footer.css';

const Footer = ({ resultsCount, currentPage, totalPages, setCurrentPage }) => {
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };
  return (
    <div className="footer">
      <div>Results {resultsCount} </div>
      <div>Total Pages {totalPages} </div>
      <div className="navigator">
        <button onClick={previousPage}>Previous</button>
        <div>Current Page {currentPage} </div>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default Footer;
