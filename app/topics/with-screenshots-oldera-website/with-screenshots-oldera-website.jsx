import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-website');
}

export default function WithScreenshotsOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-website" />;
}
