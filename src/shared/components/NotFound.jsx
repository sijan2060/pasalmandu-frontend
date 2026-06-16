import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="p-10 text-center">
          <h1 className="text-3xl font-bold">404 - Not Found</h1>
            <Link to="/" className="text-green-600 underline">
              Go Home
            </Link>

            
        </div>
    );
}

