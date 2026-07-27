import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-client');
}

export default function WithScreenshotsLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-client" />;
}
