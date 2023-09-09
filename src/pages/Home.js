import { Carousel, Typography, Input, Button } from "@material-tailwind/react";
import { useEffect } from "react";
import CardSlider from "../components/card";
import { fetchData } from '../api/popular';
import { fetchData2 } from '../api/explore';
import { useState } from "react";
import Section2 from '../components/Sections2'

export default function CarouselCustomNavigation() {
    const [restaurants, setRestaurants] = useState([]);
    const [exploreData, setExploreData] = useState([]);
    const [loading, setLoading] = useState(true);
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const results1 = await fetchData();
                setRestaurants(results1.businesses); // Shuffle the results

                const results2 = await fetchData2();
                setExploreData(shuffle(results2.businesses)); // Shuffle the results
            } catch (error) {
                console.error('Error in App component:', error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [])

    if (loading) {
        return <Typography variant="h4" className="text-center mt-4">Loading...</Typography>;
    }

    return (
        <div>
            <section className="header-banner h-96 w-full bg-yellow-50">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-white">Best food waiting for your belly</h1>

                    <div className="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center">
                        <input type="text" className="rounded-full px-4 focus:outline-none w-full bg-transparent" placeholder="Search here ......." />
                        <button className="text-sm bg-primary py-3 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">Search</button>
                    </div>
                </div>
            </section>
            <CardSlider data={restaurants} />
            <Section2 exploreData={exploreData} isLoading={loading} /> 
        </div>
    );
}
