import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nostalther-website');
}

export default function WithScreenshotsNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nostalther-website" />;
}
