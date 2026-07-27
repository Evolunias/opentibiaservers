import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera');
}

export default function WithScreenshotsLumineraKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera" />;
}
