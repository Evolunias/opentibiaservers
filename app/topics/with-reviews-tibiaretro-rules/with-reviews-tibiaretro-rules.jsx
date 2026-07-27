import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-rules');
}

export default function WithReviewsTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-rules" />;
}
