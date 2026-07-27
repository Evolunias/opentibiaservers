import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-discord');
}

export default function WithReviewsTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-discord" />;
}
