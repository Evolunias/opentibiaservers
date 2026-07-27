import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-website');
}

export default function WithScreenshotsThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-website" />;
}
