import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ranger-s-arcani');
}

export default function WithScreenshotsRangerSArcaniKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ranger-s-arcani" />;
}
