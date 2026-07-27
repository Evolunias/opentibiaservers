import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-guide-sweden');
}

export default function WithScreenshotsGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-guide-sweden" />;
}
