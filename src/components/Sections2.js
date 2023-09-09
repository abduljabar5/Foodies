import React from 'react';
import { Typography } from "@material-tailwind/react";
import BookingCard from './Card2skeleton';

export default function HiddenGemsSection({ exploreData = [], isLoading }) {
    if (isLoading) {
        return <Typography variant="h4" className="text-center mt-4">Loading...</Typography>;
    }

    return (
        <section className="p-8">
        <Typography variant="h4" className="mb-6">Hidden Gems</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {exploreData && exploreData.length > 0 ? (
                exploreData.splice(0,8).map((gem, index) => (
                    <BookingCard key={index} data={gem} />
                ))
            ) : (
                <Typography variant="h6" className="col-span-4 text-center">No hidden gems found</Typography>
            )}
        </div>
    </section>
    
    );
}
