import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-discord');
}

export default function WithReviewsTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-discord" />;
}
