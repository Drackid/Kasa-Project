import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import ThumbCard from '../components/ThumbCard';
import './Home.css';

function Home() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/properties');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        setAccommodations(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAccommodations();
  }, []);

  // Réinitialiser la page courante quand les données changent
  useEffect(() => {
    setCurrentPage(1);
  }, [accommodations.length]);

  const totalPages = Math.max(1, Math.ceil(accommodations.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedAccommodations = accommodations.slice(startIndex, endIndex);

  const goToPreviousPage = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goToNextPage = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
  const goToPage = (page) => setCurrentPage(page);

  if (loading) {
    return <div className="loading">Chargement des logements...</div>;
  }

  if (error) {
    return <div className="error">Erreur: {error}</div>;
  }

  return (
    <div className="home">
      {/* Banner selon Figma */}
      <Banner 
        title="Chez vous, partout et ailleurs"
        imageUrl="/banner-home.jpg"
      />
      
      {/* Gallery des ThumbCards selon Figma */}
      <section className="gallery-section">
        <div className="gallery-container">
          {displayedAccommodations.map((accommodation) => (
            <ThumbCard
              key={accommodation.id}
              id={accommodation.id}
              title={accommodation.title}
              imageUrl={accommodation.cover}
            />
          ))}
        </div>
        {/* Pagination */}
        {accommodations.length > ITEMS_PER_PAGE && (
          <div className="pagination">
            <button
              className="page-btn prev"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              Précédent
            </button>

            <div className="page-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`page-number${page === currentPage ? ' active' : ''}`}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              className="page-btn next"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Suivant
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;