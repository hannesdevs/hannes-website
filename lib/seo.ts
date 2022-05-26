import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'nuro ─ developer';
	const description = "Hey 👋 I'm Johannes, a developer";

	return {
		title,
		description,
		canonical: `https://jb.avionmedia.no/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'nuro',
			url: `https://jb.avionmedia.no/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: '/banner.png',
					alt: description,
					width: 620,
					height: 240,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@hannesdevs',
			site: '@hannesdevs',
		},
		...props,
	};
}
