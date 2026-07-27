import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-website');
}

export default function WithScreenshotsUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-website" />;
}
