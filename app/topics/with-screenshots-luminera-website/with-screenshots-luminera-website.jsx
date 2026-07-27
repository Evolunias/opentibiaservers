import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-website');
}

export default function WithScreenshotsLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-website" />;
}
