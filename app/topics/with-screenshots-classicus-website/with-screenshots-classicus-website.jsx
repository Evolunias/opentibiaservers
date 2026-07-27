import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-website');
}

export default function WithScreenshotsClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-website" />;
}
