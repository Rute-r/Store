import { useParams } from 'react-router';

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h>{slug}</h>
    </div>
  );
}

export default ProductScreen;
