import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-website');
}

export default function WithScreenshotsElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-website" />;
}
