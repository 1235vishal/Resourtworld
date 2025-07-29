
const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="container">
        <div className="news-header">
          <h1 className="news-title">News</h1>
          <p className="news-subtitle">DON'T MISS OUR LATEST UPDATE</p>
        </div>
        
        <div className="news-grid">
          {/* First Article */}
          <article className="news-card">
            <div className="news-date">
              <span className="date-number">30</span>
              <span className="date-month">Aug</span>
            </div>
            <div className="news-content">
              <div className="news-meta">
                <span className="category">in <strong>Business</strong></span>
                <span className="author">by <strong>admin</strong></span>
              </div>
              <h3 className="news-headline">We Invite You to These Wonderful Wine Tasting</h3>
              <p className="news-excerpt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna lirabe ites ipsum dolor sit amet...
              </p>
              <a href="#" className="read-more">READ MORE</a>
            </div>
          </article>

          {/* Second Article */}
          <article className="news-card">
            <div className="news-date">
              <span className="date-number">31</span>
              <span className="date-month">Aug</span>
            </div>
            <div className="news-content">
              <div className="news-meta">
                <span className="category">in <strong>Business</strong></span>
                <span className="author">by <strong>admin</strong></span>
              </div>
              <h3 className="news-headline">Top 10 Greatest Outdoor Activities that Kids Love!</h3>
              <p className="news-excerpt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna lirabe ites ipsum dolor sit amet...
              </p>
              <a href="#" className="read-more">READ MORE</a>
            </div>
          </article>

          {/* Third Article */}
          <article className="news-card">
            <div className="news-date">
              <span className="date-number">31</span>
              <span className="date-month">Aug</span>
            </div>
            <div className="news-content">
              <div className="news-meta">
                <span className="category">in <strong>Life Lessons</strong></span>
                <span className="author">by <strong>admin</strong></span>
              </div>
              <h3 className="news-headline">Catering Services for Fabulous Corporate Events</h3>
              <p className="news-excerpt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna lirabe ites ipsum dolor sit amet...
              </p>
              <a href="#" className="read-more">READ MORE</a>
            </div>
          </article>
        </div>
      </div>

      <style jsx>{`
        .news-section {
          padding: 80px 0;
          background-color: #ffffff;
          font-family: 'Georgia', serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .news-header {
          text-align: left;
          margin-bottom: 60px;
        }

        .news-title {
          font-size: 4rem;
          font-weight: 400;
          color: #333333;
          margin: 0 0 10px 0;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .news-subtitle {
          font-size: 0.875rem;
          color: #b8b8b8;
          letter-spacing: 0.2em;
          margin: 0;
          text-transform: uppercase;
          font-weight: 400;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .news-card {
          display: flex;
          gap: 25px;
          padding: 40px 30px;
          border: 1px solid #e8e8e8;
          background: #ffffff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .news-card:hover {
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .news-date {
          flex-shrink: 0;
          text-align: center;
          width: 60px;
          padding-right: 25px;
          border-right: 1px solid #f0f0f0;
        }

        .date-number {
          display: block;
          font-size: 3.2rem;
          font-weight: 300;
          color: #e6c19c;
          line-height: 1;
          margin-bottom: 2px;
        }

        .date-month {
          display: block;
          font-size: 0.9rem;
          color: #b8b8b8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 400;
        }

        .news-content {
          flex: 1;
        }

        .news-meta {
          margin-bottom: 15px;
          font-size: 0.85rem;
          color: #888888;
        }

        .news-meta strong {
          color: #333333;
          font-weight: 600;
        }

        .category {
          margin-right: 20px;
        }

        .news-headline {
          font-size: 1.5rem;
          font-weight: 400;
          color: #333333;
          line-height: 1.4;
          margin: 0 0 15px 0;
          letter-spacing: -0.01em;
        }

        .news-excerpt {
          font-size: 0.95rem;
          color: #888888;
          line-height: 1.6;
          margin: 0 0 20px 0;
        }

        .read-more {
          display: inline-block;
          font-size: 0.8rem;
          color: #e6c19c;
          text-decoration: none;
          letter-spacing: 0.15em;
          font-weight: 500;
          position: relative;
          transition: all 0.3s ease;
        }

        .read-more::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #e6c19c;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .read-more:hover::after {
          transform: scaleX(1);
        }

        .read-more:hover {
          color: #d4a574;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .news-section {
            padding: 60px 0;
          }

          .container {
            padding: 0 15px;
          }

          .news-title {
            font-size: 3rem;
          }

          .news-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .news-card {
            gap: 20px;
            padding: 30px 25px;
          }

          .news-date {
            width: 50px;
            padding-right: 20px;
          }

          .date-number {
            font-size: 2.5rem;
          }

          .news-headline {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .news-title {
            font-size: 2.5rem;
          }

          .news-subtitle {
            font-size: 0.8rem;
          }

          .news-card {
            flex-direction: column;
            gap: 15px;
            padding: 25px 20px;
          }

          .news-date {
            align-self: flex-start;
            width: auto;
            display: flex;
            align-items: baseline;
            gap: 8px;
            padding-right: 0;
            border-right: none;
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 15px;
            margin-bottom: 5px;
          }

          .date-number {
            font-size: 2rem;
          }

          .date-month {
            font-size: 0.8rem;
          }

          .news-headline {
            font-size: 1.2rem;
          }

          .news-excerpt {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default NewsSection;