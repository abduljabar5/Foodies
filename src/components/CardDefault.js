import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function CardDefault({ restaurant }) {
    return (
        <Card className="my-6 mx-auto w-full sm:w-3/4 md:w-96 shadow-md">
            <CardHeader color="blue-gray" className="relative h-40 sm:h-48 md:h-56">
                <img
                    src={restaurant.image_url || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
                    alt={restaurant.name || "card-image"}
                    className="w-full h-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="text-lg sm:text-xl md:text-2xl mb-2">
                    {restaurant.name || "Restaurant Name"}
                </Typography>
                <Typography className="text-sm sm:text-base">
                    {restaurant.location.address1 || "Restaurant Address"}
                </Typography>
                <Typography className="text-xs sm:text-sm mt-2">
                    {`${restaurant.rating || "-"} stars, ${restaurant.review_count || "-"} reviews`}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button className="text-xs sm:text-base">Read More</Button>
            </CardFooter>
        </Card>
    );
}
