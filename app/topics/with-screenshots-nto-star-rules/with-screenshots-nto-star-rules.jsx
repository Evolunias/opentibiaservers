import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-rules');
}

export default function WithScreenshotsNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-rules" />;
}
