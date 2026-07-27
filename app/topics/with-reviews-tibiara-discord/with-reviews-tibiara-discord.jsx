import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-discord');
}

export default function WithReviewsTibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-discord" />;
}
