import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-discord');
}

export default function WithReviewsXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-discord" />;
}
