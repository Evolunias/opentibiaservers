import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-discord');
}

export default function WithReviewsYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-discord" />;
}
