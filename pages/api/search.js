import { client } from '../../lib/client';

export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Missing search query' });
  }

  try {
    const query = `*[_type == "product" && name match $q]`;
    const products = await client.fetch(query, { q: `${q}*` });
    res.status(200).json(products);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}