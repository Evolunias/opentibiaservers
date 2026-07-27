import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-website');
}

export default function WithScreenshotsNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-website" />;
}
