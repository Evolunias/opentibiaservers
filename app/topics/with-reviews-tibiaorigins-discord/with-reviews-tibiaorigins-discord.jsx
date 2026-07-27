import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaorigins-discord');
}

export default function WithReviewsTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaorigins-discord" />;
}
