import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ranger-s-arcani-tibia');
}

export default function WithScreenshotsRangerSArcaniTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ranger-s-arcani-tibia" />;
}
