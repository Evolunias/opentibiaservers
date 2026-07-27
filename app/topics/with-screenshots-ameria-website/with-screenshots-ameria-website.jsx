import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-website');
}

export default function WithScreenshotsAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-website" />;
}
