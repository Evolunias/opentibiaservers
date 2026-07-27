import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-discord');
}

export default function WithReviewsTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-discord" />;
}
