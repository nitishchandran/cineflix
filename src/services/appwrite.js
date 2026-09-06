import { Client, TablesDB, Query, ID } from 'appwrite';

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID);

// NOTE: Appwrite SDK v26 replaced the old "Databases" client with
// "TablesDB". collections -> tables, documents -> rows, attributes -> columns.
// listDocuments/createDocument/updateDocument -> listRows/createRow/updateRow.
export const tablesDB = new TablesDB(client);

/**
 * Called every time a user searches for a movie.
 * If the search term already has a row in the metrics table, its count
 * is incremented. Otherwise a new row is created.
 */
export const updateSearchCount = async (searchTerm, movie) => {
  try {
    const result = await tablesDB.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [Query.equal('searchTerm', searchTerm)],
    });

    if (result.rows.length > 0) {
      const existingRow = result.rows[0];

      await tablesDB.updateRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: existingRow.$id,
        data: {
          count: existingRow.count + 1,
        },
      });
    } else {
      await tablesDB.createRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: ID.unique(),
        data: {
          searchTerm,
          count: 1,
          movie_id: movie.id,
          poster_url: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : 'https://placehold.co/128x180/1a1a2e/ffffff?text=No+Poster',
        },
      });
    }
  } catch (error) {
    console.error('Error updating search count:', error);
  }
};

/**
 * Returns the top 5 most-searched movies, used for the Trending section.
 */
export const getTrendingMovies = async () => {
  try {
    const result = await tablesDB.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [Query.orderDesc('count'), Query.limit(5)],
    });

    return result.rows;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};
