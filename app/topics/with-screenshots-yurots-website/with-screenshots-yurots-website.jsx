import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-website');
}

export default function WithScreenshotsYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-website" />;
}
