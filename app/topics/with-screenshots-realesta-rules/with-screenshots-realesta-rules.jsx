import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-rules');
}

export default function WithScreenshotsRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-rules" />;
}
