import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-website');
}

export default function WithScreenshotsTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-website" />;
}
