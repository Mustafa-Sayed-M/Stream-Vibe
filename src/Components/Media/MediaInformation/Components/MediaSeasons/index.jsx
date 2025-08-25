import { useQuery } from "@tanstack/react-query";
import { GET_SEASON_DETAIL } from "@utils/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import EpisodeCardSkeleton from "./Components/EpisodeCardSkeleton";
import EpisodeCard from "./Components/EpisodeCard";

function MediaSeasons({ className = "", seasonsData = [] }) {

    const { showId } = useParams();
    const [seasonNumber, setSeasonNumber] = useState(null);

    const { data: seasonData, isLoading: seasonDataIsLoading } = useQuery({
        queryKey: [`SHOW_${showId}_SEASON_${seasonNumber}`],
        queryFn: () => GET_SEASON_DETAIL(showId, seasonNumber),
        enabled: !!seasonNumber,
        refetchOnWindowFocus: false
    });

    const handleClick = (seasonNumber) => {
        if (!seasonDataIsLoading) {
            setSeasonNumber(prev => prev === seasonNumber ? null : seasonNumber);
        }
    };

    return (
        <div className={`media-seasons p-4 rounded-md border border-black-color-15 bg-black-color-10 ${className}`}>
            {/* Label */}
            <h2 className="font-semibold mb-4 text-lg">Seasons and Episodes</h2>
            {/* Season */}
            <div className="seasons space-y-3">
                {
                    seasonsData.map((season, index) => {

                        const isOpen = seasonData && seasonNumber === season.season_number;

                        return (
                            <div
                                key={index}
                                className="season-item border border-black-color-15 bg-black-color-6 rounded-xl"
                            >
                                {/* Header */}
                                <div
                                    onClick={() => handleClick(season.season_number)}
                                    className="season-item-header py-4 px-7 rounded-t-md flex items-center justify-between cursor-pointer"
                                >
                                    {/* Season Number */}
                                    <h3>Season {(season.season_number).toString().padStart(2, "0")}</h3>
                                    {/* Icon State */}
                                    <div className="icon-state w-10 h-10 rounded-full leading-10 text-center text-grey-color-60 bg-black-color-8 border border-black-color-15">
                                        <i className={`fa-solid fa-arrow-down fa-fw transition-transform ${isOpen ? "-rotate-180" : ""}`}></i>
                                    </div>
                                </div>
                                {/* Season Episodes */}
                                {
                                    isOpen ? (
                                        <div className="season-episodes px-5">
                                            {
                                                seasonDataIsLoading ? (
                                                    Array.from({ length: 5 }).map((_, index) => (<EpisodeCardSkeleton key={index} />))
                                                ) : (
                                                    seasonData.episodes.map((episode, index) => {

                                                        const episodesLength = seasonData.episodes.length;

                                                        return (
                                                            <EpisodeCard
                                                                episode={episode}
                                                                episodesLength={episodesLength}
                                                                key={index}
                                                            />
                                                        )
                                                    })
                                                )
                                            }
                                        </div>
                                    ) : null
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MediaSeasons;