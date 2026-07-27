import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-website');
}

export default function WithScreenshotsBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-website" />;
}
