import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

export function BookingCard({ data }) {
  return (
<Card className="w-full max-w-[26rem] shadow-lg">
  <CardHeader 
    floated={false} 
    color="blue-gray"
    className="relative" 
    style={{ paddingTop: '56.25%' }}  
  >
    <img 
      src={data.image_url}
      alt={data.name}
      className="absolute top-0 left-0 w-full h-full object-cover" 
    />
  </CardHeader>
  <CardBody>
    <div className="flex justify-between items-center mb-4">
      <Typography variant="h5" color="blue-gray" className="font-medium">
        {data.name}
      </Typography>

      <div className="flex items-center">
        <Typography color="blue-gray" className="flex items-center gap-1.5 font-normal mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="-mt-0.5 h-5 w-5 text-yellow-700"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
          {data.rating} 
        </Typography>

        <Typography color="blue-gray">
          {data.price}
        </Typography>
      </div>
    </div>

    <Typography color="blue-gray" className="mb-2">
      {data.location.address1}, {data.location.city}, {data.location.zip_code}
    </Typography>
    
    <Typography color="blue-gray" className="mb-2">
      Phone: {data.phone}
    </Typography>

    <Typography color="blue-gray" className="mb-2">
      <a href={data.url} target="_blank" rel="noopener noreferrer">Visit on Yelp</a>
    </Typography>

  </CardBody>
  <CardFooter className="pt-3">
    <Button>Read More</Button>
  </CardFooter>
</Card>

  );
}

export default BookingCard;
