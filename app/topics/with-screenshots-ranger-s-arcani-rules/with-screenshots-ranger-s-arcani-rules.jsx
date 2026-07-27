import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ranger-s-arcani-rules');
}

export default function WithScreenshotsRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ranger-s-arcani-rules" />;
}
