"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';


interface AIOutput {
  slug: string;
  aiResponse: string;
  createdAt: string;
}

interface FetchDataResponse {
  success: boolean;
  data: AIOutput[];
  error?: string;
}

const FetchedData: React.FC = () => {
  const [data, setData] = useState<AIOutput[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useUser()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post<FetchDataResponse>('/api/historyContent', { createdBy: user });
        if (response.data.success) {
          setData(response.data.data);
        } else {
          setError(response.data.error || 'An unknown error occurred');
        }
      } catch (error) {
        setError(error.response ? error.response.data.error : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      {data && data.length > 0 ? (
        <ul>
          {data.map(item => (
            <li key={item.slug}>
              <p><strong>Slug:</strong> {item.slug}</p>
              <p><strong>AI Response:</strong> {item.aiResponse}</p>
              <p><strong>Created At:</strong> {new Date(item.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default FetchedData;