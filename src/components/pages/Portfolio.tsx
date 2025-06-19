import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient.tsx";
import { Link } from "react-router-dom";
import PortfolioFeature from "../PortfolioFeature";
import "../../styles/Portfolio.css";

type Post = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  link: string;
  position: number;
  link_text: string;
};

const Portfolio = () => {
  const [features, setFeatures] = useState<Post[]>([]);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("features")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching posts:", error);
      else setFeatures(data);
    };

    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

      if (user?.email === adminEmail) {
        setIsAuthorized(true);
      }
    };

    fetchPosts();
    checkAuth();
  }, []);

  return (
    <>
      <div className="portfolio-container">
        {isAuthorized && (
          <div style={{ marginBottom: "1rem" }}>
            <Link to="/portfolioeditor" className="">
              + Create New Feature
            </Link>
          </div>
        )}
        {features.map((feature) => (
          <div key={feature.id} className="feature-with-edit">
            <PortfolioFeature
              key={feature.id}
              id={feature.id}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.image_url}
              link={feature.link}
              linkText={feature.link_text}
              isAuthorized={isAuthorized}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
