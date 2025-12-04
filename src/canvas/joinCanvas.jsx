  import { useEffect } from 'react';
  import { useParams, useNavigate } from 'react-router-dom';

  export function JoinCanvas() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      async function joinCanvas() {
        try {
          const response = await fetch(`/api/canvas/${id}/join`, {
            method: 'POST'
          });

          if (response.ok) {
            // Successfully joined, go to the canvas
            navigate(`/canvas/${id}`);
          } else {
            // Failed to join, go to dashboard
            alert('Could not join canvas');
            navigate('/dashboard');
          }
        } catch (error) {
          console.error('Error joining canvas:', error);
          navigate('/dashboard');
        }
      }

      joinCanvas();
    }, [id, navigate]);

    return <div>Joining canvas...</div>;
  }
