"use client";

import BlogCard from "@/components/BlogCard/BlogCard";
import useFavorites from "@/hooks/useFavorites";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

function FavoritesPage() {
  const { getFavorites } = useFavorites();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await getFavorites();
      setFavorites(data);
    };

    fetchFavorites();
  }, []);

  if (favorites.length <= 0)
    return (
      <div className={styles.noFavoritesMessage}>
        <p>You have no favorites :(</p>
      </div>
    );

  return (
    <div>
      {favorites.map((favorite) => (
        <BlogCard
          key={favorite.id}
          title={favorite.blogs.title}
          content={favorite.blogs.content}
          userEmail={favorite.users.email}
        />
      ))}
    </div>
  );
}

export default FavoritesPage;
