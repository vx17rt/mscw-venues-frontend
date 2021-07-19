import React from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import dateformat from "dateformat";
import { Event } from "../event-types";

interface EventPreviewCardProps {
	event: Event;
	className: string;
}

function EventPreviewCard({ event, className }: EventPreviewCardProps) {
	return (
		<Link href={`/events/${event.slug}`}>
			<a className={cn("block relative group", className)}>
				<Image
					src={event.image.url}
					alt={event.name}
					layout="fill"
					objectFit="cover"
					placeholder="blur"
					className="lg:group-hover:scale-105 origin-top transition-all duration-300"
					blurDataURL={event.image.formats.thumbnail.url}
				/>
				<div className="bg-gradient-to-b from-transparent via-transparent lg:to-transparent to-black lg:bg-black/0 lg:group-hover:bg-black/40 absolute w-full h-full" />
				<div className="absolute bottom-0 lg:top-1/2 px-4 pb-6 lg:p-8">
					<h3 className="mb-1 lg:mb-0 font-light text-xl lg:text-2xl leading-5 text-white lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-1/3 duration-500">
						{event.name}
					</h3>
					<div className="text-xs font-light text-gray-300 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-1/2 duration-300">
						{dateformat(event.date, "dddd, dd mmmm yyyy @ h:MM TT")}
					</div>
				</div>
			</a>
		</Link>
	);
}

export default EventPreviewCard;
