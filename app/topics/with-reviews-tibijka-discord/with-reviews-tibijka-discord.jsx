import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-discord');
}

export default function WithReviewsTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-discord" />;
}
