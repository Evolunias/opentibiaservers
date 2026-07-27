import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ranger-s-arcani-website');
}

export default function WithScreenshotsRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ranger-s-arcani-website" />;
}
