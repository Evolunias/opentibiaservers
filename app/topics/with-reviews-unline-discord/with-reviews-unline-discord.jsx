import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-discord');
}

export default function WithReviewsUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-discord" />;
}
