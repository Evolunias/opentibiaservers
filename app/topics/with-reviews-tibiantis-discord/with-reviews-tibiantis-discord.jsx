import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-discord');
}

export default function WithReviewsTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-discord" />;
}
