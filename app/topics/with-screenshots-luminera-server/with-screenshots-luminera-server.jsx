import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-server');
}

export default function WithScreenshotsLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-server" />;
}
