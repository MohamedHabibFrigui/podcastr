"use client";

import EmptyState from "@/components/EmptyState";
import LoaderSpinner from "@/components/LoaderSpinner";
import PodcastCard from "@/components/PodcastCard";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { podcastData } from "@/constants";
import Searchbar from "@/components/Searchbar";

const DiscoverPage = ({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) => {
  // const podcastData = useQuery(api.podcasts.getPodcastBySearch, {
  //   search: search || "",
  // });

  return (
    <div className="flex flex-col gap-9">
      <Searchbar />
      <div className="flex flex-col gap-9">
        <h1 className="text-20 font-bold text-white-1">
          {!search ? "Discover Trending Podcasts" : "Search results for : "}
          {search && <span className="text-white-2">{search}</span>}
        </h1>
        {podcastData ? (
          <>
            {podcastData.length > 0 ? (
              <div className="podcast_grid">
                {podcastData.map(({ id, title, description, imgURL }) => (
                  <PodcastCard
                    key={id}
                    imgUrl={imgURL}
                    title={title}
                    description={description}
                    podcastId={id}
                  />
                ))}
                {/* {podcastData?.map(
                  ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
                    <PodcastCard
                      key={_id}
                      imgUrl={imageUrl!}
                      title={podcastTitle}
                      description={podcastDescription}
                      podcastId={_id}
                    />
                  )
                )} */}
              </div>
            ) : (
              <EmptyState title="No results found" />
            )}
          </>
        ) : (
          <LoaderSpinner />
        )}
      </div>
    </div>
  );
};

export default DiscoverPage;
