import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-website');
}

export default function WithScreenshotsXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-website" />;
}
